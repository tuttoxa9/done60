import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Условия использования
          </h1>

          <div className="prose max-w-none">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10 mb-8">
              <p className="text-gray-600 mb-6">
                Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  1. Общие положения
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Настоящие Условия использования (далее — «Условия») регулируют отношения между
                  пользователями и сайтом unictaste.ru (далее — «Сайт», «Сервис»).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Сайт unictaste.ru предоставляет услуги по подбору курьеров в компании-партнёры,
                  которые заключают договор с Яндекс Доставкой для предоставления услуг доставки еды и товаров.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Используя Сайт, вы соглашаетесь с настоящими Условиями в полном объёме.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  2. Описание услуг
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Наши услуги включают:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Подбор подходящих вакансий курьера в компаниях-партнёрах</li>
                  <li>Консультации по трудоустройству в сфере доставки</li>
                  <li>Предоставление информации о требованиях и условиях работы</li>
                  <li>Помощь в оформлении документов для трудоустройства</li>
                  <li>Сопровождение процесса устройства на работу</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  3. Обязанности сторон
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">3.1. Обязанности Сервиса:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Предоставлять актуальную информацию о вакансиях</li>
                  <li>Обеспечивать конфиденциальность персональных данных</li>
                  <li>Оказывать поддержку в процессе трудоустройства</li>
                  <li>Предоставлять достоверную информацию о компаниях-партнёрах</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">3.2. Обязанности Пользователя:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Предоставлять достоверную информацию о себе</li>
                  <li>Соблюдать требования законодательства Республики Беларусь</li>
                  <li>Не использовать Сервис в противоправных целях</li>
                  <li>Уведомлять о изменении контактной информации</li>
                  <li>Добросовестно участвовать в процессе трудоустройства</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  4. Процесс трудоустройства
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Процесс трудоустройства включает следующие этапы:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                  <li>Подача заявки через форму на сайте</li>
                  <li>Связь с менеджером для предварительной консультации</li>
                  <li>Подбор подходящих вакансий в компаниях-партнёрах</li>
                  <li>Передача контактных данных партнёрам для прямого контакта</li>
                  <li>Прохождение собеседования и оформление у работодателя</li>
                  <li>Заключение трудового договора с компанией-партнёром</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  5. Партнёрские отношения
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Компании-партнёры, в которые мы осуществляем подбор персонала:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Имеют действующие договоры с Яндекс Доставкой</li>
                  <li>Обеспечивают прозрачную систему оплаты труда</li>
                  <li>Предоставляют гибкий график работы</li>
                  <li>Гарантируют своевременные выплаты курьерам</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  6. Ограничения ответственности
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Сервис не несёт ответственности за:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Действия или бездействие компаний-партнёров</li>
                  <li>Условия труда, предоставляемые работодателями</li>
                  <li>Размер заработной платы и премиальных выплат</li>
                  <li>Отказ компании-партнёра в трудоустройстве</li>
                  <li>Изменение условий работы после трудоустройства</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  7. Стоимость услуг
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Услуги по подбору курьеров предоставляются <strong>бесплатно</strong> для соискателей.
                  Все расходы покрываются комиссионными от компаний-партнёров.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  8. Требования к кандидатам
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Для трудоустройства курьером необходимо:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Возраст от 16 лет</li>
                  <li>Наличие документов, удостоверяющих личность</li>
                  <li>Мобильный телефон с доступом в интернет</li>
                  <li>Готовность к физическим нагрузкам</li>
                  <li>Желательно наличие собственного транспорта (велосипед, самокат, автомобиль)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  9. Конфиденциальность
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Вопросы обработки персональных данных регулируются
                  <a href="/privacy-policy" className="text-primary hover:underline"> Политикой конфиденциальности</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  10. Порядок разрешения споров
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Все споры решаются путём переговоров. При невозможности достижения соглашения
                  споры подлежат рассмотрению в судебном порядке в соответствии с законодательством
                  Республики Беларусь.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  11. Контактная информация
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Служба поддержки:</strong> support@unictaste.ru<br/>
                    <strong>Вопросы по трудоустройству:</strong> hr@unictaste.ru<br/>
                    <strong>Адрес:</strong> г. Минск, ул. Игнатенко 7<br/>
                    <strong>Время работы:</strong> Пн-Пт 9:00-18:00
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  12. Изменения условий
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Мы оставляем за собой право изменять настоящие Условия. Изменения вступают в силу
                  с момента их публикации на сайте. Продолжение использования Сервиса после внесения
                  изменений означает ваше согласие с новыми Условиями.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
