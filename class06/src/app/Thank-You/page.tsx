import Link from "next/link";

export default function ThankYou(){
    return(
        <div className="bg-blue-100 min-h-screen">
            <h2 className="text-blue-600 text-6xl text-center font-extrabold pt-56 font-serif">Thank You For Shopping!!!</h2>
            <br />
            <p className="text-center pt-6 text-xl text-black font-extrabold">Your Order Will Be Delivered In 3 Bussinss Days...</p>

            <Link href="/">
            <div className="flex items-center justify-center pt-16">
                <button className="bg-red-500 hover:bg-red-700 text-white h-1/2 w-44 rounded-md text-center">Continue Shopping</button>
            </div>
            </Link>
            <br /><br /><br /><br />
        </div>
    )
}