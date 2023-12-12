import '@/styles/global.css'
import { ContextTestProvider } from 'context/context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ContextTestProvider>
          {children}
        </ContextTestProvider>
      </body>
    </html>
  )
}
