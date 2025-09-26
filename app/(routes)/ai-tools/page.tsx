import React from 'react'
import AITools from '../dashboard/_components/AIToolsList';
import WelcomeBanner from '../dashboard/_components/WelcomeBanner';

function AiTools() {
  return (
    <div>
        <WelcomeBanner />
        <h2 className='font-bold text-2xl mt-5'>AI Career Chat Agents</h2>
      <AITools />
    </div>
  )
}

export default AiTools;