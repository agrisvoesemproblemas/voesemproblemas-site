import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 bg-[#FAFAF8]">
      <div className="w-full max-w-3xl space-y-8 text-center">
        <Badge
          variant="outline"
          className="border-[#E5E5E5] text-[#525252] text-sm px-4 py-1"
        >
          Design System — Direção B · Sprint 1 Placeholder
        </Badge>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#0A0A0A] [font-feature-settings:'ss01','cv11']">
          Voe sem Problemas
        </h1>

        <p className="text-xl leading-relaxed max-w-xl mx-auto text-[#525252]">
          Direitos do passageiro aéreo explicados de forma simples.
          Dra. Agrislaine Oliveira — advocacia especializada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="px-8 py-3 text-base font-semibold rounded-[10px] bg-[#0F5132] hover:bg-[#0D4429] text-[#FAFAF8] border-0"
          >
            Consultar agora
          </Button>

          <Button
            size="lg"
            className="px-8 py-3 text-base font-semibold rounded-[10px] bg-[#FF6B6B] hover:bg-[#E85D5D] text-white border-0"
          >
            Verificar meu caso — é grátis
          </Button>
        </div>

        <p className="text-xs pt-8 text-[#525252]">
          Tokens: bg-canvas #FAFAF8 · accent #0F5132 · cta #FF6B6B · text-strong #0A0A0A · text-muted #525252
        </p>
      </div>
    </main>
  )
}
