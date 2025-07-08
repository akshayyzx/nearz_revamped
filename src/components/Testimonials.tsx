
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

 const testimonials = [
  {
    name: "Arjun Patel",
    date: "March 15, 2024",
    rating: 5,
    text: "Nearz completely transformed my salon experience! The AI recommendations are incredibly accurate and I saved 35% on my haircut. Highly recommended!",
  },
  {
    name: "Sneha Reddy",
    date: "June 8, 2024",
    rating: 5,
    text: "Finally, an app that understands my beauty needs! Nearz suggested the perfect spa package and the booking process was so smooth. Love it!",
  },
  {
    name: "Vikram Gupta",
    date: "August 22, 2024",
    rating: 4,
    text: "Great app with excellent AI features. Found amazing deals on grooming services. The only thing I'd improve is having more salon options in my area.",
  },
  {
    name: "Meera Joshi",
    date: "October 12, 2024",
    rating: 5,
    text: "Nearz is a game-changer! The personalized recommendations helped me discover services I never knew I needed. Booking my facial was effortless.",
  },
  {
    name: "Rohit Agarwal",
    date: "November 30, 2024",
    rating: 5,
    text: "Best salon booking app I've used! The AI suggestions are spot-on and I got 45% off my first massage. Customer service is also excellent.",
  },
  {
    name: "Kavya Nair",
    date: "January 18, 2025",
    rating: 5,
    text: "Absolutely love Nearz! The app's intelligence in understanding my preferences is remarkable. No more salon hunting - everything I need is right here.",
  },
  {
    name: "Amit Chauhan",
    date: "February 25, 2025",
    rating: 4,
    text: "Solid app with great AI recommendations. The discount offers are fantastic and booking is super convenient. Would love to see more beard grooming options.",
  },
  {
    name: "Divya Malhotra",
    date: "April 3, 2025",
    rating: 5,
    text: "Nearz has made my life so much easier! The AI perfectly matched me with salons that suit my style and budget. The bridal package recommendations were perfect!",
  },
  {
    name: "Karan Singh",
    date: "May 14, 2025",
    rating: 5,
    text: "Outstanding app! The AI suggestions introduced me to services I never considered. Got an amazing deal on a premium grooming package. Highly satisfied!",
  },
  {
    name: "Ritika Verma",
    date: "June 29, 2025",
    rating: 5,
    text: "Nearz is simply amazing! The intelligent recommendations and seamless booking experience make it my go-to app for all beauty needs. Couldn't be happier!",
  }
];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who love using Nearz
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
                  <div>
                    <div className="text-xl font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].date}
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
  );
};

export default Testimonials;
