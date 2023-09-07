import React from 'react'
import '../App.css';
import IntroCard from './IntroCard';

export default function Intro() {
  return (
    <div className='video-section p-16'>
        <div className="flex justify-center">
        <video autoPlay muted loop src="https://kodezi-s3.s3.us-east-2.amazonaws.com/tutorial-kodezi.mp4" className='z-10'></video>
        </div>
        <div>
            <img className='absolute -mt-56 left-0' src="https://kodezi.com/_next/static/media/Ellipse5.8b115c84.png" alt="" />
        </div>
        <div className='mt-32 text-center'>
            <h1 className='text-2xl z-10 my-10 text-gray-600'>SUPPORTING THE TOP LANGUAGES</h1>
            <div className="flex my-5 z-10 justify-center">
                <img className='z-10' src="https://kodezi.com/_next/static/media/languagesLogos.aba7351a.svg" alt="" />
            </div>
        </div>
        <div className='text-center'>
            <h1 className='text-5xl mt-32 text-white'>Who can <span className='text-yellow-100'>benefit from Kodezi?</span></h1>
            <p className='text-lg mt-6 text-white'>Learn about all the use cases for each group!</p>
        </div>
        <div className='flex'>
            <IntroCard src='https://kodezi.com/_next/static/media/for-students-icon.5bef2d83.svg' title='Students' subtitle='Submit Better Assignments' />
            <IntroCard src='https://kodezi.com/_next/static/media/for-programmers-icon.cfbde212.svg' title='Developers' subtitle='Be more productive' />
            <IntroCard src='https://kodezi.com/_next/static/media/for-teams-icon.d0340439.svg' title='Teams' subtitle='Launch products faster' />
        </div>
    </div>
  )
}
