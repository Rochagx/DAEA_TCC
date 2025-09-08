import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Cabecalho = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-primary text-2xl">
              <FontAwesomeIcon icon={faWater} />
            </div>
            <span className="text-xl font-bold text-foreground">DAEA</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre o Projeto
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors font-medium">
              Benefícios
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Seja um Parceiro
            </Button>
            <Button variant="hero" size="sm">
              Baixar App
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Cabecalho;