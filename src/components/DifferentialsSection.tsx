import { motion } from "framer-motion";
import { Shield, Target, Users, Zap, HeartHandshake, BarChart3 } from "lucide-react";

const differentials = [
  {
    icon: Target,
    title: "TUDO EM UM SÓ LUGAR",
    description: "Treino, fisioterapia, nutrição, psicologia e medicina do esporte integrados — sem precisar correr entre clínicas e academias.",
  },
  {
    icon: BarChart3,
    title: "CIÊNCIA NO TREINO",
    description: "Periodização baseada em evidências, avaliações biomecânicas e bioimpedância a cada fase para evolução mensurável.",
  },
  {
    icon: Users,
    title: "EQUIPE INTERDISCIPLINAR",
    description: "Profissionais de diferentes áreas se comunicam sobre você. Seu médico, nutricionista e treinador trabalham juntos.",
  },
  {
    icon: Zap,
    title: "TECNOLOGIA KEISER",
    description: "Equipamentos com carga pneumática presentes nos maiores centros do mundo — segurança, precisão e monitoramento em tempo real.",
  },
  {
    icon: HeartHandshake,
    title: "CUIDADO INDIVIDUALIZADO",
    description: "Treinos 100% personalizados. Não existe turma nem fila para aparelho. O foco é total em você.",
  },
  {
    icon: Shield,
    title: "PREVENÇÃO PRIMEIRO",
    description: "Fisioterapia preventiva integrada à rotina de treino. Aqui você não espera a lesão acontecer para agir.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Por que a Venkon?
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            O DIFERENCIAL ESTÁ NA <span className="text-gradient">INTEGRAÇÃO</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Academias tradicionais cuidam do treino. Clínicas cuidam da saúde. Na Venkon, tudo funciona junto — uma equipe, um objetivo, um ecossistema pensado para você evoluir com segurança.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex justify-center my-10">
          <div className="w-16 h-px bg-primary/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex gap-5 group"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1.5">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5511932311310"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all duration-300 animate-pulse-glow"
          >
            Quero conhecer a Venkon
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
