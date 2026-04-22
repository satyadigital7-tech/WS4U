import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Search, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioHero = () => (
  <section className="relative pt-32 pb-20 text-center text-white overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600" 
      alt="Our Portfolio" 
      className="absolute inset-0 w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-[#007b5e]/85 backdrop-blur-[2px]"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 font-outfit">Our Portfolio</h1>
      <p className="text-gray-200 max-w-2xl mx-auto opacity-90 text-lg font-medium">
        9000+ Projects Delivered with Professional Excellence
      </p>
    </div>
  </section>
);

const portfolioItems = [
  {
    id: 1,
    title: 'Electricbikescootercar.co.uk',
    category: 'eCommerce',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800',
    description: 'Full-featured online store with payment gateway integration and inventory management'
  },
  {
    id: 2,
    title: 'Nimboopaniadvertisers.com',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    description: 'Professional corporate website with service showcase and client portfolio'
  },
  {
    id: 3,
    title: 'Goakhabar.com',
    category: 'News Portal',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=800',
    description: 'Dynamic news website with real-time updates and content management system'
  },
  {
    id: 4,
    title: 'IITians Academy Hyderabad',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1523050335456-cdaeb7406a28?auto=format&fit=crop&q=80&w=800',
    description: 'Educational platform with course management and student portal'
  },
  {
    id: 5,
    title: 'Guitar Hall',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1510915363646-e57973166945?auto=format&fit=crop&q=80&w=800',
    description: 'Music store website with online booking and gallery showcase'
  },
  {
    id: 6,
    title: 'Swadeshi Khareed',
    category: 'eCommerce',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    description: 'Multi-vendor marketplace with secure payment and shipping integration'
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All Projects');
  const categories = ['All Projects', 'eCommerce', 'Business', 'News Portal', 'Education'];

  const filteredItems = filter === 'All Projects' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-white">
      <PortfolioHero />
      
      {/* Category Filter */}
      <section className="py-12 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-[#007b5e] text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a href={`https://${item.title}`} target="_blank" rel="noopener noreferrer" className="bg-white text-dark p-3 rounded-full shadow-xl hover:scale-110 transition-transform">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#005c45] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 font-outfit">Ready to Start Your Project?</h2>
          <p className="text-blue-100 mb-8 opacity-80">Let's create something amazing together</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#007b5e] px-10 py-3.5 rounded-lg font-black text-lg shadow-2xl hover:scale-105 transition-all">
              Get Started Today
            </Link>
            <a href="tel:918500861757" className="bg-transparent border-2 border-white/30 text-white px-10 py-3.5 rounded-lg font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 italic">
              <Phone size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
