import React from 'react'

export default function KodeziChatCard(props) {
    const { background } = props;
  return (
    <div style={{background}} className='px-5 m-2 z-10 relative rounded-lg w-[500px] py-7'>
      <div>
        <img src={props.img} alt="" />
      </div>
      <div className='mt-4'>
        <h1 className='text-white font-bold text-2xl'>{props.title}</h1>
        <p className='text-white w-[440px] text-lg'>{props.subtitle}</p>
      </div>
    </div>
  )
}