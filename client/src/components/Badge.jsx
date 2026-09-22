import React from 'react';

export const Badge = ({ 
  children, 
  variant = 'neutral', 
  icon: Icon,
  className = '' 
}) => {
  const variantStyles = {
    neutral: 'bg-white/5 text-slate-400 border-white/10',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    danger: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${variantStyles[variant] || variantStyles.neutral} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};
