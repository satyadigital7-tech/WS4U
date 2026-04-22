import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  Settings, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Lock, 
  MessageCircle, 
  Send,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const ContactHero = () => (
  <section className="relative pt-32 pb-20 text-center text-white overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1600" 
      alt="Contact Us" 
      className="absolute inset-0 w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-[#007b5e]/85 backdrop-blur-[2px]"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 font-outfit">Contact Us</h1>
      <p className="text-gray-200 max-w-2xl mx-auto opacity-90 text-lg font-medium">
        Get in touch with our team of experts for a free consultation
      </p>
    </div>
  </section>
);

const ContactDetails = () => (
  <section className="py-24 bg-white relative">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Quote Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-10 shadow-2xl border border-gray-100"
        >
          <div className="flex flex-col items-center mb-8">
             <div className="flex items-center gap-2 mb-2">
                <Send className="text-[#007b5e]" size={24} />
                <h3 className="text-2xl font-bold text-dark">Get Your <span className="text-[#007b5e]">Free Quote</span></h3>
             </div>
             <p className="text-gray-500 text-sm">Have custom requirements? Share your project details.</p>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={18} />
              <input type="text" placeholder="Name *" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#007b5e]/20 focus:border-[#007b5e] outline-none transition-all text-sm" required />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
              <input type="email" placeholder="Email *" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#007b5e]/20 focus:border-[#007b5e] outline-none transition-all text-sm" required />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-gray-400" size={18} />
              <input type="tel" placeholder="Phone *" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#007b5e]/20 focus:border-[#007b5e] outline-none transition-all text-sm" required />
            </div>
            <div className="relative">
              <Settings className="absolute left-4 top-4 text-gray-400" size={18} />
              <select className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#007b5e]/20 focus:border-[#007b5e] outline-none appearance-none transition-all text-sm">
                <option value="">Select Service *</option>
                <option>Website Design</option>
                <option>E-commerce Dev</option>
                <option>Digital Marketing</option>
                <option>SEO Services</option>
              </select>
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
              <textarea placeholder="Project details (Optional)" rows={4} className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#007b5e]/20 focus:border-[#007b5e] outline-none transition-all text-sm resize-none"></textarea>
            </div>
            <button className="w-full bg-[#1e88e5] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1565c0] transition-all shadow-lg shadow-blue-100">
               <Send size={18} /> Get Free Quote
            </button>
          </form>
          <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> Secure</span>
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> Privacy</span>
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> 24hr Response</span>
          </div>
        </motion.div>

        {/* Right: Info & CTA Buttons */}
        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-10 shadow-2xl border border-gray-100 h-full"
          >
            <h3 className="text-2xl font-bold text-dark mb-10">Get In Touch</h3>
            <div className="space-y-8">
              {[
                { icon: <MapPin />, title: "Address", content: "Hitech City, Hyderabad, Telangana, India" },
                { icon: <Phone />, title: "Phone", content: "+91 8500861757" },
                { icon: <Mail />, title: "Email", content: "sales@jikut.com" },
                { icon: <Clock />, title: "Working Hours", content: "Mon to Sat: 10:00 AM - 06:00 PM" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-[#007b5e] flex items-center justify-center shrink-0 group-hover:bg-[#007b5e] group-hover:text-white transition-all duration-300">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-medium">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
             <a href="https://wa.me/918500861757" target="_blank" rel="noopener noreferrer" className="bg-[#2ecc71] text-white py-5 rounded-[1.5rem] font-bold flex flex-col items-center justify-center gap-2 hover:bg-[#27ae60] transition-all shadow-xl shadow-green-100 italic">
                <MessageCircle size={32} />
                <span className="text-sm">WhatsApp</span>
             </a>
             <a href="tel:918500861757" className="bg-[#009688] text-white py-5 rounded-[1.5rem] font-bold flex flex-col items-center justify-center gap-2 hover:bg-[#00796b] transition-all shadow-xl shadow-teal-100 italic">
                <Phone size={32} />
                <span className="text-sm">Call Now</span>
             </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SupportSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-dark mb-4">Need Technical Support?</h2>
        <p className="text-gray-500 max-w-xl mx-auto">Existing customers can create a support ticket directly from here.</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100">
        <h3 className="text-xl font-bold text-dark mb-8 text-center">Support Ticket</h3>
        
        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-10 text-center flex flex-col items-center">
          <div className="bg-blue-500 text-white p-3 rounded-xl mb-4">
            <Lock size={24} />
          </div>
          <h4 className="text-lg font-bold text-blue-900 mb-2">Login Required</h4>
          <p className="text-blue-700/70 text-sm mb-8">Please log in to your account to submit and track a tech support ticket.</p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all cursor-default">Sign In</button>
            <button className="bg-white text-blue-600 border border-blue-200 px-8 py-2.5 rounded-lg font-bold hover:bg-blue-50 transition-all cursor-default">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MapSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.33120689438!2d78.37255157584102!3d17.44390618345155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688cf5df482ae!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713800000000!5m2!1sen!2sin" 
          width="100%" 
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale group-hover:grayscale-0 transition-all duration-700"
        ></iframe>
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-gray-700 shadow-xl border border-white/20">
           Hitech City, Hyderabad, India
        </div>
      </div>
    </div>
  </section>
);

const ContactPage = () => {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactDetails />
      <SupportSection />
      <MapSection />
      
      {/* Final CTA Strip */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-[#007b5e] to-green-800 rounded-[3rem] p-16 text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <span className="text-[10px] font-black uppercase tracking-widest block mb-4 opacity-70">READY TO START?</span>
               <h2 className="text-4xl lg:text-5xl font-black mb-8">Get Your Website Designed <br /> by <span className="bg-white text-[#007b5e] px-4 py-1 rounded-xl">Experts</span></h2>
               <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto font-medium">Start your online journey today with affordable web solutions</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-white text-[#007b5e] px-10 py-4 rounded-xl font-black text-lg shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <Send size={18} /> Request A Quote
                 </button>
                 <a href="tel:918500861757" className="bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Phone size={18} /> Call Now
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

export default ContactPage;
