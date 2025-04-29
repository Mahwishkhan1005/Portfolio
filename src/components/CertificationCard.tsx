import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Certification } from '../types';

interface CertificationCardProps {
  certification: Certification;
  index: number;
  isVisible: boolean;
}

const CertificationCard = ({ certification, index, isVisible }: CertificationCardProps) => {
  const staggerDelay = 0.1;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * staggerDelay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={cardVariants}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col md:flex-row"
    >
      <div className="md:w-1/4 bg-gradient-to-br from-blue-600 to-blue-800 p-6 flex items-center justify-center">
        <Award size={48} className="text-white" />
      </div>
      
      <div className="md:w-3/4 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{certification.title}</h3>
        
        <p className="text-gray-600 mb-4">{certification.issuer}</p>
        
        <p className="text-gray-500 text-sm mb-4">Issued {certification.issueDate}</p>
        
        <a 
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          View Certificate <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificationCard;