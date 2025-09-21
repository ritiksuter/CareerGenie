import { Button } from '@/components/ui/button';
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='p-5 bg-gradient-to-tr from-[#BE575F] via-[$A338E3] to-[#AC76D6] rounded-xl'>
      <h2 className='font-bold text-2xl text-white'>AI Career Coach Agent</h2>
      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quisquam quidem mollitia quibusdam harum rem neque error eos delectus architecto.</p>
      <Button variant={'outline'} className='mt-3'>Let's Get Started</Button>
    </div>
  )
}

export default WelcomeBanner;