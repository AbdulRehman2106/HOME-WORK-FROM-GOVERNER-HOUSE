"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"

export default function Navbar (){
    const router = useRouter()
    return(
        <div className="bg-yellow-300 font-extrabold text-black">
            
                <ul>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/category">Category</Link></li>
                    <li><Link href="/product">Product</Link></li>
                    <li><Link href="/students">Student</Link></li>
                </ul>
        </div>
    )
}
