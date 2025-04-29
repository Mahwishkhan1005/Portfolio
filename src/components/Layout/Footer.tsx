import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold">
              <span className="text-blue-500">M</span>K
            </div>
          </div>
          
          <div className="flex items-center text-gray-400">
            <span>© {currentYear} Mahwish Khan. All rights reserved.</span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-500 fill-current" />
              <span>& React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;