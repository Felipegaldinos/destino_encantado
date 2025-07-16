import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Gem, Users, Globe } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Sobre Nós - Destino Encantado</title>
        <meta name="description" content="Conheça a história e a filosofia da Destino Encantado. Nossa paixão é criar viagens memoráveis com atendimento personalizado e experiências únicas." />
      </Helmet>
      <div className="bg-white text-gray-800">
        <div className="bg-brand-light-blue py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900">
                Nossa Paixão é a sua <span className="text-brand-orange">Jornada</span>
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Mais do que uma agência de viagens, somos contadores de histórias e arquitetos de sonhos.
                </p>
            </motion.div>
            </div>
        </div>
        
        <div className="py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants} className="space-y-6">
                    <h2 className="text-4xl font-bold text-brand-blue">Nossa História</h2>
                    <p className="text-gray-600 leading-relaxed">
                        A Destino Encantado nasceu do desejo de transformar o modo como as pessoas viajam. Fundada em 2015 por viajantes apaixonados, nossa missão sempre foi clara: ir além dos pacotes padronizados e criar roteiros que tocassem a alma, conectando pessoas a novos lugares e culturas de forma autêntica e significativa.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Começamos em um pequeno escritório, com um grande mapa na parede e um sonho ainda maior no coração. Hoje, temos orgulho de ter guiado milhares de viajantes em suas jornadas inesquecíveis, sempre mantendo nosso toque pessoal e o compromisso com a excelência.
                    </p>
                    </motion.div>
                     <motion.div variants={itemVariants}>
                        <img  className="rounded-xl shadow-2xl w-full h-auto object-cover" alt="Mapa antigo com bússola e itens de viagem" src="https://images.unsplash.com/photo-1524661135-423995f22d0b" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                    <Target className="h-12 w-12 mx-auto text-brand-orange mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Missão</h3>
                    <p className="text-gray-600">Criar experiências de viagem únicas e memoráveis, com atendimento personalizado, segurança e um profundo respeito por culturas e destinos.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                    <Eye className="h-12 w-12 mx-auto text-brand-orange mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Visão</h3>
                    <p className="text-gray-600">Ser a agência de turismo mais amada e confiável, reconhecida por transformar viagens em histórias de vida inesquecíveis.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm md:col-span-2 lg:col-span-1">
                    <Gem className="h-12 w-12 mx-auto text-brand-orange mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Valores</h3>
                    <p className="text-gray-600">Paixão, Excelência, Confiança, Inovação, Sustentabilidade e Empatia.</p>
                    </motion.div>
                </motion.div>

                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        Nossos <span className="text-brand-orange">Especialistas</span>
                    </h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 mb-16">
                        Conheça quem dedica a vida a planejar a sua próxima grande aventura.
                    </p>
                    <motion.div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="text-center">
                            <img  className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" alt="Retrato de Ricardo Alves" src="https://images.unsplash.com/photo-1694157263770-1a844cb0f6e0" />
                            <h3 className="text-xl font-bold text-gray-800">Ricardo Alves</h3>
                            <p className="text-brand-blue font-semibold">CEO & Fundador</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="text-center">
                            <img  className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" alt="Retrato de Beatriz Lima" src="https://images.unsplash.com/photo-1635521071003-d9a00f967e0b" />
                            <h3 className="text-xl font-bold text-gray-800">Beatriz Lima</h3>
                            <p className="text-brand-blue font-semibold">Especialista em Europa</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="text-center">
                            <img  className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" alt="Retrato de Tiago Santos" src="https://images.unsplash.com/photo-1562120348-ec5f774d94c1" />
                            <h3 className="text-xl font-bold text-gray-800">Tiago Santos</h3>
                            <p className="text-brand-blue font-semibold">Especialista em Aventura</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="text-center">
                            <img  className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" alt="Retrato de Carolina Faria" src="https://images.unsplash.com/photo-1596959393097-bbf2ef1bb50f" />
                            <h3 className="text-xl font-bold text-gray-800">Carolina Faria</h3>
                            <p className="text-brand-blue font-semibold">Especialista em Luxo</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;