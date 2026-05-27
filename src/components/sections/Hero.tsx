import { whatsappLink } from '@/lib/wa'

const WA_HERO = 'Olá Dra. Agrislaine, vi o site da Voe sem Problemas e gostaria de uma análise do meu caso.'

const flights = [
  { code: 'LA 3142', route: 'GRU → REC', time: '18:30', status: 'CANCELADO', type: 'red' },
  { code: 'G3 5208', route: 'GRU → POA', time: '21:45', status: 'ATRASADO 4h20', type: 'amber' },
  { code: 'AD 1718', route: 'GRU → SDU', time: '20:15', status: 'ATRASADO 2h10', type: 'amber' },
  { code: 'LA 8456', route: 'GRU → BSB', time: '19:00', status: 'CANCELADO', type: 'red' },
  { code: 'G3 9034', route: 'GRU → FOR', time: '22:10', status: 'ATRASADO 3h05', type: 'amber' },
]

export function Hero() {
  return (
    <section className="px-4 sm:px-10 pt-14 pb-7">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">

          {/* LEFT — copy */}
          <div className="flex flex-col">
            {/* Slogan placeholder */}
            <span className="inline-block self-start mb-3.5 rounded-[6px] border border-dashed border-[#B5D4F4] bg-[#FAFAFA] px-3 py-1.5 text-[12px] text-[#525252]">
              [ slogan da Dra. Agrislaine aqui ]
            </span>

            {/* H1 */}
            <h1 className="text-[40px] sm:text-[44px] font-medium text-[#0A0F1E] leading-[1.04] tracking-[-0.035em] mb-4">
              Quando a companhia falha,
              <br />
              <span className="text-[#1E88E5]">a justiça compensa.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base text-[#525252] leading-[1.55] mb-7 max-w-[480px]">
              Atraso, cancelamento, bagagem extraviada ou preterição de embarque. Análise gratuita
              em 24h pelo WhatsApp. Honorários apenas sobre o êxito.
            </p>

            {/* Single primary CTA */}
            <a
              href={whatsappLink(WA_HERO)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex self-start items-center gap-2.5 rounded-[14px] bg-[#25D366] px-6 py-4 text-[15px] font-medium text-white hover:bg-[#1FB955] hover:scale-[1.02] transition-all duration-200"
            >
              <WhatsAppIcon />
              Falar com a Dra. agora
            </a>
          </div>

          {/* RIGHT — visual */}
          <div className="flex flex-col gap-3">
            {/* Departures panel */}
            <div
              className="rounded-[12px] px-[18px] py-4"
              style={{
                background: '#0A0F1E',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              {/* Panel header */}
              <div className="flex justify-between items-center pb-2.5 border-b border-[rgba(181,212,244,0.15)] mb-3">
                <span className="font-mono text-[10px] text-[#B5D4F4] tracking-[0.15em]">
                  DEPARTURES · GRU
                </span>
                <span className="font-mono text-[10px] text-[#FBBF24] tracking-[0.1em]">
                  ★ AO VIVO
                </span>
              </div>

              {/* Flight rows */}
              <div className="flex flex-col gap-1.5">
                {flights.map((f) => (
                  <div
                    key={f.code}
                    className="grid gap-2 font-mono text-[11px] items-center"
                    style={{ gridTemplateColumns: '1fr 1.2fr 0.7fr 1fr' }}
                  >
                    <span className="text-white">{f.code}</span>
                    <span className="text-[#B5D4F4]">{f.route}</span>
                    <span className="text-[#B5D4F4]">{f.time}</span>
                    <span
                      className="font-medium"
                      style={{ color: f.type === 'red' ? '#FF6B6B' : '#FBBF24' }}
                    >
                      {f.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="mt-2 font-mono text-[8px] text-[#525252] italic">
                Painel ilustrativo. Códigos IATA reais (LA=LATAM, G3=GOL, AD=Azul). Voos fictícios.
              </p>
            </div>

            {/* Boarding pass — êxito recente */}
            {/* TODO: substituir por caso real fornecido pela Dra. */}
            <div
              className="rounded-[12px] px-[18px] py-3.5"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 1px 2px rgba(10,15,30,0.06), 0 0 0 0.5px #E5E7EB',
              }}
            >
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-[#D1D5DB] mb-2">
                <span className="font-mono text-[10px] text-[#525252] tracking-[0.1em]">
                  ★ ÊXITO RECENTE
                </span>
                <span className="font-mono text-[10px] text-[#525252]">Nº 247</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[14px] font-medium text-[#0A0F1E] leading-[1.2]">
                    Voo atrasado 6h47
                  </p>
                  <p className="font-mono text-[11px] text-[#525252] mt-0.5">
                    GIG → POA · LATAM
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[22px] font-medium text-[#1E88E5] tracking-[-0.02em]">
                    R$ 8.547
                  </p>
                  <p className="text-[10px] text-[#525252]">conquistados</p>
                </div>
              </div>
            </div>
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
