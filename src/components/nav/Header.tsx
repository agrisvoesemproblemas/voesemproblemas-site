'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, MessageCircle } from 'lucide-react'
import { BrandLogo } from '@/components/brand/Logo'
import { whatsappLink } from '@/lib/wa'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { href: '#casos', label: 'Casos' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#calculadora', label: 'Calculadora' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#faq', label: 'FAQ' },
]

const WA_MSG = 'Olá Dra. Agrislaine, vi o site e preciso de ajuda com um problema no voo.'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-200 bg-[#FAFAFA]/95 backdrop-blur-md ${
        scrolled ? 'border-b border-[#E5E7EB]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Left: logo + OAB chip */}
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Voe sem Problemas — início">
            <BrandLogo size="sm" variant="light" />
          </Link>
          <span className="hidden sm:inline-block rounded-full bg-[#E6F1FB] px-2.5 py-0.5 text-[11px] font-medium text-[#0C447C]">
            OAB/SC · SP
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#525252] hover:text-[#0A0F1E] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[8px] px-3.5 py-1.5 text-sm font-medium text-[#25D366] hover:bg-[#F0FDF4] border border-[#25D366]/30 transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </nav>

        {/* Mobile: WA subtle + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={whatsappLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="flex items-center justify-center rounded-full w-9 h-9 text-[#25D366] hover:bg-[#F0FDF4] transition-colors"
          >
            <MessageCircle size={20} />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menu"
                className="flex items-center justify-center w-9 h-9 rounded-md text-[#0A0F1E] hover:bg-[#F5F5F5] transition-colors"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-[#FAFAFA] pt-12">
              <nav className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-4 py-3 text-base text-[#0A0F1E] hover:bg-[#F5F5F5] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href={whatsappLink(WA_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#25D366] px-4 py-3 text-base font-medium text-white hover:bg-[#1FB955] transition-colors"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
