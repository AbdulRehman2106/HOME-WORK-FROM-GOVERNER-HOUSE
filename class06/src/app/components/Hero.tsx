import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div>
      <div className="mt-28 flex flex-col items-center">
        <section className='text-center mb-10'>
            <h1 className="font-extra-bold text-2xl "><b>Sell your Car On Pakwheels And Get The Best Price</b></h1>
        </section>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-3xl px-4">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full lg:w-1/2 text-center">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Post Your Ad On Pakweels</h2>
            <ul className='text-left mb-6 space-y-2'>
                <li>✔ Post Your Ad For Free In 3 Easy Steps</li>
                <li>✔ Get Genuine Offers From Verified Buyers</li>
                <li>✔ Sell Your Car Fast At The Best Price</li>
            </ul>
            <button className='bg-red-600 text-white py-2 px-4 rounded '>Post Your Ad</button>
            </div>
            <div>
                <p className="font-extrabold text-center">OR</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full lg:w-1/2 text-center">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Try Pakwheels Sell It For Me</h2>
                <ul className="text-left mb-6 space-y-2">
                    <li>✔ Dedicated Sales Experts To Sell Your Car</li>
                    <li>✔ We Bargain For You And Share The Best Offer</li>
                    <li>✔ We Insure Safe & Secure Transaction</li>
                </ul>
                <button className="bg-blue-600 text-white py-2 px-4 rounded">Register Your Car</button>
            </div>
        </div>
      </div><br /><br /><br />
    </div>
  )
}

export default HeroSection
