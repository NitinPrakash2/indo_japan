import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export const CustomSelect = ({ 
  value, 
  onChange, 
  options = [], 
  placeholder = 'Select an option',
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  const handleSelect = (optValue) => {
    onChange(optValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3.5 py-2.5 bg-white border text-left text-xs transition-all duration-200 flex items-center justify-between cursor-pointer rounded-none select-none ${
          isOpen 
            ? 'border-[#C83B3B] ring-1 ring-[#C83B3B]/25' 
            : 'border-black/15 hover:border-black/30'
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-[#1A1A1A] font-medium truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-[#666666] transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? 'rotate-180 text-[#C83B3B]' : ''
          }`} 
        />
      </button>

      {/* Styled Dropdown Menu with scrollable max height */}
      {isOpen && (
        <div 
          className="absolute left-0 right-0 top-full mt-1 z-50 bg-white border border-black/10 shadow-xl max-h-48 overflow-y-auto py-1 divide-y divide-black/[0.04] animate-in fade-in-50 zoom-in-98 duration-150"
          role="listbox"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`px-3.5 py-2.5 text-xs flex items-center justify-between cursor-pointer transition-colors duration-150 select-none ${
                  isSelected 
                    ? 'bg-[#C83B3B]/8 text-[#C83B3B] font-bold' 
                    : 'text-[#333333] hover:bg-[#F6F3ED] hover:text-[#C83B3B] font-medium'
                }`}
                role="option"
                aria-selected={isSelected}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#C83B3B] stroke-[2.5]" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
