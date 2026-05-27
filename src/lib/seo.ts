import type { Metadata } from 'next'

const BASE_URL = 'https://voesemproblemas.com'
const SITE_NAME = 'Voe sem Problemas'

export function buildMetadata(opts: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${BASE_URL}${opts.path ?? '/'}`
  return {
    title: opts.title,
    description: opts.description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
    },
    alternates: { canonical: url },
  }
}
