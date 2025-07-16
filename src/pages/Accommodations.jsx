import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Star, BedDouble, Wifi, UtensilsCrossed } from 'lucide-react';

const accommodations = [
  {
    name: 'Royal Palace Hotel',
    location: 'Paris, França',
    rating: 5,
    features: ['Wi-Fi Grátis', 'Café da Manhã', 'Vista da Cidade'],
    imageText: 'Fachada luxuosa do Royal Palace Hotel em Paris',
  },
  {
    name: 'Sunset Paradise Resort',
    location: 'Maldivas',
    rating: 5,
    features: ['Praia Privativa', 'Spa', 'Mergulho'],
    imageText: 'Bangalô sobre a água no Sunset Paradise Resort nas Maldivas',
  },
  {
    name: 'Andean Spirit Lodge',
    location: 'Vale Sagrado, Peru',
    rating: 4,
    features: ['Vista para Montanha', 'Cozinha Orgânica', 'Aulas de Yoga'],
    imageText: 'Lodge rústico e aconchegante no Vale Sagrado, Peru',
  },
  {
    name: 'Azure Dome Villas',
    location: 'Santorini, Grécia',
    rating: 5,
    features: ['Piscina Infinita', 'Vista do Pôr do Sol', 'Serviço de Quarto'],
    imageText: 'Villa com piscina infinita e vista para a caldeira de Santorini',
  },
];

const Accommodations = () => {
  const { toast } = useToast();

  const handleReserveClick = (name) => {
    toast({
      title: `Reservar em ${name}`,
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };
  
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
        <title>Acomodações - Conforto e Luxo | Destino Encantado</title>
        <meta name="description" content="Descubra nossa seleção de hotéis, pousadas e resorts parceiros. Garantimos o máximo de conforto e qualidade para sua estadia." />
      </Helmet>
      <div className="bg-brand-light-blue py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900">
              Acomodações de <span className="text-brand-orange">Sonho</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Onde o conforto encontra a sofisticação. Selecionamos os melhores lugares para você relaxar e recarregar as energias.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {accommodations.map((acc, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row card-hover"
                variants={itemVariants}
              >
                <div className="md:w-5/12">
                   <img  className="w-full h-full object-cover" alt={acc.imageText} src="https://images.unsplash.com/photo-1635833679145-abff44d53dbd" />
                </div>
                <div className="p-6 md:w-7/12 flex flex-col">
                  <p className="text-sm font-semibold text-brand-blue">{acc.location}</p>
                  <h3 className="text-2xl font-bold text-gray-800 my-1">{acc.name}</h3>
                  <div className="flex items-center mb-4">
                    {[...Array(acc.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-grow">
                    {acc.features.map(feature => <li key={feature} className="flex items-center"><BedDouble size={14} className="mr-2 text-brand-orange" />{feature}</li>)}
                  </ul>
                  <Button
                    onClick={() => handleReserveClick(acc.name)}
                    className="bg-brand-orange hover-bg-brand-orange-dark text-white font-bold w-full md:w-auto self-start rounded-full"
                  >
                    Ver Disponibilidade
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Accommodations;