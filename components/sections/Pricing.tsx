import React from 'react';
import { Card, Section, Button, Badge } from '@/components/ui';

const plans = [
  {
    name: 'Standard',
    subtitle: 'Gratuit',
    price: '0€',
    period: 'toujours',
    description: 'Idéal pour découvrir HoMu',
    features: [
      'Recherche par image & texte',
      'Comparaison basique',
      'Quelques plateformes',
      '3 alertes prix',
    ],
    cta: 'Commencer gratuitement',
    variant: 'secondary' as const,
    popular: false,
  },
  {
    name: 'Premium',
    subtitle: 'Le meilleur choix',
    price: '9.99€',
    originalPrice: '16.99€',
    period: 'par mois',
    description: 'Pour ceux qui veulent maximiser leurs économies',
    features: [
      'Toutes les plateformes connectées',
      'Alertes prix illimitées',
      'Suivi intelligent en temps réel',
      'Disponibilité locale',
      'Analyse de marché',
      'Support prioritaire',
    ],
    cta: 'Passer à Premium',
    variant: 'primary' as const,
    popular: true,
    discount: '-40%',
  },
  {
    name: 'Business',
    subtitle: 'Pour commerçants & pros',
    price: 'Sur devis',
    period: '',
    description: 'Solution professionnelle complète',
    features: [
      'Analyse de marché locale',
      'Tableaux avancés',
      'Monitoring catalogue produits',
      'Export Excel',
      'API intégration',
      'Support dédié',
    ],
    cta: 'Parler avec un conseiller',
    variant: 'outline' as const,
    popular: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" background="dark" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Plans & Tarifs HoMu
          </h2>
          <p className="text-lg text-surface/80 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge variant="primary" className="text-xs font-bold shadow-lg">
                    ⭐ PLUS POPULAIRE
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full flex flex-col relative ${
                  plan.popular ? 'border-2 border-primary shadow-glow scale-105' : ''
                }`}
                padding="lg"
              >
                {plan.discount && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-success text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {plan.discount}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-text mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-text-muted">{plan.subtitle}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-end justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-2xl text-text-muted line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl md:text-5xl font-bold text-text">
                      {plan.price}
                    </span>
                  </div>
                  {plan.period && (
                    <p className="text-text-muted mt-1">{plan.period}</p>
                  )}
                </div>

                <p className="text-center text-text-muted mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
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
                      <span className="text-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>

                {plan.popular && (
                  <p className="text-xs text-center text-text-muted mt-4">
                    Garantie satisfait ou remboursé 7 jours
                  </p>
                )}
              </Card>
            </div>
          ))}
        </div>

        <p className="text-center text-surface/70 mt-12 text-sm">
          Tous les plans incluent un essai gratuit. Annulation possible à tout moment.
        </p>
      </div>
    </Section>
  );
};
