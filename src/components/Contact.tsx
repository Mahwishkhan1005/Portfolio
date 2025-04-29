import { useState, useEffect, useRef, FormEvent } from 'react';
import { Send, Mail, Linkedin, Github, Phone } from 'lucide-react';
import Button from './ui/Button';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server
    // For this demo, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent! I\'ll get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-gray-900 text-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-3 mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300 mb-1">Email</h4>
                      <a 
                        href="mailto:mahwishkhan1005@gmail.com" 
                        className="text-xl hover:text-blue-400 transition-colors"
                      >
                        mahwishkhan1005@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-3 mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300 mb-1">Phone</h4>
                      <a 
                        href="tel:+919142668648" 
                        className="text-xl hover:text-blue-400 transition-colors"
                      >
                        +91 9142668648
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-medium text-gray-300 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/mahwishkhan1005" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/Mahwishkhan1005" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
                
                {formStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                      placeholder="Hi Mahwish, I'd like to discuss..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" className="w-full">
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;