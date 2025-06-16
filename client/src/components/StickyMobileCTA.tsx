import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Скролл к форме заявки
  const scrollToForm = () => {
    const formSection = document.querySelector('[data-section="application-form"]');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Открыть Telegram
  const openTelegram = () => {
    window.open('https://t.me/unic_courier_bot', '_blank');
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
          <div className="flex gap-3 max-w-sm mx-auto">
            {/* Основная CTA кнопка */}
            <Button
              onClick={scrollToForm}
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
              ⚡ Звонок за 15 минут • 🚀 Первый заказ в день подачи
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(stickyButton, document.body);
}
