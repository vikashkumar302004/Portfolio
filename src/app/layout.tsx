import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Vikash Kumar — Full Stack & Gen AI Engineer',
  description: 'Full Stack Developer, Gen AI Enthusiast, and AWS Certified Engineer. Building intelligent systems at the intersection of AI, Cloud, and modern web. KIET Group of Institutions, 2024–2028.',
  keywords: ['Full Stack Developer', 'Gen AI', 'AWS', 'React', 'Next.js', 'LangChain', 'LLM', 'KIET'],
  authors: [{ name: 'Vikash Kumar' }],
  openGraph: {
    title: 'Vikash Kumar — Full Stack & Gen AI Engineer',
    description: 'Building intelligent full-stack systems. AWS Certified. Gen AI Enthusiast.',
    url: 'https://your-domain.vercel.app',
    type: 'website',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikash Kumar — Full Stack & Gen AI Engineer',
    description: 'Building intelligent full-stack systems. AWS Certified.',
    images: ['/assets/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-indigo/30 selection:text-white`}>
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="mouse-glow absolute w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_70%)] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out" id="mouse-glow" />
        </div>
        <Toaster position="bottom-right" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('mousemove', (e) => {
              const glow = document.getElementById('mouse-glow');
              if (glow) {
                glow.style.transform = \`translate(\${e.clientX}px, \${e.clientY}px)\`;
              }
            });
          `
        }} />
      </body>
    </html>
  )
}
