import { motion } from "framer-motion";
import methodologyImg from "@/assets/methodology.jpg";

const phases = [
  { number: "01", title: "INTRODUÇÃO", desc: "Desenvolvimento neuromuscular e adaptações iniciais" },
  { number: "02", title: "CONSOLIDAÇÃO", desc: "Hipertrofia e trabalho pliométrico" },
  { number: "03", title: "INTENSIFICAÇÃO", desc: "Força e potência com acompanhamento completo" },
  { number: "04", title: "RECONSOLIDAÇÃO", desc: "Treinos metabólicos de alta intensidade" },
  { number: "05", title: "INTEGRAÇÃO", desc: "Conclusão do ciclo e nova periodização" },
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={methodologyImg} alt="Metodologia Venkon" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Jornada Venkon
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            METODOLOGIA CIENTÍFICA
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Treinos periodizados em 5 etapas, cada uma com ~48 sessões, com avaliações físicas e biomecânicas a cada mudança de fase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-card/50 border border-border hover:border-primary/40 transition-all duration-500 group"
            >
              <span className="font-display text-5xl text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                {phase.number}
              </span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-2">{phase.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{phase.desc}</p>

              {/* Connector line */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
