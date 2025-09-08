import { motion } from 'framer-motion';
import smartCitiesImage from '@/assets/smart-cities.jpg';
import communitiesImage from '@/assets/communities.jpg';
import educationImage from '@/assets/education.jpg';

const SecaoBeneficios = () => {
  const beneficios = [
    {
      image: smartCitiesImage,
      title: "Cidades Inteligentes",
      description: "Soluções escaláveis para prefeituras e órgãos públicos. Implemente o sistema DAEA em áreas críticas para acelerar a evaporação da água da chuva, reduzir alagamentos ou modernizar a infraestrutura urbana — sem obras complexas.",
      link: "Ver como funciona"
    },
    {
      image: communitiesImage,
      title: "Comunidades e Bairros",
      description: "Tecnologia acessível para proteção local. Associações, ONGs e moradores podem implementar o sistema de forma colaborativa para evitar prejuízos com enchentes. Mais segurança com baixo custo e alto impacto.",
      link: "Saiba como aplicar"
    },
    {
      image: educationImage,
      title: "Educação e Projetos Acadêmicos",
      description: "Perfeito para TCCs, escolas técnicas e universidades. Explore conceitos de IoT, inteligência artificial e sustentabilidade com um projeto real, pronto para ser integrado em currículos ou mostras científicas.",
      link: "Baixar kit educacional"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A solução definitiva para comunidades que sofrem com as chuvas.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            O DAEA conecta inovação e impacto social, oferecendo uma solução prática e de baixo custo para o acúmulo de água 
            em áreas urbanas e rurais. Tenha mais segurança nas chuvas e menos prejuízos.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-lg shadow-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Card Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={beneficio.image} 
                  alt={beneficio.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {beneficio.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {beneficio.description}
                </p>
                
                <a 
                  href="#" 
                  className="inline-block text-primary font-medium hover:text-primary/80 transition-colors duration-200 story-link"
                >
                  {beneficio.link} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoBeneficios;