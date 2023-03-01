import React from 'react'
import Paymentnav from '@/components/Paymentnav'
import Footer from '@/components/Footer'
// import BlockchainTransactions from '@/components/BlockchainTransactions'
import Services from '@/components/Services'
import Paymentcard from '@/components/Paymentcard'

function payment() {
  return (
    <div>
        <Paymentnav />
        {/* <BlockchainTransactions /> */}
        <Paymentcard />
        {/* <Services /> */}
        <Footer />
    </div>
  )
}

export default payment