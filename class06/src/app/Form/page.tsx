"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Form(){
    const router = useRouter();

    return(
        <div className="text-center bg-blue-100 min-h-screen space-y-4 py-5">
            <h3 className="text-[45px] font-extrabold py-10 font-serif">Enter Your Details</h3>
            <br />

            <form className="flex flex-col items-center space-y-6">
                
                <input 
                type="text"
                placeholder="Enter Your Name"
                required
                className="border border-gray-400 rounded-md w-96 h-10 pl-2"
                 />

                <input 
                type="email"
                placeholder="Enter Your Email"
                required
                className="border border-gray-400 rounded-md w-96 h-10 pl-2"
                 />
                <input 
                type="number"
                placeholder="Enter Your Card Number"
                required
                className="border border-gray-400 rounded-md w-96 h-10 pl-2"
                 />
                <input 
                type="text"
                placeholder="Enter Your Address"
                required
                className="border border-gray-400 rounded-md w-96 h-10 pl-2"
                 />
                 <br />
         <div className="flex space-x-4">
                 <Link href="/Thank-You" passHref>
            <button className="text-white bg-blue-700 w-44 h-12 rounded-md hover:bg-blue-900">Place Your Order</button>
          </Link>

          <button
          type="button"
          onClick={() => router.back }
          className="text-white bg-red-500 w-44 h-12 rounded-md hover:bg-red-700"
          >Go Back</button>
                 </div>
                <br />
            </form>
            <br />
            <br />
        </div>
    )
}