import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pointech - Soluciones Tecnológicas a tu Alcance',
  description: 'Empresa especializada en reparación, mantenimiento e instalación de hardware y software, seguridad informática, instalación de alarmas y soluciones tecnológicas integrales.',
  keywords: 'tecnología, reparación hardware, software, seguridad informática, alarmas, mantenimiento y más',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
