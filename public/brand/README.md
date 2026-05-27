# Brand Assets — Voe sem Problemas

Esta pasta contém os assets oficiais da marca.

## Arquivos esperados (a serem fornecidos pelo Jonatas):

- `logo-full-light.png` — Logo completo "Voe + plane + sem problemas"
                          Cor azul + texto preto. Para fundos claros.
- `logo-full-dark.png`  — Mesmo logo com wordmark branco. Para fundos escuros.
- `logo-icon.png`       — Só o símbolo (V + avião). Para favicon, social share, mobile compact.
- `favicon-32.png`      — Versão 32x32 do ícone para favicon.
- `favicon-180.png`     — Versão 180x180 para apple-touch-icon.

## Como substituir o componente CSS

Quando os PNGs chegarem, abra `src/components/brand/Logo.tsx` e substitua o
retorno do componente por:

```tsx
import Image from 'next/image'

export function BrandLogo({ variant = 'light', size = 'md' }: Props) {
  const src = variant === 'dark' ? '/brand/logo-full-dark.png' : '/brand/logo-full-light.png'
  const heights = { sm: 28, md: 36, lg: 52 }
  return <Image src={src} alt="Voe sem Problemas" height={heights[size]} width={heights[size] * 4} priority />
}
```
