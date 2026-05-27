import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Voe sem Problemas — Advocacia especializada em direitos do passageiro aéreo'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0F1E33 0%, #1565C0 100%)',
        }}
      >
        {/* Logo wordmark */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 32 }}>
          <span style={{ color: '#1E88E5', fontSize: 72, fontWeight: 700 }}>Voe</span>
          <span style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 300 }}>sem problemas</span>
        </div>

        {/* Tagline */}
        <p style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 500, lineHeight: 1.1, margin: 0, maxWidth: 800 }}>
          O voo atrasou. A justiça não precisa.
        </p>

        {/* Sub */}
        <p style={{ color: '#B5D4F4', fontSize: 24, marginTop: 24, margin: '24px 0 0 0' }}>
          Análise gratuita em 24h · Você só paga se ganhar
        </p>

        {/* OAB badge */}
        <div
          style={{
            marginTop: 48,
            backgroundColor: 'rgba(255,255,255,0.12)',
            borderRadius: 8,
            padding: '8px 20px',
            color: '#B5D4F4',
            fontSize: 16,
          }}
        >
          OAB/SC 53.583 · OAB/SP 505.951
        </div>
      </div>
    ),
    { ...size },
  )
}
