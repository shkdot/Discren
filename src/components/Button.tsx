import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'white';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center min-h-[50px] px-6 rounded-full font-extrabold text-[14px] transition-all duration-200 border border-[#181715] select-none active:scale-[0.98]";

  let variantStyles = "";

  switch (variant) {
    case 'primary':
      variantStyles = "bg-[#1b1a18] text-white hover:bg-[#2c2a27] border-[#1b1a18]";
      break;
    case 'secondary':
      variantStyles = "bg-transparent text-[#181715] hover:bg-[#e9e3d7] border-[#181715]";
      break;
    case 'accent':
      variantStyles = "bg-[#c85d2f] text-white hover:bg-[#9e4522] border-[#c85d2f]";
      break;
    case 'white':
      variantStyles = "bg-white text-[#1b1a18] hover:bg-[#f4f0e8] border-white";
      break;
    default:
      variantStyles = "bg-[#1b1a18] text-white border-[#1b1a18]";
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
