import React from 'react';
import { Section } from '@/components/ui';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Recherche Visuelle',
    description: 'Scannez n\'importe quel produit par image ou vidéo et trouvez-le instantanément',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Comparaison Multi-Plateformes',
    description: 'Analysez automatiquement les prix sur des dizaines de sites en quelques secondes',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Disponibilité Locale',
    description: 'Vérifiez les stocks disponibles dans les magasins près de chez vous en temps réel',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Analyse de Marché',
    description: 'Suivez les tendances et optimisez votre stratégie commerciale avec nos données',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Alertes Prix',
    description: 'Recevez des notifications automatiques dès qu\'un prix baisse ou change',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Historique des Prix',
    description: 'Consultez l\'évolution des prix pour acheter au meilleur moment',
  },
];

export const Features: React.FC = () => {
  return (
    <Section id="features" className="bg-white">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary-light rounded-full mb-4">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            ✨ Fonctionnalités
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
          Essentielles pour vos{' '}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Économies
          </span>
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Découvrez comment HoMu transforme votre façon d'acheter en ligne
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white border border-border rounded-3xl p-8 hover:shadow-glow hover:border-primary/20 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-text mb-3">
              {feature.title}
            </h3>

            <p className="text-text-muted leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
