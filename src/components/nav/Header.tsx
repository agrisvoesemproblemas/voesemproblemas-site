'use client'

import Link from 'next/link'
import { Menu, MessageCircle } from 'lucide-react'
import { BrandLogo } from '@/components/brand/Logo'
import { whatsappLink } from '@/lib/wa'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { href: '#casos', label: 'Casos' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#faq', label: 'Dúvidas' },
]

const WA_MSG = 'Olá Dra. Agrislaine, vi o site da Voe sem Problemas e gostaria de uma análise do meu caso.'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-[8px] border-b border-[#E5E7EB]">
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-10">
        {/* Logo */}
        <Link href="/" aria-label="Voe sem Problemas — início">
          <BrandLogo size="sm" variant="light" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-[#525252] hover:text-[#1E88E5] transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <a
            href={whatsappLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#25D366] px-4 py-2.5 text-[13px] font-medium text-white hover:bg-[#1FB955] transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={whatsappLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="flex items-center justify-center w-9 h-9 rounded-full text-[#25D366] hover:bg-[#F0FDF4] transition-colors"
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
