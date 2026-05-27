// TODO Phase B: substituir por números reais quando a Dra. fornecer
const stats = [
  { value: '+500', label: 'Casos resolvidos*' },
  { value: 'R$ 2M+', label: 'Em indenizações*' },
  { value: '98%', label: 'De êxito*' },
]

export function Resultados() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium text-[#525252] tracking-widest uppercase mb-4">
          — Nº 05 · Resultados
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 mt-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-5xl font-medium text-[#0A0F1E] tracking-[-0.03em] mb-2">
                {s.value}
              </p>
              <p className="text-sm text-[#525252]">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#525252]">
          * Valores aproximados. Atualização em breve com números oficiais.
        </p>
      </div>
    </section>
  )
}
