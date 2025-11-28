'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui';

const faqs = [
  {
    question: 'Comment HoMu trouve-t-il les meilleurs prix ?',
    answer: 'HoMu utilise des scripts avancés, une IA visuelle et un moteur de comparaison multi-plateformes qui analyse automatiquement les offres en temps réel.',
  },
  {
    question: 'Est-ce que la recherche par image fonctionne sur tous les produits ?',
    answer: 'Oui. L\'application reconnaît la majorité des produits : électronique, mode, accessoires, mobilier, outils, cosmétiques, jouets…',
  },
  {
    question: 'HoMu est-il gratuit ?',
    answer: 'HoMu propose une version gratuite et un abonnement Premium pour débloquer toutes les fonctionnalités.',
  },
  {
    question: 'Les données et images sont-elles stockées ?',
    answer: 'Non. Les images sont analysées puis supprimées automatiquement. Votre vie privée est respectée.',
  },
  {
    question: 'HoMu fonctionne-t-il dans mon pays ?',
    answer: 'Oui, la comparaison s\'adapte automatiquement aux plateformes locales compatibles.',
  },
  {
    question: 'Puis-je annuler mon abonnement ?',
    answer: 'Oui, à tout moment, sans engagement.',
  },
];

const bgColors = [
  'bg-[#FFF5F5]', // Light red
  'bg-[#F0F9FF]', // Light blue
  'bg-[#F5F3FF]', // Light purple
  'bg-[#FFF7ED]', // Light orange
  'bg-[#ECFDF5]', // Light green
  'bg-[#FDF4FF]', // Light pink
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-white">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary-light rounded-full mb-4">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            ❓ FAQ
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
          Questions{' '}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Fréquentes
          </span>
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Tout ce que vous devez savoir sur HoMu
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${bgColors[index % bgColors.length]} rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 flex items-start gap-4 text-left focus:outline-none group"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sm font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Question */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-text pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
              </div>

              {/* Arrow Icon */}
              <svg
                className={`w-6 h-6 text-text/40 flex-shrink-0 transition-all duration-300 group-hover:text-primary ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-6 pl-20">
                <p className="text-text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
