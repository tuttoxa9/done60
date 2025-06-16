import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

// Интерфейс для полной заявки
interface FullApplicationData {
  fullName: string;
  birthDate: string;
  phone: string;
}

// Интерфейс для быстрой заявки (только телефон)
interface QuickApplicationData {
  phone: string;
  source?: string;
}

// Объединенный тип
type ApplicationData = FullApplicationData | QuickApplicationData;

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Проверка метода запроса
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Получаем данные из тела запроса
    const data: ApplicationData = JSON.parse(event.body || "{}");

    // Проверка наличия телефона (обязательное поле для всех типов заявок)
    if (!data.phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required field: phone" }),
      };
    }

    // Определяем тип заявки
    const isFullApplication = 'fullName' in data && 'birthDate' in data;
    const isQuickApplication = 'source' in data || (!('fullName' in data) && !('birthDate' in data));

    console.log('Application type:', isFullApplication ? 'full' : 'quick', 'Data:', data);

    // Получаем токен бота и ID чата из переменных окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Проверка наличия переменных окружения
    if (!botToken || !chatId) {
      console.error("Missing environment variables: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Server configuration error" }),
      };
    }

    // Формируем сообщение для отправки в зависимости от типа заявки
    let message: string;

    if (isFullApplication) {
      const fullData = data as FullApplicationData;
      message = `🔔 *Новая заявка с сайта*\n\n📋 *ФИО*: ${fullData.fullName}\n🎂 *Дата рождения*: ${fullData.birthDate}\n📱 *Телефон*: ${fullData.phone}\n\n⏰ *Дата заявки*: ${new Date().toLocaleString('ru-RU')}`;
    } else {
      const quickData = data as QuickApplicationData;
      const source = quickData.source || 'unknown';
      message = `⚡ *Быстрая заявка с сайта*\n\n📱 *Телефон*: ${quickData.phone}\n📍 *Источник*: ${source}\n\n⏰ *Дата заявки*: ${new Date().toLocaleString('ru-RU')}`;
    }

    // Отправляем сообщение в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.json();
      console.error("Telegram API error:", telegramError);
      console.error("Response status:", telegramResponse.status);
      console.error("Response text:", await telegramResponse.text());
      throw new Error(`Failed to send message to Telegram: ${telegramResponse.status}`);
    }

    const telegramResult = await telegramResponse.json();
    console.log("Message sent successfully to Telegram:", telegramResult);

    // Возвращаем успешный ответ
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Application submitted successfully",
        type: isFullApplication ? 'full' : 'quick'
      }),
    };
  } catch (error) {
    console.error("Error processing application:", error);
    console.error("Request body:", event.body);
    console.error("Environment check - Bot token exists:", !!process.env.TELEGRAM_BOT_TOKEN);
    console.error("Environment check - Chat ID exists:", !!process.env.TELEGRAM_CHAT_ID);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error"
      }),
    };
  }
};

export { handler };
