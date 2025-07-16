import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por nos contatar. Em breve, um de nossos especialistas em sonhos entrará em contato. 🚀",
    });
    e.target.reset();
  };

  const handleWhatsAppClick = () => {
    toast({
      title: "Abrir WhatsApp",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contato - Fale com a Destino Encantado</title>
        <meta name="description" content="Entre em contato com a Destino Encantado para planejar sua próxima viagem, tirar dúvidas ou nos visitar. Estamos prontos para te atender." />
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
              Vamos Planejar sua Próxima <span className="text-brand-orange">Aventura?</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Estamos aqui para transformar seus sonhos de viagem em realidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 bg-brand-light-blue p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Envie-nos uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input type="text" id="name" name="name" required className="w-full bg-white border-gray-300 rounded-md py-3 px-4 text-gray-800 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Seu Melhor Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-white border-gray-300 rounded-md py-3 px-4 text-gray-800 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Como podemos ajudar?</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Qual o destino dos seus sonhos? Tem alguma dúvida?" className="w-full bg-white border-gray-300 rounded-md py-3 px-4 text-gray-800 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition"></textarea>
                </div>
                <Button type="submit" className="w-full bg-brand-orange hover-bg-brand-orange-dark text-white font-bold text-lg py-3 rounded-full shadow-md">
                  Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Nossos Contatos</h2>
                    <div className="space-y-6">
                    <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-brand-orange mr-4 mt-1" />
                        <div>
                        <p className="font-bold text-lg">Nosso Escritório</p>
                        <p className="text-gray-600">Av. das Viagens, 123, Cidade dos Sonhos</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Phone className="h-6 w-6 text-brand-orange mr-4" />
                        <div>
                        <p className="font-bold text-lg">Telefone</p>
                        <p className="text-gray-600">(11) 98765-4321</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Mail className="h-6 w-6 text-brand-orange mr-4" />
                        <div>
                        <p className="font-bold text-lg">Email</p>
                        <p className="text-gray-600">contato@destinoencantado.com</p>
                        </div>
                    </div>
                    </div>
                </div>
                <Button onClick={handleWhatsAppClick} size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-full shadow-md">
                  Fale pelo WhatsApp <MessageCircle className="ml-2 h-6 w-6" />
                </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;