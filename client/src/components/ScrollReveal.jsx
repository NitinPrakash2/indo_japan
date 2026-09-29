import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Premium SaaS scroll-reveal wrapper inspired by Linear, Stripe & Apple.
 * Smoothly triggers hardware-accelerated transforms when scrolled into view.
 */
export const ScrollReveal = ({
  children,
  className = '',
  variant = 'up', // 'up' | 'left' | 'right' | 'scale' | 'fade'
  delay = 0,      // Delay in ms (e.g. 100, 200, 300)
  threshold = 0.12,
  style = {},
  ...props
}) => {
  const domRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold]);

  const variantClassMap = {
    up: 'reveal-init',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
    fade: 'reveal-fade',
  };

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={domRef}
      className={`${variantClassMap[variant] || 'reveal-init'} ${
        isVisible ? 'revealed' : ''
      } ${className}`}
      style={{ ...delayStyle, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
