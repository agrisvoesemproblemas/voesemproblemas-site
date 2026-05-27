export function whatsappLink(message: string): string {
  const phone = '5548999687068'
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
