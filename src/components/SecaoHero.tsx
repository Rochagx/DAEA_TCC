import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faAws, 
  faGithub,
  faOpenai
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const CustomIcon = ({ src, alt, className }: { src: string; alt: string; className: string }) => (
  <img 
    src={src} 
    alt={alt}
    className={`${className} filter`}
    style={{
      filter: 'brightness(0) saturate(100%) invert(45%) sepia(7%) saturate(1166%) hue-rotate(193deg) brightness(95%) contrast(86%)'
    }}
  />
);

const SecaoHero = () => {
  const parceiros = [
    { icon: faReact, name: 'React', type: 'fontawesome' },
    { 
      icon: '/assets/icons/tailwindCss.svg', 
      name: 'Tailwind CSS', 
      type: 'custom' 
    },
    { 
      icon: '/assets/icons/supabase.svg', 
      name: 'Supabase', 
      type: 'custom' 
    },
    { 
      icon: '/assets/icons/vercel.svg', 
      name: 'Vercel', 
      type: 'custom' 
    },
    { icon: faOpenai, name: 'OpenAI', type: 'fontawesome' },
    { 
      icon: '/assets/icons/arduino.svg', 
      name: 'Arduino', 
      type: 'custom' 
    },
    { 
      icon: '/assets/icons/bambulab.svg', 
      name: 'Bambu Lab A1', 
      type: 'custom' 
    },
    { icon: faGithub, name: 'GitHub', type: 'fontawesome' },
    { 
      icon: '/assets/icons/chart.svg', 
      name: 'Chart.js', 
      type: 'custom' 
    },
  ];

  return (
    <section className="hero-gradient min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Tecnologia contra{' '}
              <span className="text-primary">enchentes</span>,{' '}
              <span className="block">acessível e eficaz.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Conheça o DAEA — um sistema inteligente que acelera a 
              evaporação da água acumulada em ambientes urbanos. 
              Ajude a sua cidade a combater alagamentos sem obras caras ou 
              complicações.
            </p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Baixar Aplicativo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img 
                src="/chip.png" 
                alt="Chip DAEA submerso em água" 
                className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl shadow-soft rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="-mt-12 pt-1 border-t border-muted/30"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center text-sm text-muted-foreground mb-3 font-medium"
          >
            Tecnologias utilizadas
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {parceiros.map((parceiro, index) => (
              <motion.div
                key={parceiro.name}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {parceiro.type === 'fontawesome' ? (
                  <FontAwesomeIcon 
                    icon={parceiro.icon as any} 
                    className="text-3xl md:text-4xl text-muted-foreground" 
                  />
                ) : (
                  <CustomIcon
                    src={parceiro.icon as string}
                    alt={parceiro.name}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                )}
                <span className="text-sm text-muted-foreground font-medium">
                  {parceiro.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecaoHero;
