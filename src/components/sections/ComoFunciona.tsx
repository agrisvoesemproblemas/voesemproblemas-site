const steps = [
  { n: '01', title: 'Você relata', desc: 'Pelo WhatsApp ou formulário. Pode ser por áudio.' },
  { n: '02', title: 'Analisamos', desc: 'Avaliação técnica em até 24h. Sempre gratuita.' },
  { n: '03', title: 'Documentamos', desc: 'Lista exata: passagem, embarque, recibos.' },
  { n: '04', title: 'Protocolamos', desc: 'Ação ajuizada. Você recebe o número do processo.' },
  { n: '05', title: 'Acompanhamos', desc: 'Até a indenização. Você só paga 30% se ganhar.' },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-4 sm:px-10 py-10 bg-[#FAFAFA] border-t border-[#E5E7EB]/50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[26px] font-medium text-[#0A0F1E] tracking-[-0.025em] mb-1.5">
          Como conduzimos seu caso
        </h2>
        <p className="text-[14px] text-[#525252] mb-8">
          Cinco etapas. Sua participação fica praticamente em uma — relatar o ocorrido.
        </p>

        {/* Desktop: 5 cols with dividers */}
        <div className="hidden lg:grid grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="px-5 py-5"
              style={{
                borderRight: i < 4 ? '0.5px solid #E5E7EB' : undefined,
              }}
            >
              <p
                className="font-medium text-[#1E88E5] leading-none"
                style={{ fontSize: 30, letterSpacing: '-0.04em' }}
              >
                {s.n}
              </p>
              <p className="mt-2.5 text-[14px] font-medium text-[#0A0F1E]">{s.title}</p>
              <p className="mt-1 text-[12px] text-[#525252] leading-[1.45]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: stack */}
        <div className="flex flex-col gap-4 lg:hidden">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4">
              <p
                className="font-medium text-[#1E88E5] flex-shrink-0 w-8"
                style={{ fontSize: 24, letterSpacing: '-0.04em' }}
              >
                {s.n}
              </p>
              <div>
                <p className="text-[14px] font-medium text-[#0A0F1E]">{s.title}</p>
                <p className="mt-0.5 text-[12px] text-[#525252] leading-[1.45]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
