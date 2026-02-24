import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "PERFORMANCE",
    price: "1.199",
    period: "anual",
    highlight: false,
    features: [
      "Treino de segunda a sexta",
      "1 consulta médica com retorno",
      "Consultas nutricionais semestrais",
      "Avaliação física a cada fase",
      "Bioimpedância a cada fase",
      "Recovery 1x por mês",
      "Aulão de sábado 1x por mês",
      "10% desconto em serviços",
    ],
  },
  {
    name: "PRO",
    price: "1.477",
    period: "anual",
    highlight: true,
    features: [
      "Tudo do Performance +",
      "3 consultas médicas ao ano",
      "Consultas nutricionais trimestrais",
      "Recovery 1x por semana",
      "Sábados liberados",
      "20% desconto em serviços",
      "20% desconto em fisioterapia",
    ],
  },
  {
    name: "LEGEND",
    price: "2.524",
    period: "anual",
    highlight: false,
    features: [
      "Tudo do Pro +",
      "5 consultas médicas ao ano",
      "Psicóloga 2x por mês",
      "Fisioterapia preventiva semanal",
      "Recovery ilimitado",
      "Liberação miofascial 2x/mês",
      "Treino com amigo 2x/mês",
      "20% desconto em tudo",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="section-padding bg-venkon-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Planos
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            ESCOLHA SUA JORNADA
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            À vista, 12x no cartão ou recorrência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 border transition-all duration-500 ${
                plan.highlight
                  ? "glow-border bg-gradient-to-b from-venkon-surface-light to-venkon-surface scale-[1.02]"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground font-body text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3" /> Mais Popular
                </div>
              )}

              <h3 className="font-display text-3xl text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-body text-sm text-muted-foreground">R$ </span>
                <span className="font-display text-5xl text-gradient">{plan.price}</span>
                <span className="font-body text-sm text-muted-foreground">/mês ({plan.period})</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://api.whatsapp.com/send?phone=5511932311310"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3.5 rounded-lg font-body text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-foreground/20 text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Começar Agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
