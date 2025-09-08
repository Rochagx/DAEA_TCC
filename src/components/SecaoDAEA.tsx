import React from 'react';
import imagemTecnologia from '../assets/tecnologia-daea.png';
import imagemColaboracao from '../assets/colaboracao-daea.png';

const SecaoDaea = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6 lg:px-8" style={{backgroundColor: '#2576E8'}}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 border-2 border-white/15 rounded-full">
          <div className="absolute top-16 left-16 w-64 h-64">
            {[...Array(25)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1.5 h-1.5 bg-white/30 rounded-full" 
                style={{
                  left: `${20 + (i % 5) * 40}px`,
                  top: `${20 + Math.floor(i / 5) * 40}px`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="absolute -bottom-32 -right-32 w-96 h-96 border-2 border-white/15 rounded-full">
          <div className="absolute top-16 left-16 w-64 h-64">
            {[...Array(36)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1 h-1 bg-white/25 rounded-full" 
                style={{
                  left: `${10 + (i % 6) * 35}px`,
                  top: `${10 + Math.floor(i / 6) * 35}px`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="absolute top-1/4 right-1/4">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 bg-white/20 rounded-full" 
              style={{
                left: `${(i % 4) * 25}px`,
                top: `${Math.floor(i / 4) * 25}px`
              }}
            />
          ))}
        </div>
        
        <div className="absolute bottom-1/4 left-1/4">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1.5 h-1.5 bg-white/25 rounded-full" 
              style={{
                left: `${(i % 3) * 20}px`,
                top: `${Math.floor(i / 3) * 20}px`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              <img 
                src={imagemTecnologia} 
                alt="Equipe trabalhando em documentos e planejamento"
                className="w-full max-w-lg rounded-2xl shadow-2xl shadow-black/30"
              />
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Tecnologia que se adapta à sua realidade
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              O sistema DAEA pode ser instalado em diferentes contextos — de centros urbanos a áreas de risco — 
              com flexibilidade e eficiência.
              <br /><br />
              Leve inovação à sua cidade, comunidade ou escola, sem obras ou complicações.
            </p>
            <button className="py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-black font-semibold" style={{backgroundColor: '#FFB946'}}>
              Saiba como funciona
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Colaboração é o caminho
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              O DAEA é mais do que tecnologia: é um projeto colaborativo, pensado para ser implementado por 
              prefeituras, ONGs, associações e escolas.
              <br /><br />
              Atuamos juntos com quem mais entende os desafios locais.
            </p>
            <button className="py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-black font-semibold" style={{backgroundColor: '#FFB946'}}>
              Seja um parceiro
            </button>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              <img 
                src={imagemColaboracao} 
                alt="Equipe colaborando em projeto de campo"
                className="w-full max-w-lg rounded-2xl shadow-2xl shadow-black/30 ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecaoDaea;