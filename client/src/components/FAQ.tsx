import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Сколько можно заработать курьером в Минске?",
      answer: "Средний доход курьера составляет 2000-5000 BYN в месяц. При полной занятости (8-10 часов в день) опытные курьеры зарабатывают 4000-5000 BYN. Начинающие курьеры обычно получают 2000-3000 BYN в первый месяц работы."
    },
    {
      question: "Как часто происходят выплаты?",
      answer: "Выплаты производятся до трёх раз в неделю. Первая выплата происходит через 3 дня после начала работы. Деньги можно получить наличными или на банковскую карту."
    },
    {
      question: "Какие требования к курьеру?",
      answer: "Минимальный возраст — 16 лет. Опыт работы не требуется. Нужен смартфон с Android или iOS. Способ передвижения любой: пешком, велосипед, самокат, мопед или автомобиль."
    },
    {
      question: "Нужно ли платить за термокороб?",
      answer: "Нет, термокороб выдаётся курьеру бесплатно на время работы. Никаких залогов или дополнительных платежей не требуется."
    },
    {
      question: "Какой график работы у курьера?",
      answer: "График полностью свободный. Вы сами выбираете, когда и сколько работать. Нет минимальной смены или обязательных часов. Можете работать утром, днём, вечером или ночью."
    },
    {
      question: "Как быстро можно начать работать?",
      answer: "После подачи заявки менеджер свяжется с вами в течение 15 минут. Процесс регистрации и получения доступа к приложению занимает 1-2 часа. Первые заказы можно получить в тот же день."
    },
    {
      question: "Что делать, если нет своего транспорта?",
      answer: "Можно работать пешим курьером в центре Минска. Многие заказы находятся в пешей доступности. Также можно арендовать велосипед или электросамокат для увеличения количества заказов."
    },
    {
      question: "Есть ли поддержка для курьеров?",
      answer: "Да, у нас работает круглосуточная служба поддержки. Помогаем решать технические вопросы, проблемы с заказами и выплатами. Также проводим обучение для новых курьеров."
    },
    {
      question: "Можно ли работать курьером в других городах Беларуси?",
      answer: "В настоящее время мы работаем преимущественно в Минске. В других городах количество заказов ограничено, но при желании можно попробовать подать заявку."
    },
    {
      question: "Какие документы нужны для работы?",
      answer: "Для работы курьером нужны только паспорт и номер телефона. Если планируете работать на автомобиле — водительские права. Никаких справок или дополнительных документов не требуется."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        <div className="absolute top-10 right-[10%] w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full filter blur-[70px]"></div>
      </div>

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
            <HelpCircle size={14} className="mr-2" />
            <span>Популярные вопросы</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Часто задаваемые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на самые важные вопросы о работе курьером в Минске
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10 shadow-sm overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className="font-semibold text-lg text-gray-900 pr-4"
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div
                      className="px-6 pb-6 text-gray-700 leading-relaxed"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        {faq.answer}
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-primary/10 shadow-md p-8">
              <h3 className="text-xl font-bold mb-3">Остались вопросы?</h3>
              <p className="text-muted-foreground mb-6">
                Наш менеджер ответит на все ваши вопросы при личном звонке
              </p>
              <a
                href="#hero"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Получить консультацию
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
