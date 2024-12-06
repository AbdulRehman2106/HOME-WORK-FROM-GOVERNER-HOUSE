"use client"
import { useRouter } from "next/navigation"
import React from "react"
import Link from "next/link"
const StudentName = () => {
    const router = useRouter

    return(
        <section>
            <h1>I am student from Dynamic Route</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, ratione quas aspernatur, voluptas error id debitis autem at consectetur quidem nisi laudantium, distinctio asperiores incidunt corporis reprehenderit! Minima, maiores dignissimos?
            </p>
        </section>
    )
}
export default StudentName