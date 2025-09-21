import { PricingTable } from '@clerk/nextjs';
import React from 'react'

function Billing() {
  return (
    <div>
      <h2 className='font-bold text-3xl text-center'>Choose Your Plan</h2>
      <p className='text-lg text-center'>Select Subscription bundle to get all AI Tools Access</p>
      <div className='mt-6'></div>
      <PricingTable />
    </div>
  )
}

export default Billing;