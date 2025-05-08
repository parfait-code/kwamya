// pages/index.tsx
'use client'
import { useState, useEffect, FormEvent, ReactNode } from "react";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ConsultingIcon, EmailIcon, KwamyaIcon, LocationIcon, Logo, MaintenanceIcon, MenuIcon, MobileIcon, ModernIcon, PhoneIcon, SeoIcon, SupportIcon, UiUxIcon, WebsiteIcon } from "@/components/icones";
import Link from "next/link";

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  info: string;
}

interface InputFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
}

// Composants
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-sm py-2 shadow-lg" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <NavItem text="Services" href="#services" />
            <NavItem text="Pourquoi nous" href="#why-us" />
            <NavItem text="Réalisations" href="#portfolio" /> {/* Ajoutez cette ligne */}
            <NavItem text="Contact" href="#contact" />
          </ul>
        </nav>
        <Link href={"#contact"}>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-6 rounded-full font-medium hidden md:block"
          >
            Nous Contacter
          </motion.button>
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
};

const NavItem = ({ text, href }: { text: string; href: string }) => (
  <li>
    <Link
      href={href}
      className="text-white hover:text-purple-300 transition-colors duration-300"
    >
      {text}
    </Link>
  </li>
);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <button
        className="text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon isOpen={isOpen} />
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 right-4 bg-black/95 backdrop-blur-sm rounded-lg shadow-lg p-6 w-64"
        >
          <ul className="flex flex-col space-y-4">
            <MobileNavItem text="Services" href="#services" onClick={() => setIsOpen(false)} />
            <MobileNavItem text="Pourquoi nous" href="#why-us" onClick={() => setIsOpen(false)} />
            <MobileNavItem text="Contact" href="#contact" onClick={() => setIsOpen(false)} />
          </ul>
          <Link href={'#contact'}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-6 rounded-full font-medium w-full mt-6"
            >
              Nous Contacter
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

