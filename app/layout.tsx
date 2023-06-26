import Navbar from "@/components/Navbar"
import "./globals.css"
import Footer from "@/components/Footer"
export const metadata = {
  title: 'Flex',
  description: 'showcase and discover projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
 <Navbar  />
      <main>
      {children}
      </main>
    <Footer  />
    </html>
  )
}
