import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/wa'

const WA_MSG = 'Olá Dra. Agrislaine, vi o site da Voe sem Problemas e gostaria de uma análise do meu caso.'

const cases = [
  { label: 'Voo atrasado', href: '#casos' },
  { label: 'Voo cancelado', href: '#casos' },
  { label: 'Bagagem extraviada', href: '#casos' },
  { label: 'Overbooking', href: '#casos' },
]

export function Footer() {
  return (
    <footer
      className="px-4 sm:px-10 py-7"
      style={{ backgroundColor: '#0F1E33' }}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">

        {/* Col 1: identity */}
        <div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="font-medium text-[#1E88E5]" style={{ fontSize: 16 }}>Voe</span>
            <span className="text-white" style={{ fontSize: 11 }}>sem problemas</span>
          </div>
          <p className="font-mono text-[11px] text-[#B5D4F4]">
            OAB/SC 53.583 · OAB/SP 505.951 · Paulínia/SP
          </p>
          <p className="text-[11px] text-[#B5D4F4] mt-1">
            © 2026 Voe sem Problemas ·{' '}
            <Link href="#lgpd" className="hover:text-white transition-colors">LGPD</Link>
            {' '}·{' '}
            <Link href="#termos" className="hover:text-white transition-colors">Termos</Link>
          </p>
        </div>

        {/* Col 2: cases */}
        <div>
          <p className="text-[11px] text-[#B5D4F4] tracking-[0.08em] mb-2 uppercase">Casos</p>
          <div className="flex flex-col gap-1">
            {cases.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="text-[13px] text-white hover:text-[#B5D4F4] transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: contact */}
        <div>
          <p className="text-[11px] text-[#B5D4F4] tracking-[0.08em] mb-2 uppercase">
            Fale com a Dra.
          </p>
          <a
            href={whatsappLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#25D366] px-3.5 py-2.5 text-[13px] font-medium text-white hover:bg-[#1FB955] transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
          <p className="text-[12px] text-[#B5D4F4] mt-2">agriss.cc@gmail.com</p>
        </div>

      </div>
    </footer>
  )
}
