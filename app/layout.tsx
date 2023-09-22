import './globals.css'
import type {Metadata} from 'next'
import {Inter, Nunito} from 'next/font/google'
import {Navbar} from "@/app/components/navbar/Navbar";
import {ClientOnly} from "@/app/components/ClientOnly";
import {Modal} from "@/app/components/modals/Modal";
import {RegisterModal} from "@/app/components/modals/RegisterModal";
import {ToasterProvider} from "@/app/providers/ToasterProvider";

const nunito = Nunito({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={nunito.className}>
    <ClientOnly>
      <ToasterProvider/>
      <RegisterModal/>
      <Navbar/>
    </ClientOnly>
    {children}
    </body>
    </html>
  )
}
