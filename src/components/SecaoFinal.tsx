import React from 'react';
import imagemEsquerda from '../assets/tecnologia-daea-circular.png';
import imagemDireita from '../assets/comunidade-daea-circular.png';
import imagemJogo from '../assets/A Cidade Submersa do Mistério.png';

const SecaoFinal = () => {
  const handleJogarClick = () => {
    window.open('https://the-last-wave-game.vercel.app', '_blank');
  };

  return (
    <>
      <section className="relative overflow-hidden py-20 px-6 lg:px-8 bg-gray-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-16">
            <svg className="w-16 h-16 text-blue-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
            </svg>
          </div>
          
          <div className="absolute top-20 right-16">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute w-2 h-2 bg-blue-400/40 rounded-full" 
                   style={{
                     left: `${(i % 4) * 12}px`,
                     top: `${Math.floor(i / 4) * 12}px`
                   }}>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full" 
                   style={{
                     left: `${(i % 5) * 8}px`,
                     top: `${Math.floor(i / 5) * 8}px`
                   }}>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/3 right-8">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full" 
                   style={{
                     left: `${(i % 5) * 10}px`,
                     top: `${Math.floor(i / 5) * 10}px`
                   }}>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-20 left-20">
            <svg className="w-12 h-12 text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6-4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6-4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
            </svg>
          </div>
          
          <div className="absolute bottom-16 right-24">
            <svg className="w-10 h-10 text-blue-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
            </svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-shrink-0 order-1 lg:order-1">
              <div className="relative">
                <img 
                  src={imagemEsquerda} 
                  alt="Tecnologia DAEA para drenagem urbana"
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-xl border-4 border-white"
                />
              </div>
            </div>
            
            <div className="flex-1 order-2 text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Leve a Solução Contra Enchentes para a Sua Comunidade
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                O DAEA é um projeto colaborativo que promove a drenagem natural de 
                água da chuva em áreas urbanas por meio de evaporação acelerada, sem 
                a necessidade de obras ou custos elevados. Ideal para escolas, bairros e 
                lideranças locais.
              </p>
            </div>
            
            <div className="flex-shrink-0 order-3 lg:order-3">
              <div className="relative">
                <img 
                  src={imagemDireita} 
                  alt="Comunidade utilizando tecnologia sustentável"
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 px-6 lg:px-8 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-8">
            <div className="w-8 h-8 border-2 border-yellow-400/60 rounded-full">
              <div className="w-4 h-4 bg-yellow-400/40 rounded-full mt-1 ml-1"></div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-16">
            <div className="w-6 h-6 border-2 border-yellow-400/40 rounded-full"></div>
          </div>
          
          <div className="absolute top-1/4 right-8">
            <div className="w-10 h-10 border-2 border-blue-400/50 rounded-full">
              <div className="w-6 h-6 bg-blue-400/30 rounded-full mt-1 ml-1"></div>
            </div>
          </div>
          
          <div className="absolute bottom-20 left-12">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full" 
                   style={{
                     left: `${(i % 8) * 8}px`,
                     top: `${Math.floor(i / 8) * 8}px`
                   }}>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/3 right-12">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 bg-blue-400/30 rounded-full" 
                   style={{
                     left: `${(i % 5) * 6}px`,
                     top: `${Math.floor(i / 5) * 6}px`
                   }}>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Experimente os Desafios das Enchentes
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
                Antes de implementar o DAEA na sua comunidade, teste seus conhecimentos sobre enchentes urbanas em "The Last Wave". Domine a fúria das águas e entenda como nossa tecnologia pode fazer a diferença.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handleJogarClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  ENFRENTAR AS ONDAS
                </button>
              </div>
            </div>
            
            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                  <img 
                    src={imagemJogo} 
                    alt="Screenshot do jogo The Last Wave - Simulação de enchentes urbanas"
                    className="w-80 h-60 lg:w-96 lg:h-72 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                    The Last Wave
                  </div>
                  <div className="absolute bottom-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
                    Jogar Grátis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecaoFinal;