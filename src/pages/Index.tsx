import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Users, Calendar, Heart, Shield, Award, Download, Smartphone } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const salonBackgrounds = [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=1080&fit=crop", 
    "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=1920&h=1080&fit=crop"
  ];

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

  const testimonials = [
    {
      name: "Priya Singh",
      location: "Mumbai",
      rating: 5,
      text: "Nearz-AI made booking so easy! I found the perfect salon near me and got 40% off. The AI recommendations are spot on!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Ravi Kumar",
      location: "Delhi", 
      rating: 5,
      text: "Amazing app! The AI suggestions helped me discover new services. Booking was seamless and the salon quality was excellent.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Anita Sharma",
      location: "Bangalore",
      rating: 5,
      text: "Love the convenience! No more waiting in queues. The app's AI finds exactly what I need based on my preferences.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const partners = [
    { name: "Naturals", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "VLCC", logo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=120&h=60&fit=crop" },
    { name: "Lakme", logo: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=120&h=60&fit=crop" },
    { name: "Bodycraft", logo: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=120&h=60&fit=crop" },
    { name: "Enrich", logo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=120&h=60&fit=crop" },
    { name: "Glow", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=60&fit=crop" }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "1,000+", label: "Partner Salons", icon: Award },
    { number: "75,000+", label: "Bookings Made", icon: Calendar },
    { number: "4.8/5", label: "App Rating", icon: Star }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % phoneScreens.length);
    }, 4000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(slideInterval);
      clearInterval(testimonialInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % phoneScreens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + phoneScreens.length) % phoneScreens.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-orange-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#F25435] to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#F25435] to-red-600 bg-clip-text text-transparent">
                Nearz-AI
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-[#F25435] transition-colors">Home</button>
              <button onClick={() => scrollToSection('app-showcase')} className="text-gray-700 hover:text-[#F25435] transition-colors">App</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#F25435] transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-[#F25435] transition-colors">Partners</button>
              <Button className="bg-gradient-to-r from-[#F25435] to-red-500 hover:from-[#F25435]/90 hover:to-red-500/90 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                BLOGS
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Floating Download Widget - Desktop Only */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 rounded-xl flex items-center justify-center">
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

      {/* Hero Section */}
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

      {/* App Showcase */}
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

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who love using Nearz-AI
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-100 shadow-xl">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 mb-8 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xl font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-orange-500' : 'bg-orange-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Salons */}
      <section id="partners" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by 1000+ Premium Salons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with the best salons, spas, and beauty centers across the country
            </p>
          </div>
          
          <div className="relative">
            <div className="flex animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 w-32 h-16 bg-gray-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F25435] to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-[#F25435] to-red-400 bg-clip-text text-transparent">
                  Nearz-AI
                </span>
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                Revolutionizing the beauty industry with AI-powered salon booking. 
                Discover, book, and enjoy premium beauty services effortlessly.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">i</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Partner With Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Nearz-AI. All rights reserved. Made with ❤️ for beauty enthusiasts.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
