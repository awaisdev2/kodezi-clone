/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../App.css'

export default function KodeziCard(props) {
  const {background} = props
  return (
    <div style={{background}} className='p-10 relative z-10 flex justify-between rounded-xl'>
      <div className=''>
        <h1 className='text-2xl text-white font-bold'>{props.title}</h1>
        <p className='my-3 text-white mr-12 text-lg'>{props.subtitle}</p>
        <button className='px-9 py-3 my-5 btn text-black bg-white rounded-full'>{props.btn}</button>
      </div>
      <div>
        <img src={props.img} alt="card-image" />
      </div>
    </div>
  )
}