const MobileNavItem = ({ text, href, onClick }: { text: string; href: string; onClick: () => void }) => (
  <li>
    <Link
      href={href}
      className="text-white hover:text-purple-300 transition-colors duration-300 block"
      onClick={onClick}
    >
      {text}
    </Link>
  </li>
);

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative pt-20 pb-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.15),transparent_25%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(78,108,245,0.15),transparent_25%)]"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Transformez votre <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">présence digitale</span> au Cameroun
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg"
            >
              KWAMYA crée des sites web modernes, performants et adaptés aux besoins spécifiques des entreprises camerounaises.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-8 rounded-full font-medium text-center"
              >
                Contactez-nous
              </motion.a>
              <motion.a 
                href="#services" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white backdrop-blur-sm border border-white/20 py-3 px-8 rounded-full font-medium text-center"
              >
                Découvrir nos services
              </motion.a>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              <WebIllustration />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WebIllustration = () => (
  <svg 
    width="400" 
    height="300" 
    viewBox="0 0 400 300" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto drop-shadow-2xl"
  >
    <rect width="400" height="300" rx="10" fill="#1F2937" />
    <rect x="20" y="20" width="360" height="40" rx="5" fill="#111827" />
    <circle cx="40" cy="40" r="6" fill="#6366F1" />
    <circle cx="60" cy="40" r="6" fill="#A78BFA" />
    <circle cx="80" cy="40" r="6" fill="#8B5CF6" />
    <rect x="120" y="32" width="200" height="16" rx="3" fill="#374151" />
    <rect x="20" y="80" width="140" height="200" rx="5" fill="#111827" />
    <rect x="40" y="100" width="100" height="10" rx="2" fill="#6366F1" />
    <rect x="40" y="120" width="80" height="10" rx="2" fill="#4B5563" />
    <rect x="40" y="140" width="90" height="10" rx="2" fill="#4B5563" />
    <rect x="40" y="160" width="100" height="10" rx="2" fill="#4B5563" />
    <rect x="40" y="200" width="80" height="30" rx="5" fill="#7C3AED" />
    <rect x="180" y="80" width="200" height="200" rx="5" fill="#111827" />
    <rect x="200" y="100" width="160" height="100" rx="5" fill="#374151" />
    <rect x="200" y="220" width="160" height="40" rx="5" fill="#6366F1" />
    <circle cx="280" cy="150" r="30" fill="url(#paint0_linear)" />
    <path d="M270 140L280 150L270 160" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M290 140L280 150L290 160" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="paint0_linear" x1="250" y1="120" x2="310" y2="180" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#6366F1" />
      </linearGradient>
    </defs>
  </svg>
);

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section 
      id="services" 
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nous créons des solutions web sur mesure pour répondre aux besoins spécifiques de votre entreprise au Cameroun.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ServiceCard
            icon={<WebsiteIcon />}
            title="Création de Site Web"
            description="Sites vitrines, e-commerce ou applications web complexes adaptés a vos offres et services."
            variants={itemVariants}
          />
          <ServiceCard
            icon={<MobileIcon />}
            title="Création d'Applications Mobiles"
            description="Applications natives et cross-platform pour iOS et Android, optimisées pour offrir une expérience utilisateur fluide et performante sur tous les appareils mobiles."
            variants={itemVariants}
          />
          <ServiceCard
            icon={<SeoIcon />}
            title="Optimisation SEO"
            description="Améliorez votre visibilité sur les moteurs et être compétitif dans le numérique sur internet."
            variants={itemVariants}
          />
          <ServiceCard
            icon={<UiUxIcon />}
            title="UI/UX Design"
            description="Expériences utilisateur intuitives et interfaces esthétiques adaptées à votre public cible."
            variants={itemVariants}
          />
          <ServiceCard
            icon={<MaintenanceIcon />}
            title="Maintenance Web"
            description="Services de maintenance régulière pour garantir la sécurité et les performances de votre site."
            variants={itemVariants}
          />
          <ServiceCard
            icon={<ConsultingIcon />}
            title="Consulting Digital"
            description="Conseils stratégiques pour optimiser votre présence numérique."
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  variants 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  variants: any;
}) => {
  return (
    <motion.div
      variants={variants}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl hover:shadow-purple-900/20 transition-all duration-300 group"
    >
      <div className="bg-purple-900/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-900/30 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const WhyUs = () => {
  return (
    <section 
      id="why-us" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(120,50,255,0.15),transparent_50%)]"></div>
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pourquoi <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Choisir KWAMYA</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nous combinons expertise technique et compréhension approfondie du marché camerounais pour créer des solutions web adaptées à vos besoins spécifiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl h-full"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Notre approche</h3>
              
              <ul className="space-y-6">
                <FeatureItem 
                  icon={<LocalizationIcon />}
                  title="Expertise Locale"
                  description="Nous comprenons les spécificités du marché camerounais et les besoins particuliers des entreprises locales."
                />
                <FeatureItem 
                  icon={<ModernIcon />}
                  title="Technologies Modernes"
                  description="Nous utilisons les technologies les plus récentes pour créer des sites web rapides, sécurisés et évolutifs."
                />
                <FeatureItem 
                  icon={<SupportIcon />}
                  title="Support Personnalisé"
                  description="Une équipe dédiée qui vous accompagne à chaque étape de votre projet et au-delà."
                />
              </ul>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-semibold text-white mb-8 relative z-10">Statistiques</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <StatCard
                  number="8+"
                  label="Projets Réalisés"
                />
                <StatCard
                  number="100%"
                  label="Clients Satisfaits"
                />
                <StatCard
                  number="24/7"
                  label="Support Client"
                />
                <StatCard
                  number="3+"
                  label="Années d'Expérience"
                />
              </div>
              
              <div className="mt-8 relative z-10">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-8 rounded-full font-medium w-full"
                >
                  Contactez-nous
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <li className="flex items-start">
      <div className="bg-purple-900/20 rounded-lg w-12 h-12 flex items-center justify-center shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium text-white mb-1">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </li>
  );
};

