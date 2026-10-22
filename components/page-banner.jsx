'use client';

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
    <section className={`page-hero ${className}`} style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '64px 24px 72px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      color: '#ffffff'
    }}>
      {/* Real Background Video with Professional High-Contrast Contrast Overlay */}
      {videoSrc && (
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
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
              opacity: 0.45,
              filter: 'saturate(1.2)'
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Executive Dark Overlay for 100% Text Legibility */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.55) 50%, rgba(15, 23, 42, 0.85) 100%)'
          }} />
        </div>
      )}

      {/* Clean Banner Content Directly Over Video — No Bulky Glass Boxes */}
      <div className="page-width" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '920px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {eyebrow && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.2)',
            border: '1px solid rgba(165, 180, 252, 0.3)',
            color: '#c7d2fe',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            marginBottom: '18px'
          }}>
            <span style={{ color: '#818cf8' }}>✦</span>
            <span>{eyebrow}</span>
          </div>
        )}

        <h1 style={{
          fontSize: 'clamp(30px, 4.5vw, 48px)',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.18,
          letterSpacing: '-0.02em',
          margin: '0 0 16px',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          {title}
        </h1>

        {description && (
          <p style={{
            fontSize: 'clamp(15px, 2vw, 17px)',
            color: '#cbd5e1',
            lineHeight: 1.65,
            maxWidth: '740px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
