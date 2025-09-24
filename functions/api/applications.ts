// Cloudflare Worker function для обработки заявок

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

export async function onRequestPost(context: any): Promise<Response> {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  try {
    // Получаем данные из тела запроса
    const data: ApplicationData = await request.json();

    // Проверка наличия телефона (обязательное поле для всех типов заявок)
    if (!data.phone) {
      return new Response(
        JSON.stringify({ message: "Missing required field: phone" }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Определяем тип заявки
    const isFullApplication = 'fullName' in data && 'birthDate' in data;
    const isQuickApplication = 'source' in data || (!('fullName' in data) && !('birthDate' in data));

    console.log('Application type:', isFullApplication ? 'full' : 'quick', 'Data:', data);

    // Получаем токен бота и ID чата из переменных окружения
    const botToken = env.TELEGRAM_BOT_TOKEN;
    const chatId = env.TELEGRAM_CHAT_ID;

    // Проверка наличия переменных окружения
    if (!botToken || !chatId) {
      console.error("Missing environment variables:");
      console.error("TELEGRAM_BOT_TOKEN exists:", !!botToken);
      console.error("TELEGRAM_CHAT_ID exists:", !!chatId);
      return new Response(
        JSON.stringify({
          message: "Server configuration error",
          details: `Missing: ${!botToken ? 'TELEGRAM_BOT_TOKEN ' : ''}${!chatId ? 'TELEGRAM_CHAT_ID' : ''}`
        }),
        { status: 500, headers: corsHeaders }
      );
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
      const responseText = await telegramResponse.text();
      console.error("Telegram API error:", responseText);
      console.error("Response status:", telegramResponse.status);

      let telegramError;
      try {
        telegramError = JSON.parse(responseText);
      } catch (e) {
        telegramError = { description: responseText };
      }

      throw new Error(`Failed to send message to Telegram: ${telegramResponse.status} - ${telegramError.description || responseText}`);
    }

    const telegramResult = await telegramResponse.json();
    console.log("Message sent successfully to Telegram:", telegramResult);

    // Возвращаем успешный ответ
    return new Response(
      JSON.stringify({
        message: "Application submitted successfully",
        type: isFullApplication ? 'full' : 'quick'
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error processing application:", error);

    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

// Обработка OPTIONS запросов для CORS
export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    },
  });
}
