import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Star, MapPin, Sun } from 'lucide-react';

const Home = () => {
  const { toast } = useToast();

  const handleReserveClick = () => {
    toast({
      title: "Reserva de Viagem",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        <title>Destino Encantado - Viva a Viagem dos Seus Sonhos</title>
        <meta name="description" content="Explore o mundo com a Destino Encantado. Oferecemos pacotes de viagem, acomodações de luxo e experiências únicas. Reserve sua próxima aventura!" />
      </Helmet>
      <div className="overflow-x-hidden">
        <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white">
          <div className="absolute inset-0">
            <img  src="https://images.unsplash.com/photo-1542051841857-5f90071e7989" alt="Paisagem de um destino turístico exótico ao pôr do sol" className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <motion.div
            className="relative z-10 text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-shadow-elegant">
              O Mundo é o seu <span className="text-brand-orange">Destino</span>.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 font-medium">
              Criamos viagens que vão além do turismo. São histórias, emoções e memórias para toda a vida. Qual é a sua próxima aventura?
            </p>
            <Button onClick={handleReserveClick} size="lg" className="bg-brand-orange hover-bg-brand-orange-dark text-white font-bold text-lg py-4 px-10 rounded-full shadow-2xl transition-transform transform hover:scale-105">
              Reserve sua Viagem dos Sonhos <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </section>

        <motion.section
          className="py-20 md:py-28 bg-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Pacotes em <span className="text-brand-orange">Destaque</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-gray-600 text-lg mb-16">
              Selecionamos cuidadosamente os melhores destinos e ofertas para você. Deixe-nos cuidar de tudo.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-xl overflow-hidden card-hover group">
                <img  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Praia paradisíaca na Tailândia" src="https://images.unsplash.com/photo-1671468158298-b4c79c24f51f" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Verão na Tailândia</h3>
                  <p className="text-gray-600 mb-4">10 dias explorando praias, templos e a cultura vibrante do sudeste asiático.</p>
                  <Button variant="link" className="text-brand-orange font-bold p-0">Ver Pacote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-xl overflow-hidden card-hover group">
                <img  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Montanhas nevadas nos alpes suíços" src="https://images.unsplash.com/photo-1601287433320-a335372b3721" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Aventura nos Alpes</h3>
                  <p className="text-gray-600 mb-4">7 dias de esqui, paisagens deslumbrantes e fondue nos Alpes Suíços.</p>
                  <Button variant="link" className="text-brand-orange font-bold p-0">Ver Pacote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-xl overflow-hidden card-hover group">
                <img  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Cidade histórica de Kyoto, Japão" src="https://images.unsplash.com/photo-1528296991138-4a718efd2906" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Cores de Kyoto</h3>
                  <p className="text-gray-600 mb-4">Explore a magia do outono no Japão com visitas a templos e jardins imperdíveis.</p>
                  <Button variant="link" className="text-brand-orange font-bold p-0">Ver Pacote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="py-20 md:py-28 bg-brand-light-blue">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Por que viajar com a <br /><span className="text-brand-orange">Destino Encantado?</span></h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Não vendemos apenas viagens, realizamos sonhos. Cada roteiro é pensado para oferecer a máxima tranquilidade, segurança e encanto. Com a gente, sua única preocupação é criar memórias inesquecíveis.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start"><Star className="h-6 w-6 text-brand-gold mr-4 mt-1 flex-shrink-0" /><div><h4 className="font-bold text-lg text-gray-800">Atendimento Exclusivo</h4><p className="text-gray-600">Nossos especialistas cuidam de cada detalhe da sua viagem, do início ao fim.</p></div></div>
                            <div className="flex items-start"><MapPin className="h-6 w-6 text-brand-gold mr-4 mt-1 flex-shrink-0" /><div><h4 className="font-bold text-lg text-gray-800">Roteiros Personalizados</h4><p className="text-gray-600">Criamos viagens que se encaixam perfeitamente nos seus interesses e estilo.</p></div></div>
                            <div className="flex items-start"><Sun className="h-6 w-6 text-brand-gold mr-4 mt-1 flex-shrink-0" /><div><h4 className="font-bold text-lg text-gray-800">Experiências Únicas</h4><p className="text-gray-600">Vamos além dos pontos turísticos, oferecendo imersão cultural e aventuras autênticas.</p></div></div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square" alt="Casal feliz tirando uma selfie em Paris" src="https://images.unsplash.com/photo-1577177616274-4970b131f70d" />
                        <img  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square mt-12" alt="Pessoa fazendo trilha em uma montanha" src="https://images.unsplash.com/photo-1689096400588-aec8ba7ef6e9" />
                    </motion.div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Home;