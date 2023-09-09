import React from 'react'
import KodeziCard from './KodeziCard'
import KodeziChatCard from './KodeziChatCard'

export default function KodeziChat() {
  return (
    <div className='bg-[#121929] h-[2400px] py-5'>
      <div>
        <h1 className='text-5xl mt-20 mb-10 z-10 text-center text-white font-bold'>Kodezi boosts your <span className='text-blue-300'>productivity</span> <br /> while coding!</h1>
      </div>
      <div>
        <img className='absolute z-0 -mt-14 right-0' src="https://kodezi.com/_next/static/media/rightNetCircle.63408bc8.png" alt="ellipse" />
      </div>
      <div className='mx-12 my-5 z-20'> 
      <KodeziCard btn='Try now!' background='linear-gradient(90deg, rgba(175,104,106,1) 41%, rgba(168,160,45,1) 77%)' title='Introducing KodeziCha' subtitle='Generate, Ask, Search, Code Anything in your codebase with KodeziChat. Your personal AI coding assistant!' img='https://kodezi.com/_next/static/media/kodezi-chat-img.685a6334.svg' className='z-20' />
      </div>
      <div className='mx-12 flex justify-center flex-wrap my-5'>
        <KodeziChatCard background='linear-gradient(135deg, rgba(211,1,223,1) 41%, rgba(247,181,247,1) 77%)' img='https://kodezi.com/_next/static/media/debug-detail.ad805fe6.svg' title='Debug code with detailed explanations' subtitle='Kodezi does not just fix your code for you, it is tells you why its wrong and how to prevent future bugs' />
        <KodeziChatCard background='linear-gradient(135deg, rgba(26,223,1,1) 41%, rgba(200,69,51,1) 77%)' img='https://kodezi.com/_next/static/media/optimize-your-code.79dfbd9a.svg' title='Optimize your code for optimum efficiency' subtitle='Reduce unnecessary lines of code and syntax to ensure a clean end results.' />
        <KodeziChatCard background='linear-gradient(135deg, rgba(231,208,205,1) 32%, rgba(1,223,110,1) 82%)' img='https://kodezi.com/_next/static/media/optimize-your-code.79dfbd9a.svg' title='Optimize your code for optimum efficiency' subtitle='Reduce unnecessary lines of code and syntax to ensure a clean end results.' />
        <KodeziChatCard background='#7D74FE' img='https://kodezi.com/_next/static/media/optimize-your-code.79dfbd9a.svg' title='Optimize your code for optimum efficiency' subtitle='Reduce unnecessary lines of code and syntax to ensure a clean end results.' />
      </div>
      <div>
        <img className='absolute z-0 -mt-24 left-0' src='https://kodezi.com/_next/static/media/leftNetCircle.6e1f8e4a.png' alt='ellipse' />
      </div>
      <div className='mx-12 my-5 z-20'> 
        <KodeziCard btn='Explore it now' background='linear-gradient(135deg, rgba(52,106,224,1) 0%, rgba(9,212,75,1) 77%)' title='Generate Code' subtitle='Generate code from text, input a project question or create an entire function all in seconds!' img='https://kodezi.com/_next/static/media/generate-code-img.0541be99.svg' className='z-20' />
      </div>
    </div>
  )
}
