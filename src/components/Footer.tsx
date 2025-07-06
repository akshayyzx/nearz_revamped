
const Footer = () => {
  return (
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
  );
};

export default Footer;
