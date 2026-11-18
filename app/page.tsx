"use client"; // Obligatoire pour le compte à rebours

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  // --- CONFIGURATION DU COMPTE À REBOURS ---
  // Changez cette date pour la date de votre lancement (Format: "AAAA-MM-JJTHH:MM:SS")
  const targetDate = new Date("2026-12-31T23:59:59").getTime(); 

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Vos images (j'ai gardé vos noms exacts : page1, page2, etc.)
  const pages = [
    "/plaquette/page1.png",
    "/plaquette/page2.png",
    "/plaquette/page3.png",
    "/plaquette/page4.png",
    "/plaquette/page5.png",
    "/plaquette/page6.png"
  ];

  return (
    <main style={{ backgroundColor: '#071221', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* BANDEAU ORANGE FIXE */}
      <div style={{
        backgroundColor: '#f59e0b', 
        color: '#0a192f', 
        textAlign: 'center',
        padding: '15px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        position: 'sticky', 
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}>
        🚧 Site en cours de construction - Revenez bientôt ! 🚧
      </div>

      {/* SECTION ACCROCHE + COMPTE À REBOURS */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Notre nouveau site arrive bientôt.
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px' }}>
          Nous préparons une expérience digitale à la hauteur de vos besoins en infrastructures et réseaux. Préparez-vous !
        </p>

        {/* COMPTE À REBOURS */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} style={{
              backgroundColor: '#1e293b',
              padding: '15px 20px',
              borderRadius: '10px',
              minWidth: '80px',
              border: '1px solid #334155'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>
                {value}
              </div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8' }}>
                {unit === 'days' ? 'Jours' : unit === 'hours' ? 'Heures' : unit === 'minutes' ? 'Min' : 'Sec'}
              </div>
            </div>
          ))}
        </div>       
      </div>

      {/* CONTENEUR DES PAGES DE LA PLAQUETTE */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px',
        paddingTop: '20px'
      }}>
        {pages.map((imageSrc, index) => (
          <div key={index} style={{
            position: 'relative',
            width: '90%',
            maxWidth: '1000px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <Image 
              src={imageSrc} 
              alt={`Plaquette SAVE IT - Page ${index + 1}`} 
              width={1000} 
              height={1414}
              priority={index === 0}
              className="w-full h-auto max-w-full"
              style={{ aspectRatio: '1000 / 1414' }}
            />
          </div>
        ))}
      </div>

      {/* PIED DE PAGE */}
      <div style={{ textAlign: 'center', marginTop: '80px', color: '#cbd5e1', fontSize: '0.9rem', paddingBottom: '40px' }}>
        <p>© 2024 SAVE IT Top Trends. Tous droits réservés.</p>
        <p style={{ marginTop: '10px' }}>
          Pour toute demande : <span style={{ color: '#f59e0b' }}>support@saveitci.net</span>
        </p>
      </div>

    </main>
  );
}