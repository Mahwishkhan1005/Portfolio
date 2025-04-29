import { motion } from 'framer-motion';
import { Code, CalendarDays, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
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
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center p-6">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Code size={32} className="text-blue-600" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <CalendarDays size={16} className="mr-1" />
          <span>Completed on {project.completionDate}</span>
        </div>
        
        <p className="text-gray-600 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {project.link && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View Project <ExternalLink size={16} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;