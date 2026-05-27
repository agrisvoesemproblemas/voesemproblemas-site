import Link from 'next/link'
import { BrandLogo } from '@/components/brand/Logo'

export function Footer() {
  return (
    <footer className="bg-[#0F1E33] text-[#FFFFFF]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + tagline */}
          <div className="space-y-4">
            <BrandLogo variant="dark" size="md" />
            <p className="text-sm text-[#B5D4F4] leading-relaxed">
              Advocacia especializada em direitos do passageiro aéreo. 100% online. Todo o Brasil.
            </p>
            <div className="text-xs text-[#B5D4F4] space-y-1">
              <p>OAB/SC 53.583</p>
              <p>OAB/SP 505.951</p>
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Serviços</h3>
            <ul className="space-y-2 text-sm text-[#B5D4F4]">
              <li><Link href="#casos" className="hover:text-white transition-colors">Voo atrasado (DLY)</Link></li>
              <li><Link href="#casos" className="hover:text-white transition-colors">Voo cancelado (CNL)</Link></li>
              <li><Link href="#casos" className="hover:text-white transition-colors">Extravio de bagagem (BAG)</Link></li>
              <li><Link href="#casos" className="hover:text-white transition-colors">Overbooking (OVB)</Link></li>
            </ul>
          </div>

          {/* Col 3: Recursos */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Recursos</h3>
            <ul className="space-y-2 text-sm text-[#B5D4F4]">
              <li><Link href="#como-funciona" className="hover:text-white transition-colors">Como funciona</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">Dúvidas frequentes</Link></li>
              <li><Link href="#calculadora" className="hover:text-white transition-colors">Calcular indenização</Link></li>
              <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre a Dra. Agrislaine</Link></li>
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Contato</h3>
            <ul className="space-y-2 text-sm text-[#B5D4F4]">
              <li>
                <a
                  href="https://wa.me/5548999687068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (48) 99968-7068 — WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:agriss.cc@gmail.com" className="hover:text-white transition-colors">
                  agriss.cc@gmail.com
                </a>
              </li>
              <li className="text-[#B5D4F4]">Paulínia/SP · atendimento Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B5D4F4]">
          <p>© 2026 Voe sem Problemas. Dra. Agrislaine Oliveira. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#lgpd" className="hover:text-white transition-colors">LGPD</Link>
            <Link href="#termos" className="hover:text-white transition-colors">Termos</Link>
            <span>Feito com Next.js + Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
