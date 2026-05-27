import { User } from 'lucide-react'

export function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium text-[#525252] tracking-widest uppercase mb-4">
          — Nº 04 · Sobre a Dra. Agrislaine
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo placeholder */}
          <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-gradient-to-b from-[#0F1E33] to-[#1565C0] flex items-center justify-center max-w-sm">
            <User size={72} className="text-white/25" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#0F1E33]/80 px-4 py-3 text-center">
              <p className="font-mono text-[9px] tracking-widest text-[#B5D4F4] uppercase">
                Foto profissional a ser fornecida
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0A0F1E] leading-tight tracking-[-0.02em]">
              Dra. Agrislaine Oliveira
            </h2>

            <div className="space-y-4 text-[#525252] leading-relaxed">
              <p>
                Natural de Criciúma/SC, a Dra. Agrislaine Oliveira iniciou sua trajetória jurídica no
                Sul do Brasil, onde construiu sólida experiência em direitos do passageiro aéreo.
                Hoje baseada em Paulínia/SP, atende clientes em todo o território nacional de forma
                100% digital.
              </p>
              <p>
                Com mais de 5 anos de atuação exclusiva no nicho aéreo, é referência em casos de
                atraso, cancelamento, extravio de bagagem e overbooking — com registro em dois estados
                (OAB/SC e OAB/SP), o que garante atuação plena em qualquer jurisdição do Brasil.
              </p>
              <p>
                Seu diferencial: comunicação direta, sem juridiquês, e honorários somente sobre o
                êxito. Nenhum custo antecipado para o cliente.
              </p>
            </div>

            {/* Credentials */}
            <ul className="space-y-2 text-sm">
              {[
                'OAB/SC 53.583',
                'OAB/SP 505.951',
                'Atuação em todo Brasil (100% online)',
                '+5 anos no nicho aéreo',
                'Honorários 30% sobre o êxito',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[#0A0F1E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#sobre-completo"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#1E88E5] hover:text-[#1565C0] transition-colors"
            >
              Conheça mais sobre a Dra. →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