const LocalizationIcon = () => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="8" stroke="#A78BFA" strokeWidth="2" />
    <path d="M12 4V20" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12H20" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 7C8.32744 9.12891 15.5545 9.65205 19 7" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 17C8.32744 14.8711 15.5545 14.348 19 17" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const StatCard = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-900/20">
      <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-2">
        {number}
      </p>
      <p className="text-gray-400 text-sm">
        {label}
      </p>
    </div>
  );
};

interface FormStatus {
  submitted: boolean;
  loading: boolean;
  error: string | null;
}

const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    loading: false,
    error: null
  });
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche la redirection
    setFormStatus({ submitted: false, loading: true, error: null });
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const formProps = Object.fromEntries(formData);
      
      const response = await fetch("https://submit-form.com/oBWLWS5Bj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formProps)
      });
      
      if (response.ok) {
        setFormStatus({ submitted: true, loading: false, error: null });
        (e.target as HTMLFormElement).reset(); // Réinitialiser le formulaire
      } else {
        throw new Error("La soumission a échoué");
      }
    } catch (error) {
      setFormStatus({ submitted: false, loading: false, error: (error as Error).message });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-5 bg-black relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,50,255,0.15),transparent_25%)]"></div>
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Contactez-nous</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Prêt à transformer votre présence digitale ? Contactez-nous dès aujourd'hui pour discuter de votre projet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl h-full"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Informations de contact</h3>
              
              <ul className="space-y-6">
                <ContactItem 
                  icon={<EmailIcon />}
                  title="Email"
                  info="kwamya@gmail.com"
                />
                <ContactItem 
                  icon={<PhoneIcon />}
                  title="Téléphone"
                  info="+237 650 601 520"
                />
                <ContactItem 
                  icon={<LocationIcon />}
                  title="Adresse"
                  info="Yaoundé, Cameroun"
                />
              </ul>
            </motion.div>
          </div>
          
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Envoyez-nous un message</h3>
              
              {formStatus.submitted ? (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-white">
                  <p className="font-medium">Merci pour votre message !</p>
                  <p className="text-green-200 mt-1">Nous vous contacterons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                      type="text"
                      name="name"
                      label="Nom"
                      placeholder="Votre nom"
                      required
                    />
                    <InputField 
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  <InputField 
                    type="tel"
                    name="phone"
                    label="Téléphone"
                    placeholder="+237 XXX XXX XXX"
                  />
                  <InputField 
                    type="text"
                    name="subject"
                    label="Sujet"
                    placeholder="Sujet de votre message"
                    required
                  />
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                      placeholder="Votre message"
                      rows={6}
                      required
                    ></textarea>
                  </div>

                  {formStatus.error && (
                    <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-white">
                      <p>Une erreur s'est produite. Veuillez réessayer.</p>
                    </div>
                  )}
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-8 rounded-full font-medium w-full flex items-center justify-center"
                    type="submit"
                    disabled={formStatus.loading}
                  >
                    {formStatus.loading ? (
                      <>
                        <span className="mr-2">Envoi en cours</span>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </>
                    ) : (
                      "Envoyer"
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  info 
}: ContactItemProps) => {
  return (
    <li className="flex items-start">
      <div className="bg-purple-900/20 rounded-lg w-12 h-12 flex items-center justify-center shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium text-white mb-1">{title}</h4>
        <p className="text-gray-400">{info}</p>
      </div>
    </li>
  );
};

const InputField = ({ 
  type, 
  name,
  label, 
  placeholder,
  required = false
}: InputFieldProps) => {
  return (
    <div>
      <label className="block text-gray-300 text-sm font-medium mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};


const Portfolio = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(120,50,255,0.15),transparent_50%)]"></div>
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Réalisations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents réalisés pour des entreprises camerounaises.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <PortfolioCard
            image="/projects/hotel_booking.png"
            title="Hôtel de Luxe"
            category="Site Web"
            description="Site web DEMO complet avec système de réservation de d'hôtel multi-ville."
            demoLink="https://hb-gs.vercel.app/"
            variants={itemVariants}
          />
          <PortfolioCard
            image="/projects/site_ecommerce_equipement_electronique.jpg"
            title="E-commerce d'Electronique"
            category="Site E-commerce"
            description="Boutique en ligne DEMO pour la vente des équipements electronique."
            demoLink="https://quickcart-gs.vercel.app/"
            variants={itemVariants}
          />
          <PortfolioCard
            image="/projects/booking_doctor_apointment.jpg"
            title="Clinique Médicale"
            category="Site Web Responsive"
            description="Site web DEMO pour une clinique avec système de prise de rendez-vous en ligne."
            demoLink="https://prescripto.vercel.app"
            variants={itemVariants}
          />
          <PortfolioCard
            image="/projects/gree_delivery.jpg"
            title="Application de livraison d'épicerie"
            category="Site Web Responsive"
            description="Site web e-commerce DEMO pour la livraison de produits alimentaires."
            demoLink="https://greencart-gs.vercel.app/"
            variants={itemVariants}
          />
          <PortfolioCard
            image="/projects/learning_plateform.jpg"
            title="Plateform d'Apprentissage"
            category="site web"
            description="Plateforme d'apprentissage en ligne avec gestion de la progression."
            demoLink="https://lms-gs.vercel.app/"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ 
  image, 
  title, 
  category, 
  description, 
  demoLink,
  variants 
}: { 
  image: string;
  title: string; 
  category: string;
  description: string;
  demoLink: string;
  variants: any;
}) => {
  return (
    <motion.div
      variants={variants}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-purple-900/20 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="px-3 py-1 bg-purple-600/90 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <motion.a 
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <span className="mr-2">Voir la démo</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M15 3H21V9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M10 14L21 3" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <KwamyaIcon className="h-10 w-10 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                KWAMYA
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformez votre présence digitale au Cameroun avec nos solutions web sur mesure.
            </p>
            {/* <div className="flex space-x-4">
              <SocialIcon icon={<FacebookIcon />} />
              <SocialIcon icon={<TwitterIcon />} />
              <SocialIcon icon={<InstagramIcon />} />
              <SocialIcon icon={<LinkedInIcon />} />
            </div> */}
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Création de Site Web</li>
              <li className="text-gray-400">Responsive Design</li>
              <li className="text-gray-400">Optimisation SEO</li>
              <li className="text-gray-400">UI/UX Design</li>
              <li className="text-gray-400">Maintenance Web</li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="text-white text-lg font-semibold mb-6">Entreprise</h4>
            <ul className="space-y-3">
              <FooterLink text="À propos" />
              <FooterLink text="Notre équipe" />
              <FooterLink text="Carrières" />
              <FooterLink text="Témoignages" />
              <FooterLink text="Blog" />
            </ul>
          </div> */}
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-start">
                <LocationIcon />
                <span className="ml-2">Douala, Cameroun</span>
              </li>
              <li className="text-gray-400 flex items-start">
                <EmailIcon />
                <span className="ml-2">contact@kwamya.cm</span>
              </li>
              <li className="text-gray-400 flex items-start">
                <PhoneIcon />
                <span className="ml-2">+237 650 601 520</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KWAMYA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text }: { text: string }) => (
  <li>
    <Link 
      href="#" 
      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
    >
      {text}
    </Link>
  </li>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>KWAMYA | Agence Web au Cameroun</title>
        <meta name="description" content="KWAMYA - Agence web spécialisée dans la création de sites web au Cameroun. Transformez votre présence digitale avec nos solutions sur mesure." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}