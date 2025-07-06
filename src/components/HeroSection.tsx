
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star, Users, Calendar, Award } from "lucide-react";

const HeroSection = () => {
  const salonBackgrounds = [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=1080&fit=crop", 
    "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=1920&h=1080&fit=crop"
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "1,000+", label: "Partner Salons", icon: Award },
    { number: "75,000+", label: "Bookings Made", icon: Calendar },
    { number: "4.8/5", label: "App Rating", icon: Star }
  ];

  return (
    <section id="hero" className="pt-24 pb-16 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Slideshow */}
      <div className="hero-background">
        {salonBackgrounds.map((bg, index) => (
          <img
            key={index}
            src={bg}
            alt={`Salon background ${index + 1}`}
            className="animate-slideshow"
            style={{ 
              animationDelay: `${index * 5}s`,
              filter: 'brightness(0.3)'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#F25435] via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-white">Salon Booking</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover, book, and enjoy premium salon services with our intelligent AI recommendations. 
            Get exclusive discounts and seamless booking experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-float">
              <Smartphone className="mr-2 h-5 w-5" />
              Download on App Store
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-float">
              <Download className="mr-2 h-5 w-5" />
              Get it on Google Play
            </Button>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-300 mb-12">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span>4.8/5 rating</span>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-[#F25435]" />
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
