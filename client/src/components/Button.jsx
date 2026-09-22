import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 active:scale-[0.98]',
    secondary: 'bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 hover:border-indigo-500/40 active:scale-[0.98]',
    outline: 'border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 active:scale-[0.98]',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className={`w-4 h-4 ${disabled ? '' : ''}`} />}
      {children}
    </button>
  );
};
