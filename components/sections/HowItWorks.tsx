import React from 'react';
import { Card, Section } from '@/components/ui';

const steps = [
  {
    number: '01',
    title: 'Importez votre image, vidéo ou saisissez un texte',
    description: 'Pas besoin de connaître le nom exact : HoMu reconnaît l\'objet automatiquement.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'HoMu scanne toutes les plateformes en quelques secondes',
    description: 'Analyse intelligente, détection des meilleures offres, filtres avancés.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Vous obtenez le meilleur prix — et bien plus',
    description: 'Comparaisons détaillées, disponibilité locale, historiques, tendances.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" background="surface">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
          Comment fonctionne HoMu ?
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Résultat : vous économisez du temps, de l'argent et vous achetez au meilleur moment.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="text-center h-full" hover>
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-glow">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary-light text-primary mb-6 mx-auto">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text mb-4">
                {step.title}
              </h3>

              <p className="text-text-muted leading-relaxed">
                {step.description}
              </p>
            </Card>

            {/* Connector Arrow (not on last item) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full z-10">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
