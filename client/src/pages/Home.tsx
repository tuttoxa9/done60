import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowToStart from "@/components/HowToStart";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Iridescence from "@/components/Iridescence";

// Эффект анимации с размытием - полная версия для всех устройств
const fadeFromBlur = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 1.01 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

// Фон для всей страницы
function PageBackground() {
  return (
    <>
      {/* Десктопная WebGL анимация */}
      <div className="fixed inset-0 -z-10 hidden md:block">
        <Iridescence
          color={[0.8, 0.9, 1]}
          speed={0.3}
          amplitude={0.15}
          mouseReact={true}
        />
        {/* Overlay для лучшей читаемости - только на десктопе */}
        <div className="absolute inset-0 bg-white/60 -z-5"></div>
      </div>

      {/* Для мобильных - никаких дополнительных элементов, только body CSS */}
    </>
  );
}

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col relative"
      initial="hidden"
      animate="visible"
      variants={fadeFromBlur}
    >
      <PageBackground />
      <Header />
      <main className="content-wrapper relative z-10">
        <Hero />
        <HowToStart />
        <ApplicationForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </motion.div>
  );
}
