"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"

const Category =  () => {
    const router = useRouter()
    return (
        <div>
            <h1>This Is Category Page</h1><br /><br />
            <ul>
                <li> <Link href="/category/crypto"> CRYPTO</Link></li>
            </ul>
           
            
        </div>
    )
}

export default Category