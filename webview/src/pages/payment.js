import React from 'react'
import Paymentnav from '@/components/Paymentnav'
import Footer from '@/components/Footer'
// import BlockchainTransactions from '@/components/BlockchainTransactions'
import Services from '@/components/Services'
import Paymentcard from '@/components/Paymentcard'
import WhyChooseEthingo from '@/components/Whyus'
import HowItWorks from '@/components/Howitworks'

function payment() {
  return (
    <div>
        <Paymentnav />
        {/* <BlockchainTransactions /> */}
        <Paymentcard />
        <HowItWorks />
        {/* <Services /> */}
        <WhyChooseEthingo />
        <Footer />
    </div>
  )
}

export default payment