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
  Star
} from "lucide-react";
import { Button } from "@/lib/ui-components";

export default function ThankYou() {
  const [, setLocation] = useLocation();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Проверяем, пришел ли пользователь с успешной отправки формы
    const hasSuccessfulSubmission = sessionStorage.getItem('formSubmitted');

    console.log('ThankYou: checking formSubmitted flag:', hasSuccessfulSubmission);

    // Показываем страницу в любом случае, убираем строгую проверку
    if (hasSuccessfulSubmission) {
      console.log('ThankYou: formSubmitted flag found, removing it');
      sessionStorage.removeItem('formSubmitted');
    } else {
      console.log('ThankYou: no formSubmitted flag, but showing page anyway');
    }

    // Анимация появления
    setTimeout(() => setShowAnimation(true), 100);
  }, [setLocation]);

  const handleGoBack = () => {
    setLocation('/');
  };

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Быстрый старт",
      description: "Начните работать уже через 15 минут после звонка менеджера"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Бонусы новичкам",
      description: "Специальные предложения для новых курьеров в первый месяц"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Поддержка 24/7",
      description: "Наша команда всегда готова помочь вам в любое время"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50/50 to-secondary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/20 rounded-full filter blur-[80px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container-custom min-h-screen flex items-center justify-center py-20">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Success Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/25 animate-bounce">
              <CheckCircle2 className="h-16 w-16 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 animate-pulse">
              <Sparkles className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="absolute -bottom-2 -left-6 animate-pulse delay-300">
              <Star className="h-6 w-6 text-yellow-500" />
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                Поздравляем!
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
              Ваша заявка успешно отправлена
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Мы получили вашу заявку и уже начали её обработку. Наш менеджер свяжется с вами в ближайшее время для завершения регистрации.
            </p>
          </div>

          {/* Next Steps */}
          <div className="glass-card p-8 mb-10 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              Что происходит дальше?
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-primary shadow-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Звонок менеджера</h4>
                <p className="text-sm text-gray-600">В течение 15 минут с вами свяжется наш специалист</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-primary shadow-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Оформление документов</h4>
                <p className="text-sm text-gray-600">Быстрая регистрация и подключение к системе</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-primary shadow-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Начало работы</h4>
                <p className="text-sm text-gray-600">Получение первых заказов и заработок</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`glass-card p-6 border border-white/20 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="glass-card p-6 mb-10 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Есть вопросы? Свяжитесь с нами прямо сейчас!</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/xtxa666"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <a
                href="tel:+375"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Позвонить
              </a>
            </div>
          </div>

          {/* Back Button */}
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
