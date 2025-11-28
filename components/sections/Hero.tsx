'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F8F9FB] via-[#F6F7FB] to-[#EEF0FF]">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                ✨ Offre de lancement
              </span>
              <span className="text-xs text-text-muted">-40% Premium</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-[1.1] mb-6">
              Trouvez le meilleur prix avec{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                HoMu
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-xl">
              Recherche intelligente par image, vidéo ou texte. Comparez instantanément les prix sur des dizaines de plateformes — en 5 secondes.
            </p>

            {/* Email Capture Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6 max-w-xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email"
                className="flex-1 px-6 py-4 rounded-full border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
                required
              />
              <Button type="submit" size="lg" variant="primary" className="whitespace-nowrap">
                Commencer
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Gratuit à essayer</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sans engagement</span>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-text rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-surface rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-br from-primary to-primary-dark px-6 py-3 text-white text-xs flex justify-between items-center">
                    <span className="font-semibold">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="bg-gradient-to-br from-primary/10 via-surface to-secondary/5 aspect-[9/16] p-6 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-4">
                      <svg className="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-text mb-2">HoMu</p>
                      <p className="text-sm text-text-muted">Recherche Intelligente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Discount */}
              <div className="absolute -top-6 -right-6 bg-success text-white px-5 py-3 rounded-2xl shadow-lg animate-bounce">
                <p className="text-2xl font-bold">-40%</p>
                <p className="text-xs opacity-90">Promo</p>
              </div>

              {/* Floating Card - Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-border rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-sm text-text-muted mb-1">Utilisateurs</p>
                <p className="text-2xl font-bold text-text">12,300+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
