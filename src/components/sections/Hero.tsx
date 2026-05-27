import { User } from 'lucide-react'
import { whatsappLink } from '@/lib/wa'
import { BoardingPass } from './BoardingPass'

const WA_HERO = 'Olá Dra. Agrislaine, vi o site e preciso de ajuda com um problema no voo.'

export function Hero() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left: content (60%) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* OAB eyebrow */}
            <div>
              <span className="inline-block rounded-full bg-[#E6F1FB] px-3 py-1 text-xs font-medium text-[#0C447C]">
                Advocacia especializada · OAB/SC 53.583 · OAB/SP 505.951
              </span>
            </div>

            {/* H1 editorial */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0A0F1E] leading-[1.08] tracking-[-0.02em]">
              O voo atrasou.{' '}
              <br className="hidden sm:block" />
              A justiça{' '}
              <em className="not-italic text-[#1E88E5]">não precisa.</em>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#525252] leading-relaxed max-w-lg">
              Atraso, cancelamento, extravio ou overbooking. Análise gratuita em 24h.{' '}
              <strong className="font-medium text-[#0A0F1E]">
                Você só paga se a gente ganhar.
              </strong>
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappLink(WA_HERO)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-[12px] bg-[#25D366] px-7 h-14 text-base font-medium text-white hover:bg-[#1FB955] transition-colors shadow-sm"
              >
                <WhatsAppIcon />
                Falar com a Dra. agora
              </a>
              <a
                href="#caso"
                className="inline-flex items-center justify-center rounded-[12px] bg-[#F0F4F8] px-7 h-14 text-base font-medium text-[#0A0F1E] hover:bg-[#E2E8F0] transition-colors"
              >
                Embarcar meu caso
              </a>
            </div>

            {/* Trust micro-copy */}
            <p className="text-xs text-[#525252]">
              Análise gratuita · Sem custo inicial · 100% online · Atuação em todo Brasil
            </p>

            {/* Boarding pass (mobile: below CTA) */}
            <div className="lg:hidden pt-2">
              <BoardingPass />
            </div>
          </div>

          {/* Right: photo placeholder + boarding pass (desktop 40%) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-6 items-center">
            {/* Photo placeholder */}
            <div className="relative w-full max-w-xs aspect-[3/4] rounded-[20px] overflow-hidden bg-gradient-to-b from-[#0F1E33] to-[#1E88E5] flex flex-col items-center justify-center">
              <User size={80} className="text-white/30" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0F1E33]/80 backdrop-blur-sm px-4 py-3">
                <p className="text-[10px] font-mono tracking-widest text-[#B5D4F4] uppercase text-center">
                  Dra. Agrislaine Oliveira · OAB/SC e OAB/SP
                </p>
              </div>
            </div>

            <BoardingPass />
          </div>

        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
