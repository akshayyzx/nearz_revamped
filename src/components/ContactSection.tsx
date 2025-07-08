import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Scissors, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch('https://formspree.io/f/movwodor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) throw new Error('Submission failed');
        return response.json();
      })
      .then(() => {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      })
      .catch(() => setSubmitStatus('error'))
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 8000);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your salon business? Contact us today and let's discuss how Nearz can help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Info Card */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-100 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#F25435] to-red-500 rounded-2xl flex items-center justify-center">
                    <Scissors className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Partner With Us</h3>
                    <p className="text-gray-600">Join 250+ premium salons</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#F25435]" />
                    <span className="text-gray-700">Now Available in Gurugram</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#F25435]" />
                    <span className="text-gray-700">24/7 booking support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-[#F25435]" />
                    <span className="text-gray-700">5,000+ happy customers</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#F25435]/10 to-red-500/10 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Nearz?</h4>
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
              {submitStatus === 'error' && (
                <div className="text-red-700 bg-red-100 border border-red-200 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold">❌ Submission Failed</h4>
                  <p className="text-red-600 mt-1">Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="mt-2 border-gray-300 focus:border-[#F25435] focus:ring-[#F25435]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="mt-2 border-gray-300 focus:border-[#F25435] focus:ring-[#F25435]"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Number"
                    required
                    className="mt-2 border-gray-300 focus:border-[#F25435] focus:ring-[#F25435]"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-gray-700 font-medium">Service Required</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:border-[#F25435] focus:ring-[#F25435]"
                  >
                    <option value="">Select a service</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request Demo</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements..."
                    className="mt-2 border-gray-300 focus:border-[#F25435] focus:ring-[#F25435] min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit" 
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#F25435] to-red-500 hover:from-[#F25435]/90 hover:to-red-500/90 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                   {submitStatus === 'success' && (
                <div className="text-green-700 bg-green-100 border border-green-200 p-6 rounded-lg mb-6 flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-lg">Message Submitted Successfully!</h4>
                    <p className="text-green-600 mt-1">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;