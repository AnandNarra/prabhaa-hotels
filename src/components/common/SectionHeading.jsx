import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = ""
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-gold-600 mb-3 ${centered ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 md:w-10 h-0.5 bg-gradient-to-r from-transparent to-gold-400"></span>
          <span>{eyebrow}</span>
          <span className="w-6 md:w-10 h-0.5 bg-gradient-to-l from-transparent to-gold-400"></span>
        </div>
      )}

      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl font-normal leading-relaxed ${centered ? 'mx-auto' : ''} text-slate-600`}>
          {subtitle}
        </p>
      )}

      <div className={`flex items-center gap-2 mt-5 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold-300 to-gold-500"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-gold-500"></div>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-gold-300 to-gold-500"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
