import React from 'react'
import AiToolCard from './AiToolCard';

const aiToolsList = [
    {
        name: 'AI Career Q&A Chat',
        description: 'Chat with AI Agent',
        icon: './chatbot.png',
        button: 'Lets Chat',
        path: '/ai-tools/ai-chat',
    },
    {
        name: 'AI Resume Analyzer',
        description: 'Improve your resume',
        icon: './resume.png',
        button: 'Analyze Now',
        path: '/ai-tools/ai-resume-analyzer',
    },
    {
        name: 'Career Roadmap Generator',
        description: 'Build your Roadmap',
        icon: './roadmap.png',
        button: 'Generate Now',
        path: '/career-roadmap-generator',
    },
    {
        name: 'Cover Letter Generator',
        description: 'Write a cover letter',
        icon: './cover.png',
        button: 'Create Now',
        path: '/ai-chat',
    },
    {
        name: 'AI Career Q&A Chat',
        description: 'Chat with AI Agent',
        icon: './chatbot.png',
        button: 'Lets Chat',
        path: '/cover-letter-generator',
    }
]

function AITools() {
  return (
    <div className='mt-7 p-5 bg-white border rounded-xl'>
      <h2 className='font-bold text-lg'>Avalaible AI Tools</h2>
      <p className=''>Start Building and Shape Your Career with this AI Agent.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4'>
        {aiToolsList.map((tool:any, index) => (
            <AiToolCard key={index} tool={tool} />
        ))}
      </div>
    </div>
  )
}

export default AITools;