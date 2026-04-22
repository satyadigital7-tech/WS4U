import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, Clock, ArrowRight, ChevronRight, Layout, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogHero = () => (
  <section className="relative pt-32 pb-20 text-center text-white overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1600" 
      alt="Latest Articles" 
      className="absolute inset-0 w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-[#007b5e]/85 backdrop-blur-[2px]"></div>
    <div className="container mx-auto px-4 relative z-10">
      <span className="bg-white/10 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block border border-white/20">
        Our Blog
      </span>
      <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 font-outfit">Latest Articles & Insights</h1>
      <p className="text-gray-200 max-w-2xl mx-auto opacity-90 text-lg font-medium">
        Stay updated with the latest trends in web design, development, and digital marketing
      </p>
    </div>
  </section>
);

const blogPosts = [
  {
    id: 1,
    title: 'Low Cost Website Design Company in Hyderabad,...',
    excerpt: 'Looking for affordable website design company in Secunderabad? Design, development, hosting, domain registration, emails and SSL...',
    category: 'Blog',
    tags: ['India'],
    date: 'February 10, 2026',
    readTime: '3 min',
    image: 'bg-indigo-100', // Specialized placeholder behavior for the first one in image
    icon: <Layout className="text-indigo-600" size={40} />
  },
  {
    id: 2,
    title: 'Freelance Website Designers in Mumbai: Your Gateway to...',
    excerpt: "Finding the perfect freelance website designer in Mumbai can transform your business's digital presence. With the...",
    category: 'Blog',
    date: 'October 6, 2025',
    readTime: '5 min',
    imageBrand: true
  },
  {
    id: 3,
    title: 'Web Designer in Mumbai – Crafting Powerful Digital...',
    excerpt: 'Choosing a web designer in Mumbai can elevate your online presence, ensuring a blend of aesthetic appeal and seamless functional...',
    category: 'Blog',
    date: 'October 4, 2025',
    readTime: '3 min',
    imageBrand: true
  },
  {
    id: 4,
    title: 'Ecommerce Website Development Mumbai:...',
    excerpt: 'In the bustling marketplace of Mumbai, a powerful ecommerce website is the key to unlocking new customers and driving revenu...',
    category: 'Blog',
    date: 'September 28, 2025',
    readTime: '4 min',
    imageBrand: true
  },
  {
    id: 5,
    title: 'Website Design Company in Hyderabad &#8211; Rs999',
    excerpt: 'Welcome to Rs999, your trusted website design company in Hyderabad, Telangana. As a leading website development company in...',
    category: 'Website Design',
    date: 'September 26, 2025',
    readTime: '6 min',
    imageBrand: true
  },
  {
    id: 6,
    title: 'Top Website Designing Company in Hyderabad: Rs999.in...',
    excerpt: 'In Hyderabad&#8217;s thriving IT landscape, a professional website is essential for business success. If you&#8217;re seeking a reliable...',
    category: 'Web Design',
    date: 'September 23, 2025',
    readTime: '2 min',
    imageBrand: true
  },
  {
    id: 7,
    title: 'Top 10 Web Development Companies in Mumbai –...',
    excerpt: "In today's digital-first world, a robust, user-friendly website is essential for businesses to thrive. Mumbai's vibrant tech ecosystem...",
    category: 'Blog',
    date: 'September 16, 2025',
    readTime: '3 min',
    imageBrand: true
  },
  {
    id: 8,
    title: 'Elevate Your Online Presence with a Dynamic Website...',
    excerpt: 'In Hyderabad&#8217;s bustling tech ecosystem, where innovation meets opportunity, having a dynamic website is crucial for businesses...',
    category: 'Website Development',
    date: 'September 8, 2025',
    readTime: '3 min',
    imageBrand: true
  },
  {
    id: 9,
    title: 'Finding the Perfect Web Designer Near You: A...',
    excerpt: 'Crafting a standout online presence starts with partnering with the right web designer. If you\'ve searched for "Web Designer Near...',
    category: 'Blog',
    date: 'August 18, 2025',
    readTime: '3 min',
    imageBrand: true
  }
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');

  const categories = [
    'All Posts', 'Artificial Intelligence (AI) (1)', 'Blog (6)', 'Booking System', 'Career', 'Careers', 'Clients Guide'
  ];

  const BrandPlaceholder = () => (
    <div className="bg-white border-b border-gray-100 h-full flex items-center justify-center p-8">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
           <span className="text-4xl font-black text-[#007b5e]">WS</span>
           <span className="text-4xl font-black text-red-500">4U</span>
        </div>
        <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-[0.2em]">Affordable Web Agency</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      <BlogHero />
      
      {/* Search Bar */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center gap-2 border border-gray-100">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="flex-grow pl-4 py-3 outline-none text-gray-700 font-medium"
            />
            <button className="bg-secondary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all">
              <Search size={20} /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition-all border ${
                  activeCategory === cat 
                    ? 'bg-[#007b5e] text-white border-[#007b5e] shadow-lg' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary-light hover:text-primary-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full"
              >
                <div className="h-48 relative overflow-hidden">
                  {post.imageBrand ? (
                    <BrandPlaceholder />
                  ) : (
                    <div className={`${post.image} h-full flex flex-col items-center justify-center p-6 text-center`}>
                      {post.icon}
                      <p className="text-[10px] font-bold text-gray-500 mt-4 uppercase">
                        {post.title}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-primary-light text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                    {post.tags?.map(tag => (
                      <span key={tag} className="text-gray-400 text-[10px] font-black uppercase tracking-widest">• {tag}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-extrabold text-dark mb-4 leading-tight group-hover:text-primary-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary-light" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary-light" /> {post.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-primary-light font-black text-xs uppercase tracking-widest mt-6 group/btn">
                    Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16 gap-3">
            <button className="w-10 h-10 rounded-lg bg-[#007b5e] text-white flex items-center justify-center font-bold shadow-lg">1</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 flex items-center justify-center font-bold hover:bg-gray-50 transition-colors">2</button>
            <button className="px-6 h-10 rounded-lg bg-white border border-gray-200 text-[#007b5e] flex items-center justify-center font-bold hover:bg-gray-50 transition-colors gap-2">
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-dark mb-4 font-outfit">Ready to Start Your Project?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Get a free consultation and quote for your next web project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-secondary text-white px-10 py-4 rounded-xl font-extrabold shadow-2xl hover:shadow-blue-200 flex items-center justify-center gap-2 hover:bg-blue-600 transition-all">
               Get Free Quote
            </Link>
            <a href="tel:918500861757" className="bg-gray-50 text-dark border border-gray-200 px-10 py-4 rounded-xl font-extrabold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all italic">
               <Phone size={20} /> Call: 8500861757
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
