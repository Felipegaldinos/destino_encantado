import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Paris, França',
    description: 'A cidade do amor, da arte e da luz. Explore museus, saboreie a gastronomia e encante-se com a Torre Eiffel.',
    imageText: 'Vista da Torre Eiffel com o rio Sena',
  },
  {
    name: 'Maldivas',
    description: 'Bangalôs sobre águas cristalinas, praias de areia branca e um paraíso de tranquilidade e luxo.',
    imageText: 'Bangalôs sobre a água nas Maldivas',
  },
  {
    name: 'Machu Picchu, Peru',
    description: 'Descubra a cidade perdida dos Incas, uma maravilha do mundo aninhada nos Andes.',
    imageText: 'Vista panorâmica de Machu Picchu ao amanhecer',
  },
  {
    name: 'Santorini, Grécia',
    description: 'Casas brancas, cúpulas azuis e o pôr do sol mais famoso do mundo sobre o Mar Egeu.',
    imageText: 'Casas brancas e igrejas de cúpula azul em Oia, Santorini',
  },
  {
    name: 'Serengeti, Tanzânia',
    description: 'Vivencie a grande migração e um safári inesquecível na savana africana.',
    imageText: 'Manada de elefantes na savana do Serengeti',
  },
  {
    name: 'Tóquio, Japão',
    description: 'Uma metrópole que mistura tradições milenares com tecnologia futurista, templos e arranha-céus.',
    imageText: 'Cruzamento movimentado de Shibuya em Tóquio à noite',
  },
];

const Destinations = () => {
  const { toast } = useToast();

  const handleDetailsClick = (destination) => {
    toast({
      title: `Explorar ${destination}`,
    
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>Destinos - Descubra o Mundo com a Destino Encantado</title>
        <meta name="description" content="Explore nosso catálogo de destinos incríveis. De praias paradisíacas a cidades históricas, encontre sua próxima grande aventura." />
      </Helmet>
      <div className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900">
              Explore Nossos <span className="text-brand-orange">Destinos</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Cada lugar tem uma história para contar. Qual será a sua?
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col card-hover group"
                variants={itemVariants}
              >
                <div className="relative h-72">
                  <img  className="w-full h-full object-cover" alt={dest.imageText} src="https://images.unsplash.com/photo-1639941996459-48f9edb9e6ea" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-3xl font-bold text-white text-shadow-elegant">{dest.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 flex-grow">{dest.description}</p>
                  <Button
                    onClick={() => handleDetailsClick(dest.name)}
                    className="bg-brand-blue hover-bg-brand-blue-dark text-white font-bold mt-auto self-start rounded-full transition-transform transform group-hover:scale-105"
                  >
                    Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
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

export default Destinations;