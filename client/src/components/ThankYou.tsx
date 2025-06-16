import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import {
  CheckCircle2,
  ArrowLeft,
  Clock,
  Phone,
  Calendar,
  Sparkles,
  Gift,
  Users,
  Star,
  TrendingUp,
  Shield,
  Banknote,
  Car,
  Bike,
  Smartphone,
  MessageCircle,
  MapPin,
  Heart,
  Zap,
  Trophy,
  Headset
} from "lucide-react";
import { Button } from "@/lib/ui-components";
import Iridescence from "./Iridescence";

export default function ThankYou() {
  const [, setLocation] = useLocation();
  const [showAnimation, setShowAnimation] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    // Убираем строгую проверку - показываем страницу в любом случае
    const hasSuccessfulSubmission = sessionStorage.getItem('formSubmitted');

    console.log('ThankYou: checking formSubmitted flag:', hasSuccessfulSubmission);

    if (hasSuccessfulSubmission) {
      console.log('ThankYou: formSubmitted flag found, removing it');
      sessionStorage.removeItem('formSubmitted');
    } else {
      console.log('ThankYou: no formSubmitted flag, but showing page anyway');
    }

    // Анимация появления
    setTimeout(() => setShowAnimation(true), 100);
    setTimeout(() => setShowStats(true), 1500);

    // Анимация шагов
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(stepInterval);
  }, [setLocation]);

  const handleGoBack = () => {
    setLocation('/');
  };

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Гибкий график",
      description: "Работайте когда удобно - выбирайте время и количество часов сами",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Бонусы",
      description: "Регулярные премии за качественную работу и выполнение планов",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Поддержка 24/7",
      description: "Наша команда всегда готова помочь вам в любое время",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Растущий доход",
      description: "Чем больше заказов - тем выше ваш ежедневный заработок",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Стабильность",
      description: "Постоянный поток заказов и гарантированные выплаты",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Удобное приложение",
      description: "Простой интерфейс для получения и выполнения заказов",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const stats = [
    { number: "15", label: "мин до первого заказа", icon: <Zap className="h-5 w-5" /> },
    { number: "24/7", label: "техподдержка", icon: <Headset className="h-5 w-5" /> },
    { number: "5000+", label: "активных курьеров", icon: <Trophy className="h-5 w-5" /> }
  ];

  const workTypes = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "На автомобиле",
      description: "Больше заказов, выше доход",
      earnings: "до 250 руб/день"
    },
    {
      icon: <Bike className="h-8 w-8" />,
      title: "На велосипеде",
      description: "Экологично и быстро по городу",
      earnings: "до 150 руб/день"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Пешком",
      description: "Короткие расстояния в центре",
      earnings: "до 130 руб/день"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Iridescence Background */}
      <div className="absolute inset-0 -z-10">
        <Iridescence
          color={[0.7, 0.9, 1]}
          speed={0.3}
          amplitude={0.05}
          mouseReact={false}
        />
      </div>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/70 -z-5"></div>

      <div className="container-custom min-h-screen flex items-center justify-center py-20">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Enhanced Success Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/25">
              <CheckCircle2 className="h-16 w-16 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 animate-ping">
              <Sparkles className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="absolute -bottom-2 -left-6 animate-pulse delay-300">
              <Star className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="absolute top-2 -left-8 animate-pulse delay-700">
              <Heart className="h-5 w-5 text-red-400" />
            </div>
            <div className="absolute -top-2 left-8 animate-pulse delay-1000">
              <Trophy className="h-5 w-5 text-yellow-600" />
            </div>
          </div>

          {/* Enhanced Main Message */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent animate-pulse">
                Поздравляем!
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
              Ваша заявка успешно отправлена
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Мы получили вашу заявку и уже начали её обработку.
              Наш менеджер свяжется с вами в ближайшее время для завершения регистрации.
            </p>

            {/* Stats Section */}
            {showStats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`glass-card p-4 border border-white/20 shadow-lg transition-all duration-500 ${showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center justify-center mb-2 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Enhanced Next Steps */}
          <div className="glass-card p-8 mb-10 border border-white/20 shadow-xl">
            <h3 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
              <Phone className="h-8 w-8 text-primary" />
              Что происходит дальше?
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Звонок менеджера",
                  description: "В течение 15 минут с вами свяжется наш специалист для подтверждения заявки",
                  time: "15 мин"
                },
                {
                  title: "Оформление документов",
                  description: "Быстрая регистрация в системе и подключение к приложению курьера",
                  time: "30 мин"
                },
                {
                  title: "Начало работы",
                  description: "Получение первых заказов и начало заработка уже сегодня",
                  time: "1 час"
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className={`w-16 h-16 mx-auto rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xl mb-4 transition-all duration-500 ${
                    currentStep === index
                      ? 'bg-gradient-to-br from-green-500 to-green-600 scale-110 animate-pulse'
                      : 'bg-gradient-to-br from-blue-500 to-primary'
                  }`}>
                    {index + 1}
                  </div>
                  <h4 className="font-semibold mb-2 text-lg">{step.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Types Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6">Выберите удобный способ работы</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {workTypes.map((type, index) => (
                <div
                  key={index}
                  className={`glass-card p-6 border border-white/20 shadow-lg transition-all duration-500 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-4">
                    {type.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-lg">{type.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                    {type.earnings}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`glass-card p-6 border border-white/20 shadow-lg transition-all duration-500 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + 6) * 200}ms` }}
              >
                <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {benefit.icon}
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Contact Info */}
          <div className="glass-card p-6 mb-10 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              Есть вопросы? Свяжитесь с нами прямо сейчас!
            </h3>
            <p className="text-gray-600 mb-6">
              Наши менеджеры онлайн и готовы ответить на все ваши вопросы о работе курьером
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/xtxa666"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg"
              >
                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Написать в Telegram
              </a>
              <a
                href="tel:+375"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Позвонить сейчас
              </a>
            </div>
          </div>

          {/* Enhanced Back Button */}
          <Button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg primary-gradient text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
}
