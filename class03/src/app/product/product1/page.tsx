"use client"
import { useRouter } from "next/navigation"
import React from "react"
import Link from "next/link"

export default function Product1 (){
    const router = useRouter()
    return(
        <><h1>Details about Product1</h1>
        <h3>laptop</h3></>
    )
}