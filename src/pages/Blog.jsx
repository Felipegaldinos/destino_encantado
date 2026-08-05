import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const blogPosts = [
  {
    title: '7 Dicas para Arrumar a Mala de Viagem Perfeita',
    category: 'Dicas',
    date: '15 de Julho, 2025',
    excerpt: 'Chega de estresse na hora de fazer as malas! Com estas dicas, você vai levar apenas o essencial e otimizar espaço.',
    imageText: 'Mala de viagem aberta com roupas organizadas',
  },
  {
    title: 'Os Melhores Destinos para Viajar em Família em 2025',
    category: 'Destinos',
    date: '10 de Julho, 2025',
    excerpt: 'Procurando o lugar ideal para as próximas férias com as crianças? Confira nossa lista de destinos para todas as idades.',
    imageText: 'Família se divertindo em uma praia ensolarada',
  },
  {
    title: 'Como Viajar Mais Gastando Menos: O Guia Definitivo',
    category: 'Economia',
    date: '05 de Julho, 2025',
    excerpt: 'Descubra segredos e estratégias para economizar em passagens, hospedagem e passeios sem abrir mão da qualidade.',
    imageText: 'Cofrinho em formato de porco com um avião de brinquedo ao lado',
  },
];

const Blog = () => {
  const { toast } = useToast();

  const handleReadMore = (title) => {
    toast({
      title: `Ler Post: ${title}`,
     
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>Blog - Dicas e Inspirações de Viagem | Destino Encantado</title>
        <meta name="description" content="Acompanhe nosso blog para dicas de viagem, roteiros, curiosidades culturais e as últimas notícias do mundo do turismo." />
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
              Diário de <span className="text-brand-orange">Bordo</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Inspiração, dicas e histórias para alimentar sua alma de viajante.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col card-hover"
                variants={itemVariants}
              >
                <div className="relative h-64">
                  <img  className="w-full h-full object-cover" alt={post.imageText} src="https://images.unsplash.com/photo-1598737129494-69cb30f96a73" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                      <div className="flex items-center"><Tag size={14} className="mr-1.5" /> {post.category}</div>
                      <div className="flex items-center"><Calendar size={14} className="mr-1.5" /> {post.date}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex-grow">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <Button
                    onClick={() => handleReadMore(post.title)}
                    variant="link"
                    className="text-brand-orange p-0 self-start font-bold hover:text-orange-600"
                  >
                    Ler Artigo <ArrowRight className="ml-2 h-4 w-4" />
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

export default Blog;