"use client";

import Image from 'next/image';

export default function Home() {
  
  // --- CONFIGURATION DE VOS DEUX PLAQUETTES ---
  const plaquettes = [
    {
      id: 'institutionnelle',
      titre: 'Plaquette Institutionnelle',
      image: '/plaquette/institutionnelle.png',
      pdf: '/plaquette/SAVE_IT_Plaquette_Institutionnelle.pdf'
    },
    {
      id: 'infra',
      titre: 'Plaquette Infrastructures',
      image: '/plaquette/infrastructurelle.png',
      pdf: '/plaquette/SAVE_IT_Plaquette_Infrastructurelle.pdf'
    }
  ];

  return (
    <main style={{ backgroundColor: '#071221', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* BANDEAU ORANGE FIXE */}
      <div style={{
        backgroundColor: '#f59e0b', color: '#0a192f', textAlign: 'center',
        padding: '15px', fontSize: '1.1rem', fontWeight: 'bold',
        position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}>
        🚧 Site en cours de construction - Revenez bientôt ! 🚧
      </div>

      {/* SECTION ACCROCHE */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '80px 20px 40px 20px', textAlign: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Notre nouveau site arrive bientôt.
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '20px', maxWidth: '700px' }}>
          Nous préparons une expérience à la hauteur de vos besoins en transformation digitale (ingénierie et infrastructures). 
        </p>
        <p style={{ color: '#f59e0b', fontSize: '1.2rem', fontWeight: 'bold' }}>
          En attendant, découvrez nos solutions en téléchargeant nos plaquettes ci-dessous.
        </p>
      </div>

      {/* SECTION DES DEUX PLAQUETTES (COTE A COTE) */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {plaquettes.map((item) => (
          <div key={item.id} style={{
            flex: '1 1 400px',
            maxWidth: '500px',
            backgroundColor: '#1e293b',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Image de garde */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1000 / 1414' }}>
              <Image 
                src={item.image} 
                alt={item.titre}
                fill
                priority // Optimisation chargement
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Zone de texte et bouton */}
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>
                {item.titre}
              </h2>
              <a 
                href={item.pdf}
                download
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f59e0b',
                  color: '#0a192f',
                  padding: '12px 30px',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                📥 Télécharger le PDF
              </a>
            </div>
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