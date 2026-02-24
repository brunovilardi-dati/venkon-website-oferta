import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-3xl tracking-wider text-foreground">
          VENKON
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5511932311310"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold uppercase tracking-wider hover:brightness-110 transition-all duration-300 animate-pulse-glow"
          >
            Agendar Experiência
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=5511932311310"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold uppercase tracking-wider text-center"
              >
                Agendar Experiência
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
