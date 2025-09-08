import Cabecalho from '@/components/Cabecalho';
import SecaoHero from '@/components/SecaoHero';
import SecaoBeneficios from '@/components/SecaoBeneficios';
import SectionDAEA from "../components/SecaoDAEA";
import SecaoFinal from "../components/SecaoFinal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Cabecalho />
      <main>
        <SecaoHero />
        <SecaoBeneficios />
        <SectionDAEA />
        <SecaoFinal />
      </main>
    </div>
  );
};

export default Index;
