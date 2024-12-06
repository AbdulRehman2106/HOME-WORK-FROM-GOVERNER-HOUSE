import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex flex-col justify-center">
      <nav className=" px-4 flex justify-center items-center flex-row w-full text-white font-extrabold bg-gray-950">
      <div className="mb-4 sm:mb-0">
  <Image
    className="px-3 py-5 h-auto w-56 text-lg sm:text-xl md:text-2xl lg:text-2xl"
    src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg"
    alt="Logo"
    width={40}
    height={40}
  />
</div>

        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <ul className="flex flex-row ">
            <li className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold"><Link href="/" >Home</Link></li>
            <li
                className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
                Used Cars
            </li>
            <li
                className=" hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
                New Cars
            </li>
            <li
                className="hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
                Bikes
            </li>
            <li
                className="hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
                Auto Store           
            </li>
            <li
                className=" hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
                Videos
            </li>
            <li
                className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
                Forums
            </li>
            <li
                className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
                Contact Us
            </li>
            <li
               className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
                Blog
            </li>
            <li
                className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
                More
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-row gap-2">
            <li
              className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-extrabold">
              Sign In
            </li>
            <li
              className="hidden lg:inline hover:text-blue-600 hover:bg-white px-2 py-2 rounded-md text-sm font-extrabold">
              Sign Up
           </li>
          <button
              className="bg-red-500 hover:bg-red-800 rounded-md text-sm font-extrabold px-3 py-2">
              Post An Ad
          </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}