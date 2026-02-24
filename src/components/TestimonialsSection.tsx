import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Clara Guedes",
    text: "A Venkon é imbatível! Alta performance, cuidados com a saúde e fisioterapia no mesmo lugar. Recomendo de olhos fechados!",
  },
  {
    name: "Lucas Souza",
    text: "Encontrei na Venkon o equilíbrio entre desafio esportivo e cuidado com o corpo. A fisioterapia integrada faz toda a diferença!",
  },
  {
    name: "Maria Eduarda",
    text: "Se você quer superar seus limites com segurança, essa academia é o lugar certo. Recomendo para quem leva a sério tanto a performance quanto a saúde!",
  },
  {
    name: "Pedro Nunes",
    text: "Estou impressionado com os resultados desde que me juntei à Venkon. A abordagem voltada para a saúde e o apoio da fisioterapia são incomparáveis.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            QUEM VIVE A VENKON
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="font-body text-base text-foreground/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-lg text-primary">{t.name[0]}</span>
                </div>
                <span className="font-body text-sm font-semibold text-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
