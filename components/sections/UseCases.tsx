import React from 'react';
import { Card, Section, Button } from '@/components/ui';

const useCases = [
  {
    icon: '👤',
    title: 'Pour les consommateurs',
    description: 'Payez moins, trouvez plus vite, évitez les mauvaises surprises.',
    tagline: 'Votre compagnon d\'achat intelligent.',
    benefits: [
      'Économies garanties sur chaque achat',
      'Recherche ultra-rapide',
      'Comparaison instantanée',
    ],
  },
  {
    icon: '🛍️',
    title: 'Pour les commerçants',
    description: 'Étude de marché locale, analyse des prix, tendances, marge optimale.',
    tagline: 'Votre dashboard stratégique.',
    benefits: [
      'Analyse concurrentielle',
      'Optimisation des prix',
      'Détection des tendances',
    ],
  },
  {
    icon: '🎓',
    title: 'Pour les étudiants',
    description: 'Trouvez toujours l\'option la plus économique : matériel, électronique, fournitures…',
    tagline: 'Des économies, tous les jours.',
    benefits: [
      'Budget maîtrisé',
      'Meilleures offres étudiantes',
      'Alertes prix personnalisées',
    ],
  },
  {
    icon: '📦',
    title: 'Pour les revendeurs / dropshippers',
    description: 'Suivi des prix, produits gagnants, plateformes les plus rentables.',
    tagline: 'Votre radar pour le ROI.',
    benefits: [
      'Identification produits rentables',
      'Surveillance concurrence',
      'Analyse marges en temps réel',
    ],
  },
];

export const UseCases: React.FC = () => {
  return (
    <Section id="use-cases" background="surface">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
          Pour qui est conçue HoMu ?
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Une solution adaptée à chaque profil
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {useCases.map((useCase, index) => (
          <Card key={index} hover className="flex flex-col h-full">
            {/* Icon */}
            <div className="text-5xl mb-4">{useCase.icon}</div>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold text-text mb-3">
              {useCase.title}
            </h3>

            <p className="text-text-muted mb-4">
              {useCase.description}
            </p>

            {/* Tagline */}
            <div className="mb-6 px-4 py-2 bg-primary-light rounded-lg">
              <p className="text-primary font-semibold text-center">
                {useCase.tagline}
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-2 mb-6 flex-grow">
              {useCase.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="outline" size="sm" className="w-full">
              Découvrir
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
};
