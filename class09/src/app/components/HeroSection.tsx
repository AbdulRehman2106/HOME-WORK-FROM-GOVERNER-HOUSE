import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-gray-800 via-purple-700 to-blue-600 px-6 lg:px-20 py-12'>

      <div className="flex-1 text-center lg:text-left space-y-6 bg-white bg-opacity-80 p-6 rounded-lg shadow-xl lg:pr-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"><i>
          Build Your Dream Project 
          </i></h1>
        <p className="text-lg text-gray-700 hover:text-indigo-500 transition duration-300 ease-in-out font-semibold text-center "><i>Join Thousand Of Satisfied Customers Who Trust Us For Quality And Reliability..</i></p>
        <div className="flex justify-center lg:justify-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition transform hover:scale-105 duration-300">
            Get Started
          </button>
        </div>
      </div>

          <div className="flex-1 lg:pl-12">
            <Image
            src="/hero.jpg"
            alt='Hero'
            width={600}
            height={400}
            className='w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105'
            />
          </div>
        </div>
  )
}
