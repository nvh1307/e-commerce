import './globals.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  weight:['400','700'],
  subsets:['latin'],
  variable:"--font-montserrat"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <nav>
          <div>
            <ul className='flex gap-12'>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/the-movies">The movies</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <div>{children}</div>
        </main>
        <footer>Footer</footer>
      </body>
      
    </html>
  )
}
