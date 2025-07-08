import React, { useState } from 'react';
import { Sparkles, Eye, Heart, Zap } from 'lucide-react';

const VirtualTryOnSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Placeholder images with different aspect ratios for demo
  const images = [
    { src: '/virtualTryOn/v1.jpg', style: 'Elegant Waves' },
    { src: '/virtualTryOn/v2.jpg', style: 'Bold Layers' },
    { src: '/virtualTryOn/v3.jpg', style: 'Chic Bob' },
    { src: '/virtualTryOn/v4.jpg', style: 'Vibrant Color' },
    { src: '/virtualTryOn/v5.jpg', style: 'Modern Curls' },
    { src: '/virtualTryOn/v6.jpg', style: 'Sleek Straight' }
  ];

  const floatingIcons = [
    { Icon: Sparkles, delay: '0s' },
    { Icon: Heart, delay: '2s' },
    { Icon: Zap, delay: '4s' },
    { Icon: Eye, delay: '6s' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <div
            key={index}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 10}%`,
              animationDelay: delay,
              animationDuration: '3s'
            }}
          >
            <Icon className="w-8 h-8 text-[#F25435]" />
          </div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#F25435]/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-[#F25435] animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-[#F25435] font-semibold tracking-wide">AI-POWERED STYLING</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F25435] via-pink-500 to-purple-600 mb-6 leading-tight">
            Virtual Try-On
          </h2>
          
          <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your look instantly with our cutting-edge virtual styling technology. 
            <span className="text-[#F25435] font-semibold"> Discover, experiment, and perfect</span> your style before you commit.
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 ease-out">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F25435] via-[#F25435] to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[3px] bg-white rounded-2xl"></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl m-[3px]">
                  <img
                    src={image.src}
                    alt={`Virtual Look: ${image.style}`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{image.style}</h3>
                    <p className="text-sm opacity-90 mb-4">AI-curated style recommendation</p>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </div>
                
                {/* Floating Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r from-[#F25435] to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100'
                }`}>
                  NEW
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className={`absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-[#F25435] to-pink-500 rounded-full transition-all duration-500 ${
                hoveredIndex === index ? 'scale-150 animate-ping' : 'scale-100'
              }`}></div>
              <div className={`absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700 ${
                hoveredIndex === index ? 'scale-150 animate-bounce' : 'scale-100'
              }`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <p className="text-sm text-gray-600 mt-4 max-w-md mx-auto">
            Join thousands of users who've found their perfect style with our AI technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOnSection;