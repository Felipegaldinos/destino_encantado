import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Família Oliveira',
    trip: 'Viagem para a Disney',
    quote: 'A Destino Encantado cuidou de tudo com tanto carinho que nossa única preocupação foi nos divertir. Foi a viagem das nossas vidas, mágica do início ao fim!',
    stars: 5,
    imageText: "Família sorridente com castelo da Disney ao fundo",
  },
  {
    name: 'Carlos e Juliana',
    trip: 'Lua de Mel nas Maldivas',
    quote: 'O roteiro foi impecável e o resort era um paraíso. Cada detalhe foi pensado para ser romântico e especial. Inesquecível!',
    stars: 5,
    imageText: "Casal de mãos dadas em uma praia das Maldivas",
  },
  {
    name: 'Grupo de Amigos',
    trip: 'Aventura no Peru',
    quote: 'A trilha Inca foi desafiadora e incrível. A organização da agência foi fundamental para o sucesso da nossa aventura. Guias fantásticos!',
    stars: 5,
    imageText: "Grupo de amigos celebrando em Machu Picchu",
  },
];

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Depoimentos - O que Nossos Viajantes Dizem</title>
        <meta name="description" content="Leia os relatos de clientes satisfeitos que viajaram com a Destino Encantado. Histórias reais de viagens inesquecíveis." />
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
              Viagens que se tornam <span className="text-brand-orange">Histórias</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              A maior recompensa para nós é a felicidade estampada no rosto de cada viajante.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-xl p-8 flex flex-col text-center card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img  className="w-24 h-24 rounded-full mx-auto -mt-20 mb-4 border-4 border-white shadow-lg" alt={testimonial.imageText} src="https://images.unsplash.com/photo-1608985864833-b4685fa66022" />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-lg text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-brand-blue font-semibold">{testimonial.trip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;