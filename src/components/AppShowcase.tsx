
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Shield, Award } from "lucide-react";

const AppShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const phoneScreens = [
    {
      title: "Book Appointment",
      description: "Find and book your favorite salon instantly",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=600&fit=crop"
    },
    {
      title: "Choose Services", 
      description: "Browse through various beauty services",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=600&fit=crop"
    },
    {
      title: "Track & Pay",
      description: "Real-time tracking and secure payments",
      image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=300&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % phoneScreens.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % phoneScreens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + phoneScreens.length) % phoneScreens.length);
  };

  return (
    <section id="app-showcase" className="py-20 bg-gradient-to-r from-[#F25435] to-red-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Future of Beauty Booking
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Our AI-powered app makes finding and booking salon services effortless
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center justify-center space-x-8">
              {/* iPhone Mockup */}
              <div className="relative">
                <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10"></div>
                    <img
                      src={phoneScreens[currentSlide].image}
                      alt={phoneScreens[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {phoneScreens[currentSlide].title}
                      </h3>
                      <p className="text-white/90">
                        {phoneScreens[currentSlide].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="text-white space-y-8 max-w-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
                    <p className="text-orange-100">Get personalized salon suggestions based on your preferences and location</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
                    <p className="text-orange-100">Safe and secure payment processing with instant confirmation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Exclusive Offers</h3>
                    <p className="text-orange-100">Access special discounts and deals available only on our platform</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {phoneScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
