import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, Sun, Moon, MapPin, Phone, Clock, Star,
  Utensils, ChefHat, Car, Play, ArrowRight,
  Instagram, Facebook, Twitter
} from 'lucide-react';

const signatureDishes = [
  {
    name: "Paneer Butter Masala",
    description: "Rich and creamy cashew-tomato curry with fresh paneer cubes.",
    price: "₹320",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80"
  },
  {
    name: "Stuffed Paratha",
    description: "Crispy, flaky parathas stuffed with spiced potatoes and herbs.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80"
  },
  {
    name: "Mix Veg Manchurian",
    description: "Indo-Chinese style vegetable dumplings tossed in a spicy, tangy sauce.",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80"
  },
  {
    name: "Veg Noodles",
    description: "Wok-tossed noodles with fresh crunchy vegetables and soy sauce.",
    price: "₹200",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80"
  },
  {
    name: "Gulab Jamun",
    description: "Soft, melt-in-your-mouth milk dumplings soaked in cardamom sugar syrup.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93cb8?auto=format&fit=crop&q=80"
  },
  {
    name: "Cold Coffee",
    description: "Thick, blended iced coffee topped with a generous scoop of vanilla ice cream.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80"
  }
];

const reviews = [
  {
    author: "Rahul S.",
    text: "Best North Indian food in Sasaram! The ambiance is truly royal and welcoming.",
    rating: 5
  },
  {
    author: "Priya M.",
    text: "Paneer Butter Masala was amazing. Perfectly balanced spices and very creamy.",
    rating: 5
  },
  {
    author: "Vikash K.",
    text: "Family-friendly atmosphere and polite staff. Great place for weekend dinners.",
    rating: 4
  }
];

const interiorImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80",
];

const carouselImages = [
  "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568a70950?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1599487405232-a50d4eb0ac31?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1589302168068-964664d93cb8?auto=format&fit=crop&q=80",
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-300">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="font-serif text-2xl font-bold tracking-wider text-amber-600 dark:text-amber-500 uppercase">
                Haveli Restaurant
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="hover:text-amber-600 dark:hover:text-amber-500 font-medium transition-colors">Menu</a>
              <a href="#attraction" className="hover:text-amber-600 dark:hover:text-amber-500 font-medium transition-colors">Gallery</a>
              <a href="#reviews" className="hover:text-amber-600 dark:hover:text-amber-500 font-medium transition-colors">Reviews</a>
              <a href="#location" className="hover:text-amber-600 dark:hover:text-amber-500 font-medium transition-colors">Location</a>
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
              >
                {isDarkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-neutral-600" />}
              </button>

              <a 
                href="#order"
                className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-amber-600/30"
              >
                Reserve Table
              </a>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2">
                {isDarkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} /> }
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800"
            >
              <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
                <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg">Menu</a>
                <a href="#attraction" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg">Gallery</a>
                <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg">Reviews</a>
                <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg">Location</a>
                <a href="#order" onClick={() => setIsMobileMenuOpen(false)} className="inline-block mt-4 text-center py-3 bg-amber-600 text-white rounded-lg font-medium w-full">
                  Reserve Table
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6 block">
              Welcome to Haveli Restaurant
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Experience Royal <br />
              <span className="text-amber-500">North Indian</span> Dining
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light">
              From rich Paneer Butter Masala to freshly baked Parathas, every dish is crafted to satisfy your cravings.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-all transform hover:scale-105"
              >
                View Menu
              </a>
              <a 
                href="#order"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-neutral-950 text-white rounded-full font-medium transition-all"
              >
                Reserve Table
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Steam Animation / Decorative Element */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent rounded-full"></div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-stone-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Utensils, title: "Authentic North Indian Cuisine", desc: "Traditional recipes and spices." },
              { icon: ChefHat, title: "Expert Chefs", desc: "Years of culinary mastery." },
              { icon: Car, title: "Free Parking", desc: "Ample space for your family." },
              { icon: Star, title: "Rated 4.4 / 5", desc: "By 291 happy guests." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-neutral-950 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 text-center group hover:border-amber-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-amber-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 font-serif">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section id="menu" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 dark:text-amber-500 font-medium tracking-widest uppercase text-sm">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Signature Dishes</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] dark:hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-serif">{dish.name}</h3>
                  <span className="text-amber-600 dark:text-amber-500 font-bold whitespace-nowrap ml-4">{dish.price}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Special Attraction */}
      <section id="attraction" className="py-24 bg-neutral-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'#ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            One Look Is Enough <br/> <span className="text-amber-500">To Make You Hungry</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Explore the rich textures and vibrant colors of our authentic North Indian preparations.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 pb-12 scrollbar-hide no-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {carouselImages.map((img, idx) => (
            <motion.div 
              key={idx}
              className="min-w-[85vw] sm:min-w-[400px] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden snap-center shrink-0 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <img src={img} alt="Food showcase" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-neutral-900/20 hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-24 bg-stone-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-4xl font-serif font-bold mb-4">What Our Guests Say</h2>
              <p className="text-neutral-600 dark:text-neutral-400">Join 291+ happy customers who have dined with us.</p>
            </div>
            <div className="flex flex-col items-center md:items-end bg-white dark:bg-neutral-950 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
              <div className="text-5xl font-bold text-amber-600 dark:text-amber-500 mb-2">4.4</div>
              <div className="flex text-amber-500 mb-1">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star size={20} className="text-neutral-300 dark:text-neutral-700" />
              </div>
              <span className="text-sm text-neutral-500 font-medium">Based on 291 Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-neutral-950 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 relative"
              >
                <div className="text-6xl text-amber-500/20 absolute top-4 right-6 font-serif">"</div>
                <div className="flex text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6 italic relative z-10 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="font-bold font-serif">{review.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Showcase */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Ambiance</h2>
             <p className="text-lg text-neutral-600 dark:text-neutral-400">
               Comfortable seating, warm lighting, and royal hospitality perfect for family dinners, celebrations, and special occasions.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {interiorImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden ${idx === 0 ? 'md:col-span-2 md:row-span-2 h-[300px] md:h-[616px]' : 'h-[300px]'}`}
              >
                <img src={img} alt="Restaurant Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Ordering CTA */}
      <section id="order" className="py-20 bg-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80')] mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Order Your Favorite Food Now</h2>
          <p className="text-amber-100 text-lg mb-10">Enjoy the royal flavors of Haveli Restaurant from the comfort of your home, or book a table in advance.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-amber-700 rounded-full font-bold text-lg hover:bg-neutral-100 transition-colors shadow-xl flex items-center justify-center gap-2">
              <Utensils size={20} /> Order Online
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 text-white rounded-full font-bold text-lg hover:bg-black transition-colors shadow-xl flex items-center justify-center gap-2">
              <Phone size={20} /> Call Restaurant
            </button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 bg-stone-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Visit Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-950 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-neutral-100 dark:border-neutral-800 text-amber-600 dark:text-amber-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Address</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">Hotel BNS International,<br/>Grand Trunk Road,<br/>Sasaram, Bihar 821115</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-950 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-neutral-100 dark:border-neutral-800 text-amber-600 dark:text-amber-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Contact</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">+91 99344 81025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-950 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-neutral-100 dark:border-neutral-800 text-amber-600 dark:text-amber-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Hours</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">Open Daily<br/>11:00 AM - 11:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                 <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                    Get Directions <ArrowRight size={18} />
                 </button>
              </div>
            </div>

            <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-800 relative">
              {/* Fallback simple map embed if user doesn't provide API key - standard iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.114389920807!2d84.015!3d24.945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398db189a1c1d8af%3A0xcfabcde123456!2sHotel%20BNS%20International!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90 dark:opacity-70 dark:invert"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-center text-neutral-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-amber-500 font-serif text-2xl font-bold tracking-wider mb-6 uppercase">Haveli Restaurant</div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={24} /></a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm mb-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>

          <p className="text-sm text-neutral-600">&copy; {new Date().getFullYear()} Haveli Restaurant. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
