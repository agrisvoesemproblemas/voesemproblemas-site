// TODO Phase B: substituir por caso real fornecido pela Dra. quando ela enviar
export function BoardingPass() {
  return (
    <div className="rounded-[14px] border border-[#E5E7EB] bg-white p-6 shadow-md max-w-sm w-full">
      {/* Header monospace */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[10px] font-medium tracking-widest text-[#525252] uppercase">
          Boarding Pass
        </span>
        <span className="font-mono text-[10px] text-[#525252]">Nº 247</span>
      </div>

      {/* Dashed divider */}
      <div className="border-t border-dashed border-[#D1D5DB] mb-4" />

      {/* Case info */}
      <div className="space-y-1 mb-4">
        <p className="font-mono text-sm font-medium text-[#0A0F1E]">Voo atrasado 6h47</p>
        <p className="font-mono text-xs text-[#525252]">GIG → POA · LATAM · Jan/2026</p>
      </div>

      {/* Dashed divider */}
      <div className="border-t border-dashed border-[#D1D5DB] mb-4" />

      {/* Indemnification value */}
      <div className="space-y-0.5">
        <p className="font-mono text-[10px] text-[#525252] uppercase tracking-wider">Indenização obtida</p>
        <p className="font-mono text-3xl font-bold text-[#1E88E5]">R$ 8.547</p>
      </div>

      {/* Footer */}
      <div className="mt-4 border-t border-dashed border-[#D1D5DB] pt-3">
        <p className="font-mono text-[9px] text-[#525252] tracking-wider uppercase">
          ★ Exemplo ilustrativo
        </p>
      </div>
    </div>
  )
}
