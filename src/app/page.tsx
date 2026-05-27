import { BrandLogo } from '@/components/brand/Logo'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 bg-[#FAFAFA]">
      <div className="w-full max-w-3xl mx-auto py-20 text-center space-y-8">

        {/* Wordmark */}
        <div className="flex justify-center">
          <BrandLogo variant="light" size="lg" />
        </div>

        {/* OAB badge */}
        <div className="flex justify-center">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-[#E6F1FB] text-[#0C447C]">
            Advocacia especializada · OAB/SC 53.583 · OAB/SP 505.951
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#0A0F1E] leading-[1.1] tracking-tight"
        >
          Pegou um problema no voo?
          <br />
          <span className="text-[#1E88E5]">Saia do prejuízo</span> sem mexer no bolso.
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-[#525252] max-w-2xl mx-auto leading-relaxed">
          Atraso, cancelamento, extravio ou overbooking. Análise gratuita em 24h.{' '}
          <strong className="text-[#0A0F1E] font-medium">Você só paga se a gente ganhar.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href="https://wa.me/5548999687068?text=Ol%C3%A1%20Dra.%20Agrislaine%2C%20vi%20o%20site%20e%20preciso%20de%20ajuda%20com%20um%20problema%20no%20voo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] px-7 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#1FB955] transition-colors"
          >
            {/* WhatsApp icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com a Dra. Agrislaine
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded-[10px] px-7 py-3.5 text-base font-semibold text-white bg-[#1E88E5] hover:bg-[#1976D2] transition-colors"
          >
            Calcular minha indenização
          </a>
        </div>

        {/* Trust strip */}
        <div className="pt-8 space-y-6">
          <Separator className="bg-[#E5E7EB]" />

          <p className="text-sm text-[#525252]">
            Atuação em todo Brasil · 100% online · Análise gratuita · Sem custo inicial
          </p>

          {/* TODO Phase B: substituir pelos números reais fornecidos pela Dra. */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0A0F1E]">+500</p>
              <p className="text-sm text-[#525252]">casos atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0A0F1E]">R$ 2M+</p>
              <p className="text-sm text-[#525252]">em indenizações</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0A0F1E]">98%</p>
              <p className="text-sm text-[#525252]">de êxito</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
