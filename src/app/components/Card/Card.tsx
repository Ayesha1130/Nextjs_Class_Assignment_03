"use client"
import React from 'react'

interface cardItem {
    imgSrc:string;
    title: string;
    description: string;

}

const Card = (prop:cardItem) => {

    
  return (
    <div className='flex flex-col items-center justify-center p-4 gap-4 m-5 rounded-md bg-orange-400 hover:cursor-pointer hover:scale-90 transition-transform'>
      <img src={prop.imgSrc} alt={prop.title} className='w-100 h-100 rounded-md'/>
      <h3 className='texl-xl md:text-2xl lg:3xl font-semibold italic'>{prop.title}</h3>
      <p className=''>{prop.description}</p>
    </div>
  )
}

export default Card
