import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  MessageCircle, 
  Menu,
  X,
  User,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  ShoppingCart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary-light p-1.5 rounded-lg text-white font-bold text-xl flex items-center">
            WS<span className="text-white opacity-90">4U</span>
          </div>
          <div className="hidden lg:block">
            <p className={`text-xs font-bold leading-none ${isScrolled ? 'text-dark' : 'text-white'}`}>WS4U</p>
            <p className={`text-[10px] opacity-70 ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>Professional Web Solutions</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors hover:text-primary-light ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:918500861757" className={`hidden lg:flex items-center gap-2 text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-light transition-colors`}>
            <Phone size={16} className="text-primary-light" />
            <span>Call: 8500861757</span>
          </a>
          <button className="hidden sm:flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
            Get Quote
          </button>
          <button className={`p-2 rounded-full ${isScrolled ? 'text-gray-700' : 'text-white'} md:hidden`} onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          <div className={`hidden lg:flex items-center gap-2 text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <User size={16} />
            <span>Login</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="bg-primary-light p-2 rounded-lg text-white font-bold text-xl uppercase italic">WS4U</div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500">
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-10 grid gap-4">
              <a href="tel:918500861757" className="w-full bg-secondary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <Phone size={20} /> Call Now: 8500861757
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t-8 border-primary-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-2xl">
              <div className="bg-primary-light p-1.5 rounded-lg text-white font-bold">WS4U</div>
              <span className="font-bold tracking-tight">webservices4u</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              webservices4u is a subsidiary of Jikut Technologies Pvt. Ltd., leading affordable website design company in India. We provide E-commerce website, SEO, Digital Marketing, Android App, Domain & Web Hosting services starting from Rs.999.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-light hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg border-b border-white/10 pb-4">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Website Designing</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Web App Development</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Graphic Design</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Maintenance Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg border-b border-white/10 pb-4">Contact Info</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex gap-3">
                <Globe className="text-primary-light shrink-0" size={18} />
                <span>Hitech City, Hyderabad, Telangana, India</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary-light shrink-0" size={18} />
                <span>sales@jikut.com</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary-light shrink-0" size={18} />
                <a href="tel:918500861757" className="hover:text-primary-light transition-colors">+91 8500861757</a>
              </li>
              <li className="flex gap-3">
                <Clock className="text-primary-light shrink-0" size={18} />
                <span>Mon to Sat <br /> 10:00 AM to 06:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg border-b border-white/10 pb-4">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/blog" className="hover:text-primary-light transition-colors">Blog</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-light transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-light transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Payment Options</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Guest Post</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-gray-500">
          <p>© 2026 WS4U - All Rights Reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/918500861757" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
    >
      <MessageCircle size={32} />
      <span className="absolute left-full ml-4 bg-white text-dark px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Talk to an Expert
      </span>
    </a>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};
