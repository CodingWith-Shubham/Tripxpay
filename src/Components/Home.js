import React, { useState, useEffect } from 'react';
import { ArrowRight, Info, ChevronDown, CreditCard, Globe, Shield, Zap } from 'lucide-react';
import { motion } from "framer-motion";
import Aurora from './Aurora';
import Earth3D from './Earth3D';
export default function Home() {
  const [merchantsDropdownOpen, setMerchantsDropdownOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

const TripXpayCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-72 h-[500px] md:w-80 bg-white rounded-3xl shadow-2xl border border-gray-300 p-5 flex flex-col space-y-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#02698a] via-[#3ba7b9] to-[#4dbf64] rounded-t-3xl" />

      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">🚀 TripXpay</h2>
        <p className="text-sm text-gray-500">Travel made easy, payments made simple</p>
      </div>

      <div className="space-y-4 text-sm text-gray-700">
        <FeatureItem emoji="🕒" title="Travel Now, Pay Later" />
        <FeatureItem emoji="💳" title="Easy EMI Options" />
        <FeatureItem emoji="⚡" title="Instant Booking" />
        <FeatureItem emoji="🌍" title="Global Destinations" />
        <FeatureItem emoji="🔒" title="Secure Payments" />
        <FeatureItem emoji="📅" title="Flexible Schedules" />
      </div>

      <button className="mt-auto bg-gradient-to-r from-[#02698a] via-[#3ba7b9] to-[#4dbf64] text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
        Get Started
      </button>
    </motion.div>
  );
};

