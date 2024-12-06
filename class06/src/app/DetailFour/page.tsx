import Link from "next/link";
import Image from "next/image";

export default function DetailFour() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-red-700 mx-20 underline py-16 text-center">
        Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>
      <div className="flex flex-col items-center px-2 h-full w-full">
        <Link href="/DetailFour">
          <div className="w-full h-80 border-4 border-gray-400 rounded-lg bg-blue-200 p-1">
            <Image
              src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254"
              alt="Honda Civic"
              width={640} // Define width and height
              height={480}
              className="cursor-pointer w-full h-full rounded-md"
            />
          </div>
        </Link>
        <p className="text-center px-4 mt-11 mb-6 text-black font-sans font-bold text-[16px]">
          The Honda Civic 2024 Is A Compact, Stylish Car With A Modern And
          Practical Design, Making It Perfect For Both City Driving And Long
          Trips. It Comes With Advanced Safety Features Like Pre-Collision
          Warning And Lane Assist To Help Keep You Safe On The Road. The Vehicle
          Also Offers Easy Phone Connectivity With Apple Carplay And Android
          Auto, So You Can Stay Connected While Driving. Inside, You&Apos;Ll Find A
          Comfortable Cabin With Modern Features And An Intuitive Dashboard,
          While The Sleek Exterior Gives It A Bold, Dynamic Look. Reliable,
          Efficient, And Packed With Features, The Honda Civic Is A Great Choice For
          Anyone Looking For A Compact And Well-Equipped Car.
        </p>
        <h2 className="text-green-700 text-center text-2xl font-bold">PKR 99.0 Lacs</h2>
        <div className="flex flex-row items-center py-11 space-x-4">
          <Link href="/Form">
            <button className="bg-blue-700 text-white w-44 h-12 rounded-md hover:bg-purple-900">Make Payment</button>
          </Link>
          <Link href="/">
            <button className="bg-red-500 hover:bg-red-700 text-white w-44 h-12 rounded-md ">Go Back</button>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}