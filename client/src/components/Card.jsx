import React from 'react';

export const Card = ({ 
  children, 
  className = '', 
  hoverable = true,
  glow = false,
  ...props 
}) => {
  return (
    <div
      className={`
        bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl 
        ${hoverable ? 'hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300' : ''}
        ${glow ? 'shadow-indigo-500/10 shadow-2xl' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
