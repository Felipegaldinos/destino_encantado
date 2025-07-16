import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Destinos', path: '/destinos' },
  { name: 'Acomodações', path: '/acomodacoes' },
  { name: 'Experiências', path: '/experiencias' },
  { name: 'Depoimentos', path: '/depoimentos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/contato' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleReserveClick = () => {
    toast({
      title: "Reserva de Viagem",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const linkClass = ({ isActive }) =>
    `relative text-base font-medium transition-colors duration-300 ${
      isActive ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-orange'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block py-4 text-2xl text-center transition-colors duration-300 ${
      isActive ? 'text-brand-orange font-bold' : 'text-gray-800 hover:text-brand-orange'
    }`;

  return (
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <NavLink to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-brand-orange" />
            <span className="text-2xl font-bold text-gray-800 tracking-tight font-display">
              Destino <span className="text-brand-orange">Encantado</span>
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-orange rounded-full"
                        layoutId="underline"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button onClick={handleReserveClick} className="bg-brand-orange hover-bg-brand-orange-dark text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
              Reserve Agora
            </Button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center overflow-hidden"
          >
            <button onClick={toggleMenu} className="absolute top-8 right-6 text-gray-800 focus:outline-none">
              <X className="h-9 w-9" />
            </button>
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={mobileLinkClass} onClick={toggleMenu}>
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="mt-12">
              <Button onClick={handleReserveClick} size="lg" className="bg-brand-orange hover-bg-brand-orange-dark text-white font-bold text-xl rounded-full px-10 py-6">
                Reserve Agora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;