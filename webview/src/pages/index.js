import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Services from '@/components/Services'
import TestimonialsSection from '@/components/MainTestimonial'
import HowItWorks from '@/components/Howitworks'

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
        <HowItWorks />
        {/* <Features /> */}
        <TestimonialsSection />
       
      </main>

      <Footer />
    </div>
  )
}
