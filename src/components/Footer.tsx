import React from 'react';
import { 
  FaFacebookF, 
  FaXTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPinterestP, 
  FaMedium, 
  FaWhatsapp 
} from 'react-icons/fa6';
import logo from "../../public/logo.png"

const Footer = () => {
  const socialLinks = [
    {
      name: 'X',
      icon: FaXTwitter,
      url: 'https://x.com/Nearzsalon',
      hoverColor: 'hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/nearz-app-468120202/',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/nearz.app',
      hoverColor: 'hover:bg-pink-500'
    },
    {
      name: 'Facebook',
      icon: FaFacebookF,
      url: 'https://www.facebook.com/profile.php?id=100063966076850',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      name: 'Pinterest',
      icon: FaPinterestP,
      url: 'https://in.pinterest.com/nearzapp/',
      hoverColor: 'hover:bg-red-600'
    },
    {
      name: 'Medium',
      icon: FaMedium,
      url: 'https://medium.com/@nearz.app',
      hoverColor: 'hover:bg-zinc-800'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/919220794223',
      hoverColor: 'hover:bg-green-500'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-15 h-15 rounded-xl flex items-center justify-center">
                <img src={logo} alt="Nearz Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-3xl font-bold bg-[#F25435] to-red-400 bg-clip-text text-transparent">
                Nearz
              </span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Revolutionizing the beauty industry with AI-powered salon booking. 
              Discover, book, and enjoy premium beauty services effortlessly.
            </p>
            <div className="flex space-x-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.hoverColor} transition-colors cursor-pointer`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="text-white text-sm" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {/* <li><a href="#a" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li> */}
              {/* <li><a href="#partner" className="text-gray-300 hover:text-orange-400 transition-colors">Partner With Us</a></li> */}
              {/* <li><a href="#careers" className="text-gray-300 hover:text-orange-400 transition-colors">Careers</a></li> */}
              <li><a href="https://nearz.in/blog.html" target="_blank" className="text-gray-300 hover:text-orange-400 transition-colors">Blog</a></li>
              {/* <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Our Services</a></li> */}
              {/* <li><a href="#download" className="text-gray-300 hover:text-orange-400 transition-colors">Download App</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {/* <li><a href="#help" className="text-gray-300 hover:text-orange-400 transition-colors">Help Center</a></li> */}
              {/* <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact Us</a></li> */}
             <li><a href="https://coruscating-kheer-a59585.netlify.app/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</a></li>               
<li><a href="https://coruscating-kheer-a59585.netlify.app/tnc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">Terms of Service</a></li>
              {/* <li><a href="#faq" className="text-gray-300 hover:text-orange-400 transition-colors">FAQ</a></li> */}
              {/* <li><a href="#feedback" className="text-gray-300 hover:text-orange-400 transition-colors">Feedback</a></li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Nearz. All rights reserved. A Product of TechWits IT Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;