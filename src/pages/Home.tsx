import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  Monitor, 
  Smartphone, 
  MessageCircle, 
  CheckCircle2, 
  Check, 
  ArrowRight, 
  Menu,
  X,
  Star,
  Users,
  ShieldCheck,
  Zap,
  Briefcase,
  Layout,
  Code,
  Shield,
  Settings,
  User,
  ExternalLink,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  LayoutDashboard,
  FileText,
  ShoppingCart,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Store,
  GraduationCap,
  Gavel,
  Plane,
  Dumbbell
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

// --- Home Components (Mostly extracted from original App.tsx) ---

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-hero overflow-hidden">
      <div className="bg-pattern absolute inset-0"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-3/5 text-white">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-3 py-1 rounded-full text-xs font-bold mb-6 border border-primary/30 uppercase tracking-wider">
            <Zap size={14} /> India's Low Cost Web Agency
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-6 drop-shadow-sm">
            Low Cost <span className="text-primary-light">Website Design</span> & <br />
            Development Company <br />
            in India at <span className="text-primary-light">₹999</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
            WS4U is India's leading low cost website design & development company. 
            Get a complete professional website package for only ₹999 with everything included.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 mb-10">
            {[
              { icon: <CheckCircle2 size={16} />, label: "Free Domain" },
              { icon: <CheckCircle2 size={16} />, label: "Hosting" },
              { icon: <CheckCircle2 size={16} />, label: "SSL Certificate" },
              { icon: <CheckCircle2 size={16} />, label: "Email ID" },
              { icon: <CheckCircle2 size={16} />, label: "Mobile Ready" },
              { icon: <CheckCircle2 size={16} />, label: "Social Media Icons" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-100">
                <span className="text-primary-light">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-primary-light text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-900/40 hover:bg-green-500 transition-all group">
              <Zap size={20} className="group-hover:scale-110 transition-transform" /> 
              Launch Your Site
            </Link>
            <a href="tel:918500861757" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all italic">
              <Phone size={20} /> Call Now: 8500861757
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 grayscale opacity-60">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" className="text-yellow-400" />
              ))}
            </div>
            <p className="text-xs font-medium text-gray-400 italic">Trusted by 5,000+ happy clients across India</p>
          </div>
        </div>

        <div className="lg:w-2/5 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-2xl relative"
          >
            <div className="absolute -top-4 right-8 bg-primary-light text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">New Offer</div>
            <h3 className="text-2xl font-bold text-dark mb-2 flex items-center gap-2">
              <span className="text-secondary">Get Your</span> Free Quote
            </h3>
            <p className="text-gray-500 text-sm mb-6">Have custom requirements? Share your project details.</p>
            
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Your Name" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-light/20 focus:border-primary-light outline-none transition-all" required />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-light/20 focus:border-primary-light outline-none transition-all" required />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-light/20 focus:border-primary-light outline-none transition-all" required />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Service *</label>
                <div className="relative">
                  <Settings className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <select className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-light/20 focus:border-primary-light outline-none appearance-none transition-all">
                    <option>Web Design</option>
                    <option>E-commerce Dev</option>
                    <option>Digital Marketing</option>
                    <option>SEO Services</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>
              <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all mt-6 flex items-center justify-center gap-2 group">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /> Get Free Quote
              </button>
            </form>
            <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-gray-400 font-medium">
              <span className="flex items-center gap-1"><ShieldCheck size={12} /> Secure</span>
              <span className="flex items-center gap-1"><ShieldCheck size={12} /> Privacy</span>
              <span className="flex items-center gap-1"><ShieldCheck size={12} /> 24hr Response</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PackageSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-primary-light text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">Most Popular Package</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-dark mb-4">All-in-one <span className="text-secondary">Affordable</span> Website Package</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to establish your online presence correctly from the start.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-secondary to-blue-700 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row shadow-blue-200 border-4 border-white">
          <div className="lg:w-1/3 bg-white p-10 flex flex-col justify-center items-center text-center">
            <span className="bg-primary-light text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter mb-4">Most Popular</span>
            <div className="mb-2">
              <span className="text-7xl font-black text-dark tracking-tighter">₹999/</span>
              <span className="text-gray-400 font-bold">-</span>
            </div>
            <p className="text-sm font-bold text-gray-500 mb-8">First Year Payment<br /><span className="text-[10px] opacity-60">Renewal ₹999/year</span></p>
            <button className="w-full bg-primary-light text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-green-100 hover:scale-105 transition-transform flex items-center justify-center gap-2 mb-4">
              <ShoppingCart size={20} /> Order Now <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 text-secondary font-bold text-sm hover:underline">
              <ExternalLink size={16} /> View Package Details
            </button>
          </div>
          
          <div className="lg:w-2/3 p-10 text-white grid md:grid-cols-2 gap-y-4 gap-x-8">
            {[
               "Free Domain (.co.in) 🌐", "5GB Web Space ☁️", "Unlimited Bandwidth ⚡", 
               "Professional Logo 🎨", "Mobile Responsive Design 📱", "WhatsApp Integration 💬",
               "Free Website Maintenance 🛠️", "⚡ Website Ready in 48 Hours", "3 Pages Design 📄",
               "1 Business Email Id 📧", "Content Writing ✍️", "Free SSL Certificate 🔒",
               "SEO Friendly Design 🔍", "Social Media Integration 🔗", "Inquiry/Request Quote Form 📝",
               "24*7 Expert Support 📞"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-white/20 p-1 rounded-full shrink-0">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-sm font-medium tracking-wide">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck size={28} />, title: "100% Secure", desc: "SSL Protected" },
            { icon: <Clock size={28} />, title: "24/7 Support", desc: "Always Available" },
            { icon: <Zap size={28} />, title: "Quick Delivery", desc: "Ready in 48hrs" },
            { icon: <Phone size={28} />, title: "Money Back", desc: "100% Guarantee" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center text-primary-light mb-4 group-hover:bg-primary-light group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="font-bold text-dark">{item.title}</h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-dark mb-4">How It <span className="text-primary-light">Works</span></h2>
          <p className="text-gray-500">Three simple steps to launch your business online</p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-gray-50 z-0">
            <div className="h-full bg-primary-light w-1/3"></div>
          </div>

          {[
            { 
              step: "01", 
              title: "Choose Your Plan", 
              desc: "Select our popular ₹999 package or request a custom quote based on your specific needs.",
              icon: <LayoutDashboard size={32} />
            },
            { 
              step: "02", 
              title: "Submit Your Details", 
              desc: "Share your business name, images, and content with us through a simple form or WhatsApp.",
              icon: <FileText size={32} />
            },
            { 
              step: "03", 
              title: "Launch in 48-72 Hours", 
              desc: "Your professional website goes live! We handle all technical aspects like domain, hosting, and SSL.",
              icon: <Zap size={32} />
            }
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10">
              <div className="w-[120px] h-[120px] rounded-full bg-white border-[10px] border-gray-50 shadow-2xl flex items-center justify-center text-secondary mb-8 relative">
                <div className="absolute -top-2 -right-2 bg-primary-light text-white text-xs font-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  {item.step}
                </div>
                {item.icon}
              </div>
              <h3 className="text-xl font-extrabold text-dark mb-4">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-dark mb-4">Why <span className="text-primary-light">Pay More?</span></h2>
          <p className="text-gray-500">See how we stack up against traditional web agencies</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-3 bg-dark text-white p-6 font-bold text-center">
            <div className="text-left pl-4 opacity-50">Features</div>
            <div>Standard Agency</div>
            <div className="text-primary-light">WS4U Service</div>
          </div>
          
          {[
            { f: "Starting Price", v1: "₹15,000 - ₹30,000", v2: "₹999 Only", highlight: true },
            { f: "Delivery Time", v1: "15 - 30 Days", v2: "48 - 72 Hours" },
            { f: "Hosting & Domain", v1: "Charged Extra", v2: "Included FREE" },
            { f: "Technical Support", v1: "Paid Per Hour", v2: "Free Forever" }
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-3 p-6 text-center border-b border-gray-50 items-center ${i % 2 === 0 ? 'bg-gray-50/30' : ''}`}>
              <div className="text-left pl-4 font-bold text-gray-400 text-sm">{row.f}</div>
              <div className="text-sm font-medium text-gray-600 italic line-through decoration-red-500/50">{row.v1}</div>
              <div className={`text-sm font-black ${row.highlight ? 'text-primary-light text-lg scale-110' : 'text-primary-light'}`}>{row.v2}</div>
            </div>
          ))}
          
          <div className="p-8 flex justify-center bg-gray-50">
            <Link to="/contact" className="bg-primary-light text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-green-100 hover:scale-105 transition-all">
              Get Started for ₹999 <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Web Design & Development",
      desc: "We are a leading Website Design Company. We offer Custom Websites at an Affordable Price. Find a Range of Website Design Solutions.",
      icon: <LayoutDashboard size={40} className="text-primary-light" />,
      link: "Read More",
      color: "border-primary-light"
    },
    {
      title: "Digital Marketing",
      desc: "Boost your online presence with our affordable digital marketing services. As a leading web services provider, we offer data-driven solutions.",
      icon: <Globe size={40} className="text-secondary" />,
      link: "Read More",
      color: "border-secondary"
    },
    {
      title: "Graphics Design",
      desc: "From sleek UI/UX designs to eye-catching branding materials, our graphic design agency offers comprehensive solutions to help your business stand out.",
      icon: <Briefcase size={40} className="text-primary-light" />,
      link: "Read More",
      color: "border-primary-light"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary-light text-xs font-black uppercase tracking-widest block mb-4">• WHAT WE OFFER</span>
          <h2 className="text-4xl font-extrabold text-dark mb-4">Our <span className="text-secondary">Services</span></h2>
          <p className="text-gray-500">Creating web solutions for everyone</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className={`bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 border-b-4 ${service.color} group transition-all duration-300`}
            >
              <div className="mb-6 p-4 bg-gray-50 w-fit rounded-2xl group-hover:bg-primary-light group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{service.desc}</p>
              <Link to="/services" className="text-primary-light font-bold text-sm flex items-center gap-2 hover:underline">
                {service.link} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologyStack = () => {
  const techs = [
    { icon: <Zap size={24} />, name: "Next.js 14", desc: "Ultra Fast Loading" },
    { icon: <Code size={24} />, name: "React 19", desc: "Modern UI Framework" },
    { icon: <Settings size={24} />, name: "Node.js", desc: "Robust Performance" },
    { icon: <Layout size={24} />, name: "Tailwind CSS", desc: "Responsive Design" },
    { icon: <Shield size={24} />, name: "Prisma ORM", desc: "Secure Data Layer" },
    { icon: <Monitor size={24} />, name: "MySQL", desc: "Scalable Database" }
  ];

  return (
    <section className="py-24 bg-dark text-white relative">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Cutting-Edge <span className="text-secondary">Technologies</span></h2>
        <p className="text-gray-400 mb-16">We use the latest high-performance tech stack to build your dream website</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techs.map((tech, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary mb-4 hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h4 className="font-bold text-sm mb-1">{tech.name}</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: <Zap size={32} />, value: "9000+", label: "Projects Delivered" },
    { icon: <Users size={32} />, value: "500+", label: "Client Base" },
    { icon: <Briefcase size={32} />, value: "13+", label: "Years Experience" },
    { icon: <Star size={32} />, value: "4.5★", label: "Customer Rating" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest block mb-4 opacity-70">OUR ACHIEVEMENTS</span>
          <h2 className="text-3xl font-bold">Proven Track Record</h2>
          <p className="opacity-80">Numbers that speak for our excellence and commitment</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="text-primary-light mb-4">{stat.icon}</div>
              <span className="text-4xl font-black mb-2">{stat.value}</span>
              <span className="text-sm font-medium opacity-70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "What services does webservices4u offer?", a: "We provide comprehensive web solutions including web design, e-commerce development, digital marketing, and hosting services." },
    { q: "How does webservices4u pricing work?", a: "We believe in transparent, upfront pricing. Our most popular package starts at just ₹999 for the first year." },
    { q: "Can you provide portfolio examples of your previous work?", a: "Yes, we have a vast portfolio across various industries from real estate to e-commerce." },
    { q: "What is the website design process?", a: "It's simple: Choose a plan, submit your business details, and we deliver your live website in 48-72 hours." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-primary-light block mb-4">GOT QUESTIONS?</span>
          <h2 className="text-4xl font-extrabold text-dark mb-4">Frequently Asked <span className="text-secondary">Questions</span></h2>
          <p className="text-gray-500">Find answers to common questions about our web design services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-dark bg-gray-50/50"
              >
                <span>{faq.q}</span>
                <ChevronDown size={20} className={`text-primary-light transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PackageSection />
      
      <div className="bg-white py-12 border-y border-gray-100">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[1000px] gap-8">
            {[
              { icon: <Building2 />, color: "bg-orange-50 text-orange-500", label: "Real Estate" },
              { icon: <Settings />, color: "bg-pink-50 text-pink-500", label: "Salons & Spa" },
              { icon: <Stethoscope />, color: "bg-blue-50 text-blue-500", label: "Doctors & Clinics" },
              { icon: <UtensilsCrossed />, color: "bg-red-50 text-red-500", label: "Restaurants" },
              { icon: <Store />, color: "bg-purple-50 text-purple-500", label: "Retail Stores" },
              { icon: <GraduationCap />, color: "bg-indigo-50 text-indigo-500", label: "Schools/Coaching" },
              { icon: <Gavel />, color: "bg-gray-50 text-gray-700", label: "Lawyers" },
              { icon: <Plane />, color: "bg-green-50 text-green-500", label: "Travel Agencies" },
              { icon: <Dumbbell />, color: "bg-yellow-50 text-yellow-600", label: "Gyms & Fitness" }
            ].map((industry, i) => (
              <Link key={i} to="/services" className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className={`${industry.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                  {industry.icon}
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter truncate w-full text-center">{industry.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <HowItWorks />
      <ComparisonTable />
      <ServicesGrid />

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-primary-light/10 rounded-[3rem] blur-2xl group-hover:bg-primary-light/20 transition-all"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="rounded-[2.5rem] shadow-2xl relative z-10 border-8 border-white object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
                <p className="text-4xl font-black text-primary-light mb-1">13+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Trust</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary-light text-xs font-black uppercase tracking-widest block mb-4">• WHO WE ARE</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-dark mb-6 leading-tight">
                About <span className="text-primary-light">WS4U</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
                WS4U is a division of Jikut Technologies Pvt. Ltd., a leading technology company based in Hyderabad, India. Our team consists of highly skilled developers and designers dedicated to creating high-quality, professional websites for everyone.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  "Expert team with 13+ years of industry experience",
                  "Over 9000+ websites launched successfully",
                  "Dedicated support team for post-launch maintenance",
                  "Focus on mobile-first and SEO-friendly architectures"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-700 font-semibold italic">
                    <div className="w-6 h-6 rounded-full bg-primary-light/10 flex items-center justify-center text-primary-light">
                      <Check size={14} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Link to="/about" className="bg-primary-light text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-all">
                  Read More <ArrowRight size={20} />
                </Link>
                <a href="tel:918500861757" className="bg-white text-dark border border-gray-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all italic">
                   Call: 8500861757
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechnologyStack />
      <StatsSection />
      <FAQSection />
    </div>
  );
}
