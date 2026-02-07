import type { Metadata } from 'next'
import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Shihab | Portfolio',
  description: 'Software developer focused on ERP systems, microservices, and modern web applications.',
}

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem('theme');
    const pref = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'dark';
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = pref === 'system' ? (systemPrefersLight ? 'light' : 'dark') : pref;
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme-pref', pref);
  } catch {}
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-theme-pref="dark"
      className={`${plexSans.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
