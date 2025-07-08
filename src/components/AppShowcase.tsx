import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Shield, Award } from "lucide-react";

const AppShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const phoneScreens = [
    {
      title: "Sign In & Get Started",
      description: "Easy login with phone number to access all salon services",
      image: "/advantage_1.png"
    },
    {
      title: "Find Nearby Salons",
      description: "Discover top-rated salons in your area with exclusive offers",
      image: "/advantage_2.png"
    },
    {
      title: "Browse Services",
      description: "Explore hair care, skin care, nail care and beauty packages",
      image: "/advantage_3.png"
    },
    {
      title: "Track Your Bookings",
      description: "View upcoming appointments and manage your booking history",
      image: "/advantage_4.png"
    },
    {
      title: "Schedule Appointments",
      description: "Pick your preferred date and time slot for salon visits",
      image: "/advantage_5.png"
    },
    {
      title: "Virtual Try-On",
      description: "Preview different hairstyles and colors before your appointment",
      image: "/advantage_6.png"
    },
    {
      title: "Explore More Salons",
      description: "Switch between male and female salons with great deals",
      image: "/advantage_7.png"
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
    <section id="app-showcase" className="py-12 md:py-20 bg-gradient-to-r from-[#F25435] to-red-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Experience the Future of Beauty Booking
          </h2>
          <p className="text-base md:text-xl text-orange-100 max-w-2xl mx-auto px-4">
            Our AI-powered app makes finding and booking salon services effortless
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center justify-center space-x-8">
              {/* Features */}
              <div className="text-white space-y-8 max-w-md mr-20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
                    <p className="text-orange-100">Get personalized salon suggestions based on your preferences and location</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
                    <p className="text-orange-100">Safe and secure payment processing with instant confirmation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Exclusive Offers</h3>
                    <p className="text-orange-100">Access special discounts and deals available only on our platform</p>
                  </div>
                </div>
              </div>
              
              {/* iPhone Mockup */}
              <div className="relative">
                <div className="w-79 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-full z-10"></div>
                    <img
                      src={phoneScreens[currentSlide].image}
                      alt={phoneScreens[currentSlide].title}
                      className="w-full h-full object-contain"
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

          {/* Mobile and Tablet Layout */}
          <div className="lg:hidden">
            {/* Phone Mockup */}
            <div className="relative flex justify-center mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </Button>
              
              <div className="w-57 h-[480px] md:w-72 md:h-[540px] bg-black rounded-[2.5rem] md:rounded-[3rem] p-1.5 md:p-2 shadow-2xl ">
                <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-1.5 md:top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 md:w-20 md:h-4 bg-black rounded-full z-10"></div>
                  <img
                    src={phoneScreens[currentSlide].image}
                    alt={phoneScreens[currentSlide].title}
                    className="w-full h-full object-contain -mt-1"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                      {phoneScreens[currentSlide].title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      {phoneScreens[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </Button>
            </div>

            {/* Features - Mobile Layout */}
            <div className="text-white space-y-6 max-w-lg mx-auto px-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">AI Recommendations</h3>
                  <p className="text-orange-100 text-sm md:text-base">Get personalized salon suggestions based on your preferences and location</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Secure Booking</h3>
                  <p className="text-orange-100 text-sm md:text-base">Safe and secure payment processing with instant confirmation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Exclusive Offers</h3>
                  <p className="text-orange-100 text-sm md:text-base">Access special discounts and deals available only on our platform</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {phoneScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
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