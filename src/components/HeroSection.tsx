import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Venkon Training Center" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-6"
        >
          Performance and Health
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-6"
        >
          TREINE MELHOR,
          <br />
          <span className="text-gradient">VIVA MELHOR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Ecossistema 360° de saúde e performance. Ciência esportiva, tecnologia de ponta e acompanhamento interdisciplinar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5511932311310"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all duration-300 animate-pulse-glow"
          >
            Agende sua experiência
          </a>
          <a
            href="#ecossistema"
            className="px-8 py-4 rounded-lg border border-foreground/20 text-foreground font-body text-sm font-medium uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            Conheça a Venkon
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
