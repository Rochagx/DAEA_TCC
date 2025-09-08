import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import starsBackground from "../assets/stars-background.png"; 
import chipImage from "../assets/chip-image.png"; 

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-8"
      style={{ 
        backgroundColor: '#000013',
        backgroundImage: `url(${starsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex items-center justify-between max-w-6xl w-full">
        <motion.div 
          className="text-white max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Página fora da rota
            <br />
            do DAEA.
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Este caminho não está sob os cuidados do
            <br />
            DAEA. Retorne e continue navegando por
            <br />
            soluções que protegem vidas e criam um
            <br />
            futuro mais seguro.
          </motion.p>
          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button 
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300"
              style={{ 
                backgroundColor: '#151557', 
                color: '#E2E2F5',
                boxShadow: '0 0 15px #15155740'
              }}
              whileHover={{ 
                y: -4, 
                scale: 1.05,
                boxShadow: '0 0 25px #151557, 0 0 35px #15155760'
              }}
              whileTap={{ scale: 0.98 }}
            >
              VOLTAR AO SITE
            </motion.button>
            <motion.button 
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300"
              style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid #151557',
                color: '#E2E2F5',
                boxShadow: '0 0 10px #15155730'
              }}
              whileHover={{ 
                y: -4, 
                scale: 1.05,
                backgroundColor: '#151557',
                boxShadow: '0 0 20px #151557, 0 0 30px #15155750'
              }}
              whileTap={{ scale: 0.98 }}
            >
              IR PARA A PÁGINA INICIAL
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative flex items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="font-bold leading-none opacity-80"
            style={{ 
              color: '#BF7BFB',
              fontSize: '200px',
              textShadow: '0 0 30px #BF7BFB50'
            }}
            animate={{ 
              textShadow: [
                '0 0 30px #BF7BFB50',
                '0 0 40px #BF7BFB80',
                '0 0 30px #BF7BFB50'
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            4
          </motion.div>
          
          <motion.div 
            className="mx-8 w-64 h-64 flex items-center justify-center"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <motion.img 
              src={chipImage}
              alt="Chip DAEA" 
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 20px #BF7BFB50)'
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                filter: 'drop-shadow(0 0 30px #BF7BFB)'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div 
            className="font-bold leading-none opacity-80"
            style={{ 
              color: '#BF7BFB',
              fontSize: '200px',
              textShadow: '0 0 30px #BF7BFB50'
            }}
            animate={{ 
              textShadow: [
                '0 0 30px #BF7BFB50',
                '0 0 40px #BF7BFB80',
                '0 0 30px #BF7BFB50'
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            4
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
