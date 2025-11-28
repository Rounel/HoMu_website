import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'surface' | 'dark';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'default',
}) => {
  const backgroundStyles = {
    default: 'bg-background',
    surface: 'bg-surface',
    dark: 'bg-text text-surface',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
