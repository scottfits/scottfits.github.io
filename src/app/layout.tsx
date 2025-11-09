import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Scott Fitsimones',
  description: 'Building better cities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Name and Navigation */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-12">
                <h1 className="text-5xl font-bold mb-4">
                  Scott Fitsimones
                </h1>
                
                <p className="text-lg text-gray-700 mb-4">
                  I like to build things.
                </p>
                
            
                
                <nav className="space-y-2">
             
                  
                  <div className="space-y-1">
                    <Link href="/" className="block py-1">home</Link>
                    <Link href="/books" className="block py-1">books</Link>
                    <Link href="/investing" className="block py-1">investing</Link>
                    <Link href="/questions" className="block py-1">questions</Link>
                  </div>
                                  <br />
                                  <div className="space-y-1">
                                      Stay in touch:
                                      <div className="mb-4">
                                          <Link href="https://x.com/scottfits">
                                              @scottfits
                                          </Link>
                                      </div>
                                  </div>
                </nav>
              </div>
            
            </aside>
            
            {/* Right Column - Main Content */}
            <main className="flex-1 max-w-3xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