const FeatureItem = ({ emoji, title }) => (
  <div className="flex items-center space-x-3">
    <div className="text-xl">{emoji}</div>
    <div className="font-medium">{title}</div>
  </div>
);
  const toggleMerchantsDropdown = () => {
    setMerchantsDropdownOpen(!merchantsDropdownOpen);
  };

  // Feature cards data
  const featureCards = [
    {
      id: 1,
      icon: <CreditCard className="w-8 h-8 text-teal-400" />,
      title: "Flexible Payments",
      description: "Split travel expenses into convenient installments with our flexible payment options."
    },
    {
      id: 2,
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Global Acceptance",
      description: "Pay seamlessly across 150+ countries with automatic currency conversion."
    },
    {
      id: 3,
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and fraud protection for every transaction."
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Instant Rewards",
      description: "Earn cashback and travel points with every purchase, redeemable instantly."
    }
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Testimonial animation variants
  const testimonialContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const testimonialItemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      
      {/* Background triangle with animation */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#02698a] via-[#3ba7b9] to-[#4dbf64] bg-[length:400%_400%]"
        style={{
          clipPath: 'polygon(0 0, 150% 0, 0 30%)',
          animation: "wave 5s ease-in-out infinite",
          zIndex: 0
        }}
      />
      

      {/* Content container */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center">
            <div className="flex items-center">
              

              <span className="text-5xl font-extrabold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-xy">
                TripXpay
              </span>
            </div>
            <div className="hidden md:flex items-center ml-8 space-x-6">
              {/* For Merchants Dropdown */}
              <div className="relative">
                <button 
                  onClick={toggleMerchantsDropdown}
                  className="flex items-center focus:outline-none text-white"
                >
                  <span className="mr-1">for merchants</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${merchantsDropdownOpen ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                
                {/* Dropdown Menu with Animation */}
                <div 
                  className={`absolute left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-700 z-10 
                    transition-all duration-300 origin-top 
                    ${merchantsDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800 rounded-lg text-white">Merchant Login</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800 rounded-lg text-white">Become a Partner</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800 rounded-lg text-white">Merchant Benefits</a>
                  </div>
                </div>
              </div>

              {/* D2C Simplified Link */}
              {/* <a href="#" className="text-white hover:text-teal-100 transition-colors">d2c simplified</a> */}
              
              {/* Help Center Link */}
              <a href="#" className="text-white hover:text-teal-100 transition-colors">help center</a>
              
              {/* More Dropdown */}
              <div className="relative">
                <button className="flex items-center focus:outline-none text-white">
                  <span className="mr-1">more</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="border border-teal-500 text-white rounded-full px-6 py-2 flex items-center hover:bg-teal-900 transition-colors">
              login <ArrowRight className="ml-1 w-4 h-4" />
            </button>
            <button className="bg-teal-500 text-white rounded-full px-6 py-2 flex items-center hover:bg-teal-600 transition-colors">
              pay bill <Info className="ml-1 w-4 h-4" />
            </button>
          </div>
        </nav>
        {/* Main Content */}
        <div className="container mx-auto px-2 md:px-6 flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 lg:ml-32">
            <div className="flex lg:mt-20">
              <h1 className="md:text-6xl font-bold mb-4 text-black">
                <span className="bg-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-xy lg:text-8xl drop-shadow-lg font-bold">Travel</span>
              </h1>
              <span className="text-white drop-shadow-md font-bold text-3xl lg:mt-16">made easy,</span>
            </div>
            <div className='flex'>
            <h1 className="md:text-6xl font-bold mb-2 text-black">
              <span className="bg-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-xy lg:text-8xl drop-shadow-lg font-bold"
>Payments</span>
            </h1>
            <span className="text-white drop-shadow-md font-bold text-3xl lg:mt-[52px]">made simple!</span>
            </div>
            <p className="text-xl md:text-1xl text-gray-300 lg:mt-5 mb-8 drop-shadow-md font-bold lg:w-96">Join the millions of companies that use TripXpay to accept payments online and in person, embed financial services and build a more profitable business.</p>
            
            
          </div>
          
          {/* Right Content - Mobile App Mockups */}
          <div className="w-full md:w-1/2 relative h-[800px]">
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="w-96 h-[500px] lg:ml-10 lg:px-10 bg-white rounded-3xl shadow-2xl border border-gray-300 p-6 flex flex-col space-y-6 relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#02698a] via-[#3ba7b9] to-[#4dbf64] rounded-t-3xl" />

    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800">🚀 TripXpay</h2>
      <p className="text-sm text-gray-500">Travel made easy, payments made simple</p>
    </div>
    
    <div className="space-y-5 text-base text-gray-700">
      <FeatureItem emoji="🕒" title="Travel Now, Pay Later" />
      <FeatureItem emoji="💳" title="Easy EMI Options" />
      <FeatureItem emoji="⚡" title="Instant Booking" />
      <FeatureItem emoji="🌍" title="Global Destinations" />
      <FeatureItem emoji="🔒" title="Secure Payments" />
      <FeatureItem emoji="📅" title="Flexible Schedules" />
    </div>

    <button className="mt-auto bg-gradient-to-r from-[#02698a] via-[#3ba7b9] to-[#4dbf64] text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
      Get Started
    </button>
  </motion.div>
</div>

        </div>
      
        {/* New Feature Cards Section (Stripe-like) with Framer Motion */}
        <div className="w-full bg-gradient-to-b from-transparent to-gray-900 pt-20 pb-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"style={{
                textShadow: `
                  0 0 2px #00ffe7,
                  0 0 2px #00ffe7,
                  0 0 2px #00ffe7
                `
              }}>Reimagine travel payments</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Innovative payment solutions designed for modern travelers and businesses.</p>
            </motion.div>
            
          {/* Features Grid with Animation */}
<motion.div 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  transition={{ duration: 0.8, ease: "easeInOut" }}
  viewport={{ once: false, amount: 0.2 }} // triggers when 20% is visible
>
  {featureCards.map((card) => (
    <motion.div 
      key={card.id}
      className="group relative overflow-hidden rounded-xl transition-all duration-700 ease-in-out cursor-pointer"
      onMouseEnter={() => setActiveCard(card.id)}
      onMouseLeave={() => setActiveCard(null)}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: "easeInOut" }
        }
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        card.id === 1 ? 'from-teal-500/30 to-blue-500/30' : 
        card.id === 2 ? 'from-blue-500/30 to-indigo-500/30' : 
        card.id === 3 ? 'from-indigo-500/30 to-purple-500/30' : 
        'from-purple-500/30 to-yellow-500/30'
      } opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
      
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl h-full p-6 md:p-8 transition-all duration-500 ease-in-out transform group-hover:shadow-lg">
        {/* Card Icon */}
        <motion.div 
          className="mb-4"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {card.icon}
        </motion.div>
        
        {/* Card Title & Description */}
        <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
        <p className="text-gray-300">{card.description}</p>
        
        {/* Hover Effect Line */}
        <motion.div 
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
            card.id === 1 ? 'from-teal-400 to-blue-400' : 
            card.id === 2 ? 'from-blue-400 to-indigo-400' : 
            card.id === 3 ? 'from-indigo-400 to-purple-400' : 
            'from-purple-400 to-yellow-400'
          }`}
          initial={{ width: "0%" }}
          animate={{ width: activeCard === card.id ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </motion.div>
  ))}
</motion.div>

          </div>
        </div>
        
    {/* Testimonials Section with Framer Motion */}
<div className="w-full bg-gray-900 py-20">
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by travelers worldwide</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Join thousands of happy travelers who simplify their journey with TripXpay.
      </p>
    </motion.div>

    {/* Testimonial Cards with Animation */}
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
      }}
      viewport={{ once: false, margin: "-50px" }}
    >
      {[1, 2, 3].map((id, index) => (
        <motion.div 
          key={id}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg"
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 50 },
            show: { 
              opacity: 1, scale: 1, y: 0,
              transition: { duration: 1.1, ease: "easeInOut" }
            }
          }}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.svg 
                  key={star} 
                  className="w-5 h-5 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: star * 0.1, duration: 0.2 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            {index === 0 && `"TripXpay transformed how I manage travel expenses. The installment option made my dream vacation possible without financial stress."`}
            {index === 1 && `"The automatic currency conversion feature saved me so much time and money during my international trip. Absolutely essential for global travelers."`}
            {index === 2 && `"The rewards program is incredible! I've earned enough points from my travels to cover a weekend getaway. TripXpay pays for itself."`}
          </p>
          <div className="flex items-center">
            <motion.div 
              className={`${
                index === 0 ? "bg-blue-500" : index === 1 ? "bg-purple-500" : "bg-teal-500"
              } rounded-full w-10 h-10 flex items-center justify-center mr-3`}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            >
              <span className="text-white font-bold">
                {index === 0 ? "JD" : index === 1 ? "AS" : "MJ"}
              </span>
            </motion.div>
            <div>
              <h4 className="text-white font-medium">
                {index === 0 ? "Jamie Doe" : index === 1 ? "Alex Smith" : "Morgan Johnson"}
              </h4>
              <p className="text-gray-400 text-sm">
                {index === 0 ? "Avid traveler" : index === 1 ? "Business traveler" : "Travel blogger"}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>

        
  {/* Call to Action Section */}
  <div className="w-full bg-gray-900 pb-20 relative">
    
  
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl max-w-4xl mx-auto left-0 right-0">
  

  </div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div 
      className="relative bg-gradient-to-br from-teal-500/30 to-blue-500/30 max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <div className="backdrop-blur-md bg-black/20 p-8 md:p-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your travel payments?
            </h2>
            <p className="text-gray-300 text-lg">
              Download the app now and experience hassle-free travel payments.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <motion.button 
              className="bg-teal-500 text-white rounded-full px-8 py-3 flex items-center hover:bg-teal-600 transition-colors font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Get started 
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</div>



        
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400">
        
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Case studies</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Guides</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Help center</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">API reference</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-teal-400 transition-colors">About us</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy policy</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of service</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Cookie policy</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
            <motion.div 
              className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <motion.div 
                className="flex items-center mb-4 md:mb-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                
                <span className="text-white text-xl font-bold">TripXpay</span>
              </motion.div>
              <div className="text-sm">
                © 2025 TripXpay. All rights reserved.
              </div>
              
            </motion.div>
            
          </div>
          <div className="relative w-full h-full pointer-events-none scale-[-1]">
  <Aurora
    colorStops={["#00F5A0", "#00D9F5", "#4DBF64"]}
    blend={0.8}
    amplitude={1.2}
    speed={1.2}
  />
  
</div>


        </footer>
        
      </div>
      
      {/* Add global CSS for animations */}
      <style jsx global>{`
        @keyframes wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 4s ease infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
      
    </div>
    
  );
}