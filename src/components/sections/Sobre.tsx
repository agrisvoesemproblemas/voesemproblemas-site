import { User } from 'lucide-react'

// TODO: substituir por foto profissional fornecida pela Dra.
// TODO: substituir stats por números reais fornecidos pela Dra.
const stats = [
  { n: '+500*', l: 'casos conduzidos' },
  { n: 'R$ 2M+*', l: 'em indenizações' },
  { n: '98%*', l: 'de êxito' },
]

export function Sobre() {
  return (
    <section id="sobre" className="px-4 sm:px-10 py-10 bg-white border-t border-[#E5E7EB]/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-9 items-center">

          {/* Photo */}
          <div
            className="aspect-[4/5] rounded-[14px] flex items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0F1E33 0%, #1E88E5 100%)' }}
          >
            <User size={80} style={{ color: 'rgba(255,255,255,0.3)' }} />
            <div
              className="absolute bottom-3.5 left-3.5 right-3.5 rounded-[6px] px-2.5 py-2 text-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
            >
              <p
                className="font-medium tracking-[0.05em]"
                style={{ color: '#1E88E5', fontSize: 11 }}
              >
                DRA. AGRISLAINE OLIVEIRA
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-[26px] font-medium text-[#0A0F1E] tracking-[-0.025em] mb-3">
              Sobre a Dra. Agrislaine
            </h2>

            <p className="text-[14px] text-[#525252] leading-[1.6] mb-4">
              Advogada com dupla inscrição na OAB de Santa Catarina e São Paulo, dedicada
              exclusivamente ao direito do passageiro aéreo. Natural de Criciúma, atua de
              Paulínia/SP atendendo clientes em todo território nacional, 100% digital.
            </p>

            {/* Stats integrados */}
            <div
              className="grid grid-cols-3 gap-3.5 rounded-[12px] p-4"
              style={{ backgroundColor: '#F3F4F6' }}
            >
              {stats.map((s) => (
                <div key={s.l}>
                  <p
                    className="font-medium text-[#0A0F1E]"
                    style={{ fontSize: 18, letterSpacing: '-0.02em' }}
                  >
                    {s.n}
                  </p>
                  <p className="text-[11px] text-[#525252]">{s.l}</p>
                </div>
              ))}
            </div>

            <p className="font-mono text-[12px] text-[#525252] mt-3">
              OAB/SC 53.583 · OAB/SP 505.951
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
