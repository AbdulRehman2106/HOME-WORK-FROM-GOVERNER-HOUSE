"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

const Products = () => {
    const router = useRouter()
    return(
        <div>
            <h1>This Is Products Page</h1>
            <Link href="/product/product1">Click To Show Product</Link> 
            
        </div>
    )
}
export default Products