"use client"
import Link from "next/link";
import Image from "next/image";

export default function DetailThree() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-red-700 mx-20 underline text-nowrap py-16 text-center">
        Honda City 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>
      <div className="flex flex-col items-center px-2 h-full w-full">
        <Link href="/DetailThree" passHref>
          <div className="w-full h-80 border-4 border-gray-400 rounded-lg bg-blue-200 p-1">
            <Image
              src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945"
              alt="Honda City"
              className="cursor-pointer w-full h-full rounded-md"
              width={800}
              height={400}
            />
          </div>
        </Link>
        <p className="text-center px-4 mt-11 mb-6 text-black font-sans font-bold text-[16px]">
          The Honda City 2024 Is A Compact, Affordable Car With A Simple And
          Practical Design, Making It Perfect For City Driving And Everyday Use.
          It Comes With Basic Safety Features Like Airbags And Stability Control
          To Help Keep You Safe On The Road. The Vehicle Also Offers Easy Phone
          Connectivity With Bluetooth, Ensuring You Stay Connected While On The
          Go. Inside, You&Apos;Ll Find A Comfortable Cabin With Essential Features
          And An Easy-To-Use Dashboard, While The Compact Exterior Makes It Ideal
          For Tight Parking Spaces. Reliable, Economical, And Full Of Value, The
          Alto Is A Great Choice For Anyone Looking For A Practical And
          Budget-Friendly Car. The Honda City 2024 Also Boasts Excellent Fuel
          Efficiency, Making It An Economical Choice For Both Daily Commutes And
          Longer Drives.
        </p>
        <h2 className="text-green-700 text-center text-2xl font-bold">PKR 58.5 Lacs</h2>
        <div className="flex flex-row items-center py-11 space-x-4">
          <Link href="/Form" passHref>
            <button className="bg-blue-700 text-white w-44 h-12 rounded-md tex hover:bg-purple-900">Make Payment</button>
          </Link>
          <Link href="/" passHref>
            <button className="bg-red-500 hover:bg-red-700 text-white w-44 h-12 rounded-md">Go Back</button>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
