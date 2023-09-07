/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

export default function IntroCard(props) {
  return (
    <div className='bg-gray-900 hover:bg-gray-700 hover:text-gray-400 cursor-pointer text-gray-600 flex items-center justify-between w-[400px] p-5 m-3 rounded-lg'>
      <div>
        <img src={props.src} alt='image' />
      </div>
      <div>
        <p>For <span>{props.title}</span></p>
        <p>{props.subtitle}</p>
      </div>
      <div>
        <img src='https://kodezi.com/_next/static/media/arrow-right.64f50491.svg' alt='image' />
      </div>
    </div>
  )
}