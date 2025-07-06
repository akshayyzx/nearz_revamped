
import { useState, useEffect } from "react";

const FloatingDownload = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:block fixed bottom-8 right-8 z-50" style={{ 
      transform: `translateY(${Math.min(scrollY * 0.05, 50)}px)`,
      transition: 'transform 0.1s ease-out'
    }}>
      <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/4d089d3f-4a5e-4f86-ba99-9674b039d2ba.png" 
              alt="Download QR Code" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">Download Nearz</p>
          <p className="text-xs text-gray-600">Scan QR Code</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingDownload;
