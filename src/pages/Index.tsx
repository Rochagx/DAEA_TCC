import Cabecalho from '@/components/Cabecalho';
import SecaoHero from '@/components/SecaoHero';
import SecaoBeneficios from '@/components/SecaoBeneficios';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Cabecalho />
      <main>
        <SecaoHero />
        <SecaoBeneficios />
      </main>
    </div>
  );
};

export default Index;
