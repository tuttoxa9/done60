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

// Iridescence фон для всей страницы
function IridescenceBackground() {
  return (
    <>
      {/* Iridescence Background */}
      <div className="fixed inset-0 -z-10">
        <Iridescence
          color={[0.8, 0.9, 1]}
          speed={0.2}
          amplitude={0.03}
          mouseReact={true}
        />
      </div>
      {/* Overlay для лучшей читаемости */}
      <div className="fixed inset-0 bg-white/75 -z-5"></div>
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
      <IridescenceBackground />
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
