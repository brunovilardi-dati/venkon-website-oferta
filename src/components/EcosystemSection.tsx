import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Apple, Brain, Stethoscope, Snowflake } from "lucide-react";
import trainingImg from "@/assets/training.jpg";
import physioImg from "@/assets/physio.jpg";
import recoveryImg from "@/assets/recovery.jpg";
import nutritionImg from "@/assets/nutrition.jpg";

const services = [
  {
    icon: Dumbbell,
    title: "Treino Personalizado",
    description: "Treinos individualizados e periodizados de acordo com seus objetivos, com equipamentos Keiser de carga pneumática.",
    image: trainingImg,
  },
  {
    icon: HeartPulse,
    title: "Fisioterapia Esportiva",
    description: "Clínica Pace integrada — referência nacional em reabilitação e prevenção de lesões esportivas.",
    image: physioImg,
  },
  {
    icon: Snowflake,
    title: "Recovery",
    description: "Banheira de gelo, bota pneumática e liberação miofascial para recuperação e reparação muscular.",
    image: recoveryImg,
  },
  {
    icon: Apple,
    title: "Nutrição",
    description: "Acompanhamento alimentar específico para potencializar seus resultados e qualidade de vida.",
    image: nutritionImg,
  },
  {
    icon: Brain,
    title: "Psicologia Esportiva",
    description: "Suporte mental para alta performance, gestão de pressão e equilíbrio emocional.",
    image: null,
  },
  {
    icon: Stethoscope,
    title: "Medicina do Esporte",
    description: "Avaliações médicas especializadas, bioimpedância e acompanhamento clínico periódico.",
    image: null,
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecossistema" className="section-padding bg-venkon-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Ecossistema 360°
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            SAÚDE INTEGRADA
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que performance — um núcleo completo de saúde que une ciência, tecnologia e cuidado interdisciplinar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:glow-border transition-all duration-500"
            >
              {service.image ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-venkon-surface to-venkon-surface-light flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-primary/30" />
                </div>
              )}

              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
