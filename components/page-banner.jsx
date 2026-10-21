'use client';

import Image from 'next/image';

export default function PageBanner({
  eyebrow,
  title,
  description,
  videoSrc,
  bgImage,
  className = '',
  children
}) {
  return (
    <section className={`page-hero ${className}`} style={{ position: 'relative', overflow: 'hidden', padding: '70px 20px 80px' }}>
      {/* Background Visual (Video or Image) - High Visibility */}
      {videoSrc ? (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: 'hidden'
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={bgImage}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.88,
              filter: 'saturate(1.25) contrast(1.1)',
              transform: 'scale(1.02)'
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Gentle edge blend so video stays vividly visible while navbar & footer connect seamlessly */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(248,250,252,0.08) 25%, rgba(248,250,252,0.08) 75%, rgba(255,255,255,0.65) 100%)'
          }} />
          <div className="banner-grid-overlay" />
        </div>
      ) : bgImage ? (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: 'hidden'
        }}>
          <Image
            src={bgImage}
            alt=""
            fill
            style={{
              objectFit: 'cover',
              opacity: 0.85,
              filter: 'saturate(1.2) contrast(1.08)'
            }}
            priority
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(248,250,252,0.08) 25%, rgba(248,250,252,0.08) 75%, rgba(255,255,255,0.65) 100%)'
          }} />
          <div className="banner-grid-overlay" />
        </div>
      ) : (
        <div className="page-hero-bg" aria-hidden="true">
          <div className="hero-glow-orb" style={{
            position: 'absolute', top: '-10%', right: '5%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(80,70,229,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none'
          }} />
          <div className="hero-glow-orb" style={{
            position: 'absolute', bottom: '-20%', left: '10%',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            filter: 'blur(50px)', pointerEvents: 'none'
          }} />
        </div>
      )}

      {/* Floating Animated Orbs */}
      <div className="section-orb section-orb-1" style={{ width: '380px', height: '380px', opacity: 0.7 }} />
      <div className="section-orb section-orb-2" style={{ width: '340px', height: '340px', opacity: 0.6 }} />

      {/* Hero Content inside Luxury Glass Card */}
      <div className="banner-glass-card">
        {eyebrow && (
          <div className="eyebrow banner-eyebrow">
            <span className="eyebrow-mark">✦</span>
            <span>{eyebrow}</span>
          </div>
        )}
        <h1 className="banner-title">
          {title}
        </h1>
        {description && (
          <p className="banner-desc">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
