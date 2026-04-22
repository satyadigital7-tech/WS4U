import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  Zap, 
  Clock, 
  Award, 
  Users, 
  Headphones, 
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Mail,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => (
  <section className="relative pt-32 pb-20 text-center text-white overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=1600" 
      alt="About WS4U" 
      className="absolute inset-0 w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-[#007b5e]/80 backdrop-blur-[2px]"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 font-outfit">About Us</h1>
      <p className="text-gray-200 max-w-2xl mx-auto opacity-90 text-lg font-medium">
        Your trusted partner in digital transformation for over 13 years
      </p>
    </div>
  </section>
);

const AboutMain = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-dark mb-6">About WS4U</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              WS4U is a division of <span className="font-bold">Jikut Technologies Pvt. Ltd.</span>, a leading technology company based in Latur, Maharashtra, India. Our team of skilled designers, developers, and strategists is dedicated to crafting innovative and effective web solutions tailored to meet your unique business needs.
            </p>
            <p>
              With a focus on quality, affordability, and customer satisfaction, we strive to help businesses of all sizes achieve their online goals. Whether you need a simple website, a complex e-commerce platform, or a custom web application, our experts have the expertise to deliver exceptional results.
            </p>
            <p>
              We leverage the latest technologies and industry best practices to ensure your website is visually appealing, user-friendly, and optimized for search engines. Our commitment to excellence has earned us the trust of over 500 clients and helped us deliver 9000+ successful projects.
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <button className="bg-[#007b5e] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-green-700 transition-all">
              Get In Touch
            </button>
            <button className="bg-white text-[#007b5e] border border-[#007b5e] px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-all">
              View Our Work
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative aspect-square group">
            <img 
              src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=800" 
              alt="About WS4U" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-gray-500 shadow-sm border border-white/20">
              About WS4U
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MissionVision = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 group">
          <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-[#007b5e] mb-8 group-hover:scale-110 transition-transform">
            <Target size={32} />
          </div>
          <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
          <p className="text-gray-500 leading-relaxed">
            To empower businesses of all sizes with affordable, high-quality web solutions that drive growth and success. We believe that every business deserves a professional online presence, and we're committed to making that accessible to everyone.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 group">
          <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-[#007b5e] mb-8 group-hover:scale-110 transition-transform">
            <Eye size={32} />
          </div>
          <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
          <p className="text-gray-500 leading-relaxed">
            To become India's most trusted and preferred web services provider, known for delivering excellence, innovation, and customer satisfaction. We aim to help thousands of businesses establish a strong digital footprint and achieve their full potential online.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => {
  const choices = [
    { icon: <Award className="text-green-500" />, title: "Affordable Pricing", desc: "Quality web services at prices that won't break your budget" },
    { icon: <Clock className="text-green-500" />, title: "Quick Turnaround", desc: "Get your website up and running in as little as 72 hours" },
    { icon: <Zap className="text-green-500" />, title: "14+ Years Experience", desc: "Proven track record with thousands of successful projects" },
    { icon: <Users className="text-green-500" />, title: "Expert Team", desc: "Skilled professionals dedicated to your success" },
    { icon: <Headphones className="text-green-500" />, title: "24/7 Support", desc: "Round-the-clock assistance whenever you need it" },
    { icon: <Smartphone className="text-green-500" />, title: "Mobile Responsive", desc: "All our websites work perfectly on any device" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-dark mb-4">Why Choose WS4U?</h2>
          <p className="text-gray-500">Reasons that make us stand out from the competition</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {choices.map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    { id: 'JT', name: 'Jikut Technologies', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300', social: [<Linkedin size={14} />, <Twitter size={14} />] },
    { id: 'DT', name: 'Development Team', role: 'Lead Developers', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300', social: [<Linkedin size={14} />, <Github size={14} />] },
    { id: 'DM', name: 'Design Team', role: 'Creative Designers', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300', social: [<Mail size={14} />, <Instagram size={14} />] },
    { id: 'ST', name: 'Support Team', role: 'Customer Support', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300', social: [<Facebook size={14} />, <Twitter size={14} />] }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-dark mb-4">Our Expert Team</h2>
          <p className="text-gray-500">Meet the talented people behind WS4U</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-xl font-bold text-dark">{member.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{member.role}</p>
              <div className="flex gap-4">
                {member.social.map((icon, idx) => (
                  <button key={idx} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#007b5e] hover:text-white hover:border-[#007b5e] transition-all">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => (
  <section className="py-16 bg-[#007b5e] text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
        <div className="flex flex-col">
          <span className="text-4xl font-black mb-1">9000+</span>
          <span className="text-xs font-bold uppercase tracking-widest opacity-70">Projects Delivered</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-black mb-1">500+</span>
          <span className="text-xs font-bold uppercase tracking-widest opacity-70">Happy Clients</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-black mb-1">14+</span>
          <span className="text-xs font-bold uppercase tracking-widest opacity-70">Years Experience</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-black mb-1">4.5</span>
          <span className="text-xs font-bold uppercase tracking-widest opacity-70">Average Rating</span>
        </div>
      </div>
    </div>
  </section>
);

const AboutPage = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutMain />
      <MissionVision />
      <WhyChooseUs />
      <TeamSection />
      <StatsBar />
      
      {/* Final CTA Strip */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-[#007b5e] to-green-800 rounded-[3rem] p-16 text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <span className="text-[10px] font-black uppercase tracking-widest block mb-4 opacity-70">READY TO START?</span>
               <h2 className="text-4xl lg:text-5xl font-black mb-8">Get Your Website Designed <br /> by <span className="bg-white text-[#007b5e] px-4 py-1 rounded-xl">Experts</span></h2>
               <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto font-medium">Start your online journey today with affordable web solutions</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/contact" className="bg-white text-[#007b5e] px-10 py-4 rounded-xl font-black text-lg shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                    Request A Quote
                 </Link>
                 <a href="tel:918500861757" className="bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 italic font-outfit">
                    <Phone size={18} /> Call: 8500861757
                 </a>
               </div>
             </div>
             {/* Decorative Background Elements */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
