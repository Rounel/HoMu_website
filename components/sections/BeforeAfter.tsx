import React from 'react';
import { Card, Section } from '@/components/ui';

const beforeItems = [
  '10 onglets ouverts',
  'Des prix flous et différents partout',
  'Des heures de recherche',
  'Vous ratez les meilleures offres',
  'Aucune visibilité sur les prix locaux',
];

const afterItems = [
  '1 scan',
  'Meilleure offre instantanée',
  'Analyse multi-plateformes fiable',
  'Economies réelles sur chaque achat',
  'Disponibilité locale immédiate',
];

export const BeforeAfter: React.FC = () => {
  return (
    <Section id="before-after">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
          Pourquoi choisir HoMu ?
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Découvrez la différence avant et après HoMu
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Before */}
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-error"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-error"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text">Avant HoMu</h3>
          </div>

          <ul className="space-y-4">
            {beforeItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-error flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* After */}
        <Card className="relative overflow-hidden border-2 border-primary shadow-glow">
          <div className="absolute top-0 left-0 right-0 h-1 bg-success"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text">Avec HoMu</h3>
          </div>

          <ul className="space-y-4">
            {afterItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-success flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="text-center mt-12">
        <p className="text-2xl font-bold text-primary">
          "Avec HoMu, acheter moins cher devient simple."
        </p>
      </div>
    </Section>
  );
};
