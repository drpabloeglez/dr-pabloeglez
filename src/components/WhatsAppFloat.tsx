import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '@/lib/constants'

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
