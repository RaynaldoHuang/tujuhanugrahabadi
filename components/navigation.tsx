'use client'

import { usePathname } from "next/navigation"
import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import logo from "@/public/svg/logo.svg"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            {/* dekstop view */}
            <div className="hidden lg:block" >
                <div className="max-w-7xl mx-auto !z-50 absolute top-0 right-0 left-0 bg-transparent">
                    <div className="flex items-center justify-between py-8">
                        <Image src={logo} alt="" className="w-28" />
                        <div className="flex font-ubuntu space-x-10 text-white mt-2">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/products"}>Product</Link>
                            <Link href={"/about-us"}>About Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className="lg:hidden">
                <div className="mx-6 md:mx-10 absolute top-0 right-0 left-0 bg-transparent">
                    <div className="flex items-center justify-between py-8">
                        <Image src={logo} alt="" className="w-24 md:w-28" />
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? "true" : "false"}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? "absolute" : "hidden"} top-24 left-0 w-full bg-black z-10`} id="mobile-menu">
                <div className="space-y-1 px-6 py-4">
                    <Link
                        href="/"
                        className="text-white hover:bg-[#062236] hover:text-white block px-3 py-2 rounded-md text-sm md:text-base font-ubuntu"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="text-white hover:bg-[#062236] hover:text-white block px-3 py-2 rounded-md text-sm md:text-base font-ubuntu"
                        onClick={() => setIsOpen(false)}
                    >
                        Product
                    </Link>
                    <Link
                        href="/about-us"
                        className="text-white hover:bg-[#062236] hover:text-white block px-3 py-2 rounded-md text-sm md:text-base font-ubuntu"
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </Link>
                </div>
            </div>
        </>
    )
}