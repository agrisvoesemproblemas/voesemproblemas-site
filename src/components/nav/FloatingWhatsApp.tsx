'use client'

import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/wa'

const WA_MSG = 'Olá Dra. Agrislaine, vi o site e preciso de ajuda com um problema no voo.'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(WA_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Dra. Agrislaine no WhatsApp"
      className="hidden lg:flex fixed bottom-6 right-6 z-50 h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1FB955] hover:scale-105 transition-all duration-200"
    >
      <MessageCircle size={26} />
    </a>
  )
}
