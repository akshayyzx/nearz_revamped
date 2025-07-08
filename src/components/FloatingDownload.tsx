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
      <div className="bg-white rounded-2xl shadow-2xl pt-5 border  hover:shadow-3xl hover:scale-110 transition-all duration-300 cursor-pointer">
        <div className="text-center">
          <div className="w-[280px] h-36 mx-auto rounded-xl flex items-center justify-center overflow-hidden pl-2 pr-2">
            <img
              src="/NearzQR.png"
              alt="QR Code"
              className="w-[400px] h-[500px] object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-base font-semibold text-gray-900">Scan to Download</h3>
        </div>
      </div>
    </div>
  );
};

export default FloatingDownload;