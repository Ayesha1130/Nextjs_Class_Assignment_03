import React from 'react'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Faqs from './components/FAQs/Faqs'
import Visitors from './components/Visitors/Visitors'

const cardObj = [
  {
    imgSrc: "/images/pic1.jpg",
    title: 'Beach Getaways',
    description: 'Relax on the most beautiful beaches'
  },
  {
    imgSrc: "/images/pic2.jpg",
    title: 'Mountain Adventures',
    description: 'Hiking and skiing in stunning mountains'
  },
  {
    imgSrc: "/images/pic3.jpg",
    title: 'Cultural Tours',
    description: 'Immerse yourself in local cultures.'
  },
  {
    imgSrc: "/images/pic4.jpg",
    title: 'Family Vacations',
    description: 'Fun for the whole family!'
  },
  {
    imgSrc: "/images/pic5.jpg",
    title: 'Luxury Escapes',
    description: 'Indulge in luxury at exotic resorts.'
  },
  {
    imgSrc: "/images/pic6.jpg",
    title: 'Adventure Sports',
    description: 'Thrilling activities for adventure seekers'
  }

]

export default function Home() {
  return (
    <div >
      <Hero />
      {/* Card Section */}

      <h2 className="text-4xl font-bold text-center mt-8 mb-12 animate-bounce">Our Latest Destinations</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
      {cardObj.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      </div>
      <Visitors />
      <Faqs />
    

      


      
      
    </div>
  )
}
