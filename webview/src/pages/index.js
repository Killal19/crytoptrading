import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Services from '@/components/Services'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ethingo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main >
        <Hero />
        <Services />
        <Features />
       
      </main>

      <Footer />
    </div>
  )
}
