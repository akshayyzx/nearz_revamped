
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Scissors } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your salon business? Contact us today and let's discuss how Nearz-AI can help you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Salon Widget */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-100 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#F25435] to-red-500 rounded-2xl flex items-center justify-center">
                    <Scissors className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Partner With Us</h3>
                    <p className="text-gray-600">Join 1000+ premium salons</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#F25435]" />
                    <span className="text-gray-700">Available in 50+ cities across India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#F25435]" />
                    <span className="text-gray-700">24/7 booking support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-[#F25435]" />
                    <span className="text-gray-700">50,000+ happy customers</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-[#F25435]/10 to-red-500/10 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Nearz-AI?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI-powered customer matching</li>
                    <li>• Seamless booking management</li>
                    <li>• Exclusive promotional opportunities</li>
                    <li>• Real-time analytics dashboard</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Side - Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-orange-100 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Callback</h3>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name</Label>
                  <Input 
                    id="fullName" 
                    placeholder="Your Name" 
                    className="mt-2 border-gray-300 focus:border-[#F25435] focus:ring-[#F25435]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    className="mt-2 border-gray-300 focus:border-[#F25435] focus:ring-[#F25435]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Your Number" 
                    className="mt-2 border-gray-300 focus:border-[#F25435] focus:ring-[#F25435]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-gray-700 font-medium">Service Required</Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-[#F25435] focus:ring-[#F25435]">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="demo">Request Demo</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your requirements..." 
                    className="mt-2 border-gray-300 focus:border-[#F25435] focus:ring-[#F25435] min-h-[100px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-[#F25435] to-red-500 hover:from-[#F25435]/90 hover:to-red-500/90 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
