import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="section-padding bg-venkon-dark border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-4xl text-foreground mb-2">VENKON</h3>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-6">
              Performance and Health
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              A união entre ciência e desempenho esportivo. Expandindo o desempenho humano através do equilíbrio entre rotina saudável, preparação física e acompanhamento nutricional.
            </p>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground mb-4">INFORMAÇÕES</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
              <p className="font-body text-sm text-muted-foreground">
                Rua Alvarenga 2022 — Butantã<br />São Paulo — SP — 05509-000
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <p className="font-body text-sm text-muted-foreground">(11) 93231-1310</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary mt-1 shrink-0" />
              <div className="font-body text-sm text-muted-foreground">
                <p>Seg–Sex: 06h – 22h</p>
                <p>Sábado: 08h – 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">COMECE AGORA</h4>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Venha experimentar o melhor do esporte. Agende sua aula experimental pelo WhatsApp.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5511932311310"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all duration-300"
            >
              Fale com nosso time
            </a>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/venkon.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-body text-sm">@venkonoficial</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Venkon Performance and Health. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
