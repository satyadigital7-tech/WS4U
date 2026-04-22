import React from 'react';
import { 
  Check, 
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  PieChart,
  Palette,
  ShieldCheck,
  Zap,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ServicesHero = () => (
  <section className="relative pt-32 pb-20 text-center text-white overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600" 
      alt="Our Services" 
      className="absolute inset-0 w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-[#007b5e]/85 backdrop-blur-[2px]"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 font-outfit">Our Services</h1>
      <p className="text-gray-200 max-w-2xl mx-auto opacity-90 text-lg font-medium">
        Comprehensive low-cost web solutions tailored for your business growth
      </p>
    </div>
  </section>
);

const ServiceRow = ({ 
  title, 
  description, 
  features, 
  image, 
  tag, 
  reverse = false, 
  tagColor = "bg-primary-light" 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  image: string; 
  tag: string; 
  reverse?: boolean;
  tagColor?: string;
}) => (
  <section className="py-20 bg-white">
    <div className={`container mx-auto px-4 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
      <div className="lg:w-1/2">
        <span className={`${tagColor} text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block flex items-center gap-1 w-fit`}>
          <Zap size={10} /> {tag}
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-dark mb-6">{title}</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <div className="bg-primary-light/10 p-1 rounded-full">
                <Check size={14} className="text-primary-light" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 inline-block">
          Get Started
        </Link>
      </div>
      <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 relative">
        <img 
          src={image} 
          alt={title} 
          className="rounded-xl shadow-2xl w-full object-cover aspect-video"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Packages = () => {
  const plans = [
    {
      name: "Basic Package",
      price: "₹3,599/-",
      features: [
        "3 Pages Website",
        "Free Domain & Hosting",
        "Mobile Responsive",
        "Free SSL Certificate",
        "24/7 Support"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "₹9,999/-",
      tag: "Most Popular",
      features: [
        "10 Pages Website",
        "Free Domain & Hosting",
        "Mobile Responsive",
        "SEO Optimization",
        "Content Writing",
        "Social Media Integration"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "₹24,999/-",
      features: [
        "Unlimited Pages",
        "eCommerce Features",
        "Custom Development",
        "Advanced SEO",
        "Priority Support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-dark mb-4">Our Packages</h2>
          <p className="text-gray-500">Choose the perfect plan for your business</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-10 shadow-xl border-4 ${plan.popular ? 'border-primary-light scale-105 relative z-10' : 'border-transparent'} flex flex-col`}
            >
              <div className="text-center mb-8">
                {plan.popular && (
                  <span className="bg-primary-light text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">
                    {plan.tag}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-dark mb-4">{plan.name}</h3>
                <div className="text-3xl font-black text-primary-light">{plan.price}</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium tracking-wide">
                    <Check size={16} className="text-primary-light shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`w-full py-4 rounded-xl font-bold transition-all text-center block ${plan.popular ? 'bg-secondary text-white shadow-xl shadow-blue-100 hover:bg-blue-600' : 'border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-white'}`}>
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesCTA = () => (
  <section className="py-24 bg-gradient-to-br from-secondary to-blue-800 text-white relative">
    <div className="bg-pattern absolute inset-0 opacity-20"></div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <span className="bg-white/10 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Ready to Start?</span>
      <h2 className="text-4xl lg:text-7xl font-extrabold mb-8 leading-tight">
        Get Your Website Designed <br />
        by <span className="bg-primary-light text-white px-4">Experts</span>
      </h2>
      <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto opacity-80">
        Start your online journey today with affordable web solutions
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link to="/contact" className="bg-white text-secondary px-10 py-5 rounded-xl font-black flex items-center justify-center gap-2 shadow-2xl hover:scale-105 transition-all">
          <ArrowRight size={24} /> Request A Quote
        </Link>
        <a href="tel:918500861757" className="bg-blue-900/40 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-white/10 transition-all italic">
          <Phone size={24} /> Call Now: 8500861757
        </a>
      </div>
    </div>
  </section>
);

export default function Services() {
  const serviceData = [
    {
      title: "Web Design & Development",
      tag: "Most Popular",
      description: "Transform your online presence with our professional website design and development services. We create stunning, responsive websites that engage your audience and drive results.",
      features: [
        "Custom website design tailored to your brand",
        "Mobile-responsive and SEO-friendly",
        "Fast loading and optimized performance",
        "Content management system (CMS) integration"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tagColor: "bg-primary-light"
    },
    {
      title: "eCommerce Solutions",
      tag: "High Demand",
      description: "Launch your online store with our comprehensive eCommerce solutions. We build powerful platforms that help you sell more and grow your business.",
      features: [
        "Secure payment gateway integration",
        "Inventory and order management",
        "Multi-vendor marketplace support",
        "Shipping and tax calculation"
      ],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      reverse: true,
      tagColor: "bg-[#007b5e]"
    },
    {
      title: "Digital Marketing",
      tag: "Boost Your Business",
      description: "Increase your online visibility and reach more customers with our expert digital marketing services. We help you grow your brand and achieve your business goals.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing (SMM)",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing & Email Campaigns"
      ],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20e?auto=format&fit=crop&q=80&w=800",
      tagColor: "bg-[#ff9966]"
    },
    {
      title: "Mobile App Development",
      tag: "Native & Hybrid",
      description: "Reach your customers on the go with custom mobile applications for iOS and Android. We build intuitive, feature-rich apps that users love.",
      features: [
        "Native iOS and Android development",
        "Cross-platform hybrid apps",
        "App Store & Play Store deployment",
        "Maintenance and updates"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      reverse: true,
      tagColor: "bg-[#8a2be2]"
    },
    {
      title: "Graphic Design",
      tag: "Creative Solutions",
      description: "Stand out from the competition with stunning visual designs. Our creative team delivers eye-catching graphics that communicate your brand message effectively.",
      features: [
        "Logo design and brand identity",
        "UI/UX design for web and mobile",
        "Marketing materials and brochures",
        "Social media graphics"
      ],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      tagColor: "bg-[#ff3366]"
    },
    {
      title: "Maintenance & Support",
      tag: "24/7 Support",
      description: "Keep your website running smoothly with our ongoing maintenance and support services. We ensure your site is always up-to-date, secure, and performing optimally.",
      features: [
        "Regular updates and backups",
        "Security monitoring and fixes",
        "Performance optimization",
        "24/7 technical support"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      reverse: true,
      tagColor: "bg-[#00bcd4]"
    }
  ];

  return (
    <div className="bg-white">
      <ServicesHero />
      {serviceData.map((service, idx) => (
        <ServiceRow key={idx} {...(service as any)} />
      ))}
      <Packages />
      <ServicesCTA />
    </div>
  );
}
