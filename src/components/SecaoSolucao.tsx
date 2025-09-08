import { motion } from 'framer-motion';

const SolutionSection = () => {
  return (
    <motion.section 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A solução definitiva para comunidades que sofrem com as chuvas.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            O DAEA conecta inovação e impacto social, oferecendo uma solução prática e de baixo custo para o acúmulo de água 
            em áreas urbanas e rurais. Tenha mais segurança nas chuvas e menos prejuízos.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default SolutionSection;