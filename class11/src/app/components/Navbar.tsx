import React from 'react'

export default function HeroSection() {
    return (
        
    <div className='p-10 items-center justify-items-center min-h-screen  pb-20 gap-2 bg-[#181818]'>

    <h6 className='text-2xl font-extrabold'>Hover It</h6><br />

    <div className='font-extrabold border-8 bg-black border-red-800  hover:bg-red-900 hover:border-green-600  p-2 mb-3'>

    <i>

    <h1 className='text-lg sm:text-xl md:text-4xl mb-2 text-yellow-400 text-center'>My Favourite Color Is Yellow</h1>

    <h1 className='text-lg sm:text-xl md:text-4xl mb-2 text-pink-500 text-center'>My Favourite Dish Is Biryani</h1>

    </i>

    </div>

    <div className='font-extrabold border-8 bg-black border-blue-800  hover:bg-yellow-500 hover:border-purple-600  p-2 mb-3'>
    
<i> 

    <h1 className='text-lg sm:text-xl md:text-4xl mb-2 text-green-800 text-center'>My Favourite Bike Is Kawasaki Ninja H2R</h1>

    <h1 className='text-lg sm:text-xl md:text-4xl mb-2 bg-gr text-rose-600 text-center'>My Favourite Car Is Mclaren</h1>
    
                </i>
                </div>
            </div>
          )
        }