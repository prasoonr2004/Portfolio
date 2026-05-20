import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Documentary Video Editor | Cinematic Storytelling for YouTube Creators',
  description: 'High-end documentary and explainer video editor specializing in Johnny Harris-style pacing, GeoLayers map animation, 2D motion graphics, and cinematic sound design. Turning complex ideas into compelling visual stories.',
  keywords: [
    'documentary video editor',
    'GeoLayers editor',
    'explainer video editor',
    'YouTube documentary editor',
    'cinematic video editor',
    'geopolitics video editor',
    'motion graphics editor',
    'Johnny Harris style editing',
    'map animation video editor',
    'retention editing YouTube'
  ],
  openGraph: {
    title: 'Documentary Video Editor | Cinematic Storytelling',
    description: 'High-end documentary editing — map animation, motion graphics, sound design, retention editing.',
    type: 'website',
    locale: 'en_US',
    // TODO: Add your domain
    url: 'https://yourdomain.vercel.app',
    siteName: 'Your Name — Documentary Editor',
    images: [
      {
        // TODO: Add your OG image to /public/og-image.jpg
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Documentary Video Editor Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentary Video Editor | Cinematic Storytelling',
    description: 'Johnny Harris-inspired editing, GeoLayers maps, motion graphics & sound design.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics — replace GA_MEASUREMENT_ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
        
        {/* Microsoft Clarity — replace CLARITY_ID */}
        {/* 
          <script dangerouslySetInnerHTML={{__html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "CLARITY_ID");
          `}} />
        */}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Your Name',
              jobTitle: 'Documentary Video Editor',
              description: 'High-end documentary and explainer video editor specializing in cinematic storytelling.',
              url: 'https://yourdomain.vercel.app',
              sameAs: [
                'https://instagram.com/yourhandle',
                'https://youtube.com/@yourchannel',
              ],
              knowsAbout: [
                'Documentary Editing',
                'GeoLayers Map Animation',
                'Motion Graphics',
                'Sound Design',
                'YouTube Retention Editing',
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
