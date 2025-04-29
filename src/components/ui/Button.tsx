import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  href, 
  download,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  
  const baseClasses = "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-center";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secondary: "bg-gray-800 text-white hover:bg-gray-900 shadow-md hover:shadow-lg",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };
  
  const disabledClasses = "opacity-50 cursor-not-allowed";
  
  const buttonClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${disabled ? disabledClasses : ''}
    ${className}
  `;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={buttonClasses} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;