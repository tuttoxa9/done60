import { Steps, User, Bike, ShieldCheck, Briefcase, Clock, Wallet, HelpCircle, FileText, Smartphone, Download } from "lucide-react";
import ShaderLogo from "@/components/ShaderLogo";
import useMobile from "@/hooks/use-mobile";

// Импорт фото счастливого курьера
import manImage from "/images/man3.webp";
import manImageFallback from "/images/man3.png";

export default function HowToStart() {
  const isMobile = useMobile();

  // Шаги для начала работы
  const stepsToStart = [
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Заполни заявку",
      description: "У нас можно работать с 16 лет. Заполните форму на нашем сайте или приходите в офис."
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-secondary" />,
      title: "Термокороб",
      description: "Термокороб выдаётся курьеру бесплатно на время работы."
    },
    {
      icon: <Download className="h-5 w-5 text-primary" />,
      title: "Скачай приложение",
      description: "Скачай приложение для работы на нашем сайте. Доступно на iOS и Android."
    },
    {
      icon: <Clock className="h-5 w-5 text-secondary" />,
      title: "График",
      description: "Полностью свободный график работы. Ты сам выбираешь, когда и сколько работать."
    },
    {
      icon: <Wallet className="h-5 w-5 text-primary" />,
      title: "Оплата",
      description: "Выплаты производятся до трёх раз в неделю."
    },
    {
      icon: <Bike className="h-5 w-5 text-secondary" />,
      title: "Способ передвижения",
      description: "Вы можете работать пешком, на велосипеде, самокате, мопеде или автомобиле."
    }
  ];

  // Часто задаваемые вопросы
  const faqs = [
    {
      question: "Нужен ли опыт работы?",
      answer: "Нет, опыт работы не требуется. Мы проводим обучение для всех новых курьеров."
    },
    {
      question: "Нужно ли платить за термокороб?",
      answer: "Нет, термокороб выдаётся курьеру бесплатно на время работы."
    },
    {
      question: "Какая минимальная смена?",
      answer: "Нет минимальной смены. Вы можете работать столько, сколько вам удобно, график полностью свободный."
    }
  ];

  return (
    <section id="howtostart" className="py-10 md:py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-primary/10 text-sm text-primary font-medium">
            Как начать работать
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">
            Полное руководство для <span className="gradient-text inline-flex items-center gap-2">
              <ShaderLogo width={isMobile ? "25px" : "35px"} height={isMobile ? "25px" : "35px"} /> курьеров
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Подробная информация об условиях работы, требованиях и возможностях заработка
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl mb-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className={`${isMobile ? "h-40" : ""} md:w-1/3 relative rounded-xl overflow-hidden`}>
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <picture>
                  <source srcSet={manImage} type="image/webp" />
                  <img
                    src={manImageFallback}
                    alt="Курьер ЮНИК"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Стань частью команды</h3>
                  <p className="text-sm md:text-base text-white/90">Более 500 курьеров уже зарабатывают с нами</p>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {stepsToStart.map((step, index) => (
                  <div key={index} className="relative p-3 md:p-4 rounded-xl bg-white shadow border border-primary/10">
                    <div className="relative z-10">
                      <div className="flex items-center mb-3 md:mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10">
                          {step.icon}
                        </div>
                        <div className="ml-auto bg-secondary/10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-secondary">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 rounded-xl blur-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl mt-6 md:mt-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 tracking-tight flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              Часто задаваемые вопросы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-3 md:p-4 rounded-xl bg-white/80 shadow">
                  <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">{faq.question}</h4>
                  <p className="text-sm md:text-base text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            {/* Блок с кнопкой "Стать курьером" удалён */}
          </div>
        </div>
      </div>
    </section>
  );
}
