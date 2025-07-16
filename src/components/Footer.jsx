import React from 'react';
import { NavLink } from 'react-router-dom';
import { Plane, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (socialMedia) => {
    toast({
      title: `Link para ${socialMedia}`,
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  return (
    <footer className="bg-brand-light-blue text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-brand-orange" />
              <span className="text-2xl font-bold text-gray-800 font-display">
                Destino <span className="text-brand-orange">Encantado</span>
              </span>
            </NavLink>
            <p className="text-sm">Realizando seus sonhos de viagem com conforto, segurança e experiências inesquecíveis.</p>
            <div className="flex space-x-4 pt-2">
              <button onClick={() => handleSocialClick('Facebook')} className="text-gray-500 hover:text-brand-orange transition-colors"><Facebook size={24} /></button>
              <button onClick={() => handleSocialClick('Instagram')} className="text-gray-500 hover:text-brand-orange transition-colors"><Instagram size={24} /></button>
              <button onClick={() => handleSocialClick('Twitter')} className="text-gray-500 hover:text-brand-orange transition-colors"><Twitter size={24} /></button>
            </div>
          </div>

          <div>
            <p className="font-bold text-gray-800 tracking-wider uppercase mb-4">Links Rápidos</p>
            <ul className="space-y-2">
              <li><NavLink to="/destinos" className="hover:text-brand-orange transition-colors">Destinos</NavLink></li>
              <li><NavLink to="/acomodacoes" className="hover:text-brand-orange transition-colors">Acomodações</NavLink></li>
              <li><NavLink to="/experiencias" className="hover:text-brand-orange transition-colors">Experiências</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-brand-orange transition-colors">Blog</NavLink></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-800 tracking-wider uppercase mb-4">Contato</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start"><MapPin size={16} className="mr-3 mt-1 text-brand-orange flex-shrink-0" /><span>Av. das Viagens, 123, Sala 404<br/>Cidade dos Sonhos, BR</span></li>
              <li className="flex items-center"><Phone size={16} className="mr-3 text-brand-orange" /><span>(11) 98765-4321</span></li>
              <li className="flex items-center"><Mail size={16} className="mr-3 text-brand-orange" /><span>contato@destinoencantado.com</span></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-800 tracking-wider uppercase mb-4">Newsletter</p>
            <p className="text-sm mb-4">Receba ofertas exclusivas e dicas de viagem em seu email.</p>
            <form onSubmit={(e) => { e.preventDefault(); toast({title: "Inscrição na Newsletter", description: "🚧 Este recurso ainda não foi implementado."}) }}>
                <div className="flex">
                    <input type="email" placeholder="Seu melhor email" className="w-full rounded-l-md border-gray-300 px-3 py-2 text-sm focus:ring-brand-orange focus:border-brand-orange" />
                    <button type="submit" className="bg-brand-orange text-white px-4 rounded-r-md hover-bg-brand-orange-dark font-semibold">OK</button>
                </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; {currentYear} Destino Encantado. Todos os direitos reservados.</p>
          <p className="mt-1 text-gray-500">Desenvolvido com ❤️ por Hostinger Horizons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;