import React from 'react';
import { Card, Section } from '@/components/ui';

const testimonials = [
  {
    quote: "J'ai économisé 89€ sur mon dernier achat électroménager. HoMu c'est devenu obligatoire.",
    author: 'David',
    role: 'Utilisateur Premium',
    rating: 5,
  },
  {
    quote: 'En tant que commerçant, HoMu m\'aide à analyser le marché local chaque matin. Je sais exactement quoi proposer.',
    author: 'Nora',
    role: 'Boutique d\'électroménager',
    rating: 5,
  },
  {
    quote: 'La recherche par image est bluffante. Je prends une photo, j\'ai toutes les offres en 3 secondes.',
    author: 'Sacha',
    role: 'Utilisateur gratuit',
    rating: 5,
  },
];

const stats = [
  { value: '12,300+', label: 'Utilisateurs actifs' },
  { value: '4.8/5', label: 'Note moyenne' },
  { value: '500K+', label: 'Recherches effectuées' },
  { value: '45%', label: 'Économies moyennes' },
];

export const SocialProof: React.FC = () => {
  return (
    <Section id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
          Ils ont déjà adopté HoMu
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Découvrez ce que disent nos utilisateurs
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center" hover>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-text-muted font-medium">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} hover className="flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-text mb-6 flex-grow italic">
              "{testimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-lg">
                {testimonial.author[0]}
              </div>
              <div>
                <div className="font-semibold text-text">{testimonial.author}</div>
                <div className="text-sm text-text-muted">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
