"use client"

import Link from "next/link"
import React from "react"

const Products = () => {
    return(
        <div>
            <h1>This Is Products Page</h1>
            <Link href="/product/product1">Click To Show Product</Link> 
            
        </div>
    )
}
export default Products