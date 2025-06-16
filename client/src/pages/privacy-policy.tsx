import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Политика конфиденциальности
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
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты
                  персональных данных пользователей сайта unictaste.ru (далее — «Сайт»).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Сайт unictaste.ru осуществляет услуги подбора курьеров в компании-партнёры,
                  которые заключают договор с Яндекс Доставкой для предоставления услуг доставки.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  2. Обрабатываемые персональные данные
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  При использовании Сайта мы можем собирать следующие персональные данные:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Фамилия, имя, отчество</li>
                  <li>Дата рождения</li>
                  <li>Номер телефона</li>
                  <li>Информация о посещении сайта (IP-адрес, тип браузера, время посещения)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  3. Цели обработки персональных данных
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Персональные данные обрабатываются в следующих целях:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Подбор подходящих вакансий курьера</li>
                  <li>Связь с потенциальными кандидатами</li>
                  <li>Передача данных компаниям-партнёрам для трудоустройства</li>
                  <li>Улучшение качества предоставляемых услуг</li>
                  <li>Ведение статистики и аналитики</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  4. Передача данных третьим лицам
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ваши персональные данные могут быть переданы:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Компаниям-партнёрам, сотрудничающим с Яндекс Доставкой</li>
                  <li>Непосредственно в Яндекс Доставка для оформления трудовых отношений</li>
                  <li>Государственным органам при наличии законного требования</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  5. Сроки хранения данных
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Персональные данные хранятся в течение периода, необходимого для достижения
                  целей обработки, но не более 3 лет с момента последнего обращения, если иное
                  не предусмотрено законодательством.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  6. Права субъектов персональных данных
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Вы имеете право:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Получать информацию об обработке ваших персональных данных</li>
                  <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                  <li>Отзывать согласие на обработку персональных данных</li>
                  <li>Обращаться в органы по защите прав субъектов персональных данных</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  7. Безопасность данных
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Мы принимаем необходимые технические и организационные меры для защиты
                  персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  8. Cookies и аналитика
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Сайт использует файлы cookie и системы веб-аналитики (Яндекс.Метрика, Google Analytics)
                  для улучшения функциональности сайта и анализа посещаемости.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  9. Контактная информация
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  По вопросам обработки персональных данных обращайтесь:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@unictaste.ru<br/>
                    <strong>Адрес:</strong> г. Минск, ул. Игнатенко 7
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  10. Изменения в политике конфиденциальности
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Мы оставляем за собой право изменять данную Политику конфиденциальности.
                  Изменения вступают в силу с момента их публикации на сайте.
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
