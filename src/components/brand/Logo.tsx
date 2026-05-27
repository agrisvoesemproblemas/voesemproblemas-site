interface Props {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const heights: Record<NonNullable<Props['size']>, number> = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 72,
}

export function BrandLogo({ variant = 'light', size = 'md' }: Props) {
  const textColor = variant === 'dark' ? '#FFFFFF' : '#0A0F1E'
  const h = heights[size]
  const wordmarkSize = h * 0.38

  return (
    <div className="flex items-center gap-2" style={{ height: h }}>
      {/* V + plane SVG approximation */}
      <svg
        viewBox="0 0 50 36"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: h, width: (h * 50) / 36 }}
        aria-hidden="true"
      >
        <path
          d="M6 6 L18 32 L26 18"
          stroke="#1565C0"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M8 4 L20 32 L42 4"
          stroke="#1E88E5"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M37 8 L46 3 L44 9 Z" fill="#1E88E5" />
      </svg>

      {/* Wordmark */}
      <div className="flex items-baseline gap-1 leading-none" style={{ fontSize: h * 0.52 }}>
        <span style={{ color: '#1E88E5' }} className="font-bold tracking-tight">
          Voe
        </span>
        <span
          style={{ color: textColor, fontSize: wordmarkSize }}
          className="font-normal leading-tight"
        >
          sem
          <br />
          problemas
        </span>
      </div>
    </div>
  )
}
