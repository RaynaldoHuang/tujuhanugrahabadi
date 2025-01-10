'use client'

import { usePathname } from "next/navigation"

import Image from "next/image"
import Link from "next/link"

import logo from "@/public/logo.svg"

export default function Navigation() {
    const path = usePathname()

    return (
        <>
            {/* dekstop view */}
            <div className={`hidden lg:block ${path == '/' || path == '/about-us' ? "" : "bg-[#062236]"}`}> {/* Added logic to add background color to navbar */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between py-8">
                        <Image src={logo} alt="" className="w-28" />
                        <div className="flex font-ubuntu space-x-10 text-white mt-2">
                            <Link href={"/"}>Home</Link>
                            <Link href={""}>Services</Link>
                            <Link href={"/about-us"}>About Us</Link>
                            <Link href={"/products"}>Product</Link>
                            <Link href={""}>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}