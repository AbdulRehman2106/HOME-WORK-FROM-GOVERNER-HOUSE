"use client"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Students = () => {
    const router = useRouter()
    return (
        <><h1>Students </h1>
        <h3><Link href="\students\studentName">click to show student name</Link></h3></>
    )
}

export default Students