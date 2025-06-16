import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [phone, setPhone] = useState("+375");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Проверка мобильного устройства
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Показать кнопку после небольшой задержки для скролла
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // Открыть форму заявки
  const openForm = () => {
    setIsFormOpen(true);
  };

  // Закрыть форму
  const closeForm = () => {
    setIsFormOpen(false);
    setPhone("+375");
    setIsSuccess(false);
  };

  // Открыть Telegram
  const openTelegram = () => {
    window.open('https://t.me/xtxa666', '_blank');
  };

  // Обработка изменения номера телефона
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d+]/g, '');
    if (!value.startsWith('+375')) {
      value = '+375' + value.replace(/[^\d]/g, '');
    }
    value = value.slice(0, 13); // +375 + 9 цифр
    setPhone(value);
  };

  // Отправка формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 13) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/.netlify/functions/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phone,
          source: 'sticky_mobile_cta'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          closeForm();
        }, 2000);
      }
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMobile) return null;

  const stickyButton = (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="sticky-mobile-cta"
          style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: 9999,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(8px)',
            borderTop: '1px solid #e5e7eb',
            boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            paddingBottom: 'max(1rem, env(safe-area-inset-bottom))'
          }}
        >
          {/* Форма быстрой заявки */}
          <AnimatePresence>
            {isFormOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-b border-gray-200 pb-4 mb-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold">Быстрая заявка</h3>
                  <Button
                    onClick={closeForm}
                    variant="ghost"
                    size="sm"
                    className="p-1 h-6 w-6"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {isSuccess ? (
                  <div className="text-center py-4">
                    <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="text-sm font-medium">Заявка отправлена!</p>
                    <p className="text-xs text-gray-600">Мы свяжемся с вами в Telegram</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Номер телефона"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        maxLength={13}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={phone.length !== 13 || isSubmitting}
                      className="w-full h-10 text-sm bg-primary hover:bg-primary/90 text-white"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full border-2 border-t-transparent border-white animate-spin" />
                          Отправка...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Отправить
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-3 max-w-sm mx-auto">
            {/* Основная CTA кнопка */}
            <Button
              onClick={openForm}
              size="lg"
              className="flex-1 h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Получить звонок
            </Button>

            {/* Telegram кнопка */}
            <Button
              onClick={openTelegram}
              variant="outline"
              size="lg"
              className="h-12 px-4 border-primary text-primary hover:bg-primary hover:text-white shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>

          {/* Индикатор преимуществ */}
          <div className="text-center mt-2">
            <p className="text-xs text-gray-600">
              ⚡ Звонок за 15 минут • 🚀 Быстрый старт работы
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(stickyButton, document.body);
}
