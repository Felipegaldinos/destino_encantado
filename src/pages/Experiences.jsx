import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Utensils, MountainSnow, Palette, Sailboat } from 'lucide-react';

const experiences = [
  {
    icon: Utensils,
    title: 'Tour Gastronômico',
    description: 'Saboreie o melhor da culinária local com tours guiados por chefs e visitas a mercados tradicionais. Uma festa para o seu paladar.',
    imageText: 'Mesa farta com pratos típicos de uma região',
  },
  {
    icon: MountainSnow,
    title: 'Ecoturismo e Aventura',
    description: 'Trilhas, escaladas, rafting e muito mais. Explore a natureza em sua forma mais pura com segurança e guias experientes.',
    imageText: 'Pessoa fazendo trilha em uma montanha com vista espetacular',
  },
  {
    icon: Palette,
    title: 'Imersão Cultural e Artística',
    description: 'Visite ateliês de artistas locais, participe de workshops de artesanato e descubra a alma cultural do seu destino.',
    imageText: 'Mãos de um artesão trabalhando com argila',
  },
  {
    icon: Sailboat,
    title: 'Passeios de Barco Exclusivos',
    description: 'Navegue por costas deslumbrantes, ilhas secretas e tenha um pôr do sol inesquecível a bordo de um barco privativo.',
    imageText: 'Barco a vela navegando em águas azuis ao pôr do sol',
  },
];

const Experiences = () => {
    const { toast } = useToast();

    const handleKnowMore = (title) => {
        toast({
        title: `Saber mais sobre: ${title}`,
       
        });
    };

    return (
        <>
        <Helmet>
            <title>Experiências Únicas - Destino Encantado</title>
            <meta name="description" content="Vá além do turismo tradicional. Oferecemos experiências exclusivas como tours gastronômicos, ecoturismo, imersões culturais e passeios de barco." />
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
                Experiências que <span className="text-brand-orange">Marcam</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Acreditamos que as melhores lembranças de uma viagem estão nas experiências vividas.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    className="flex items-start space-x-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-brand-light-blue flex items-center justify-center">
                        <exp.icon className="h-8 w-8 text-brand-orange" />
                    </div>
                    </div>
                    <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
                    <Button onClick={() => handleKnowMore(exp.title)} variant="link" className="text-brand-blue p-0 font-bold">Quero Viver Isso</Button>
                    </div>
                </motion.div>
                ))}
            </div>
            </div>
        </div>
        </>
    );
};

export default Experiences;