import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star, Users, Calendar, Award } from "lucide-react";
import salon1 from "/1.jpg";
import salon2 from "/2.jpg";
import salon3 from "/3.jpg";
import salon4 from "/4.jpg";
import salon5 from "/5.jpg";
import salon6 from "/6.jpg";
import salon7 from "/7.jpg";

const images = [salon1, salon2, salon3, salon4, salon5, salon6, salon7];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const stats = [
    { number: "250+", label: "Salons Onboarded", icon: Award },
    { number: "5,000+", label: "Customers", icon: Users },
    { number: "75,000+", label: "Bookings Made", icon: Calendar }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="pt-24 pb-16 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Salon ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-85' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto text-center relative z-20">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              50% OFF
            </span>
            <br />
            <span className="text-white">on First Booking</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover, book, and pamper yourself with premium salon services — all through <strong className='text-[#F25435]'>NEARZ</strong> .
            Let our smart AI match you with the best salons nearby, and enjoy exclusive deals with a seamless booking experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">

            {/* App Store Button */}
            <button
              onClick={() => window.open('https://apps.apple.com/in/app/nearz/id1549902743', '_blank')}
              className="bg-black hover:scale-105 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px]"
            >
              <div className="flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs opacity-75">Download on the</div>
                <div className="text-lg font-semibold -mt-1">App Store</div>
              </div>
            </button>

            {/* Google Play Button */}
            <button
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.dazzleapp&pcampaignid=web_share', '_blank')}
              className="bg-black hover:bg-scale-105 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px]"
            >
              <div className="flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs opacity-75">GET IT ON</div>
                <div className="text-lg font-semibold -mt-1">Google Play</div>
              </div>
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-300 mb-12">
            {/* <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div> */}
            {/* <span>4.8/5 rating</span> */}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;