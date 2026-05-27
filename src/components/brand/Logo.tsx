interface Props {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export function BrandLogo({ variant = 'light', size = 'md' }: Props) {
  const textColor = variant === 'dark' ? '#FFFFFF' : '#0A0F1E'
  const accentColor = '#1E88E5'
  const sizes = { sm: 'text-xl', md: 'text-2xl', lg: 'text-4xl' }

  return (
    <div className={`flex items-baseline gap-1.5 font-semibold ${sizes[size]}`}>
      <span style={{ color: accentColor }} className="font-bold tracking-tight">
        Voe
      </span>
      <span style={{ color: textColor }} className="font-normal text-[0.55em] leading-tight">
        sem
        <br />
        problemas
      </span>
    </div>
  )
}
