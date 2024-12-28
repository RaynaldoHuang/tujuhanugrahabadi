import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.svg"
import shopee from "@/public/shopee.svg"
import tokped from "@/public/tokped.svg"
import instagram from "@/public/instagram.svg"
import wa from "@/public/wa.svg"

export default function Footer() {
    return (
        <>
            <div className="bg-[#062236]">
                <div className="lg:pt-16 pt-12 pb-6">
                    <div className="lg:mx-32 mx-6">
                        <div id="contact" className="lg:grid lg:grid-cols-2 lg:gap-2">
                            <div>
                                <div className="hidden lg:block">
                                    <Image src={logo} width={140} alt="" />
                                </div>

                                <div className="lg:hidden">
                                    <Image src={logo} width={120} alt="" />
                                </div>

                                <div className="flex-col">
                                    <div className="flex mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <p className="text-white font-ubuntu w-2/3 ms-3">Ruko G-Walk Citraland, Jl. Ruko Taman Gapura Blok W2 No.32, Lontar, Kec. Sambikerep, Kota Surabaya, Jawa Timur 60217 <br />(031) 57431015
                                        </p>
                                    </div>
                                </div>

                                <div className="flex mt-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p className="text-white font-ubuntu w-2/3 ms-3">Jl. Kebon Jeruk VII No.2A, RT.4/RW.5, Maphar, Kec. Taman Sari, Jakarta, Jawa Barat 11160<br />(021) 22683226</p>
                                </div>
                            </div>

                            <div className="flex lg:grid lg:grid-cols-2 lg:gap-12 gap-8 lg:px-10">
                                <div>
                                    <h1 className="text-white font-medium lg:text-2xl text-xl font-ubuntu">Quick Links</h1>
                                    <div className="flex flex-col mt-8 gap-y-4 font-ubuntu">
                                        <Link href={""} className="text-white lg:text-base text-sm">Home</Link>
                                        <Link href={""} className="text-white lg:text-base text-sm">Services</Link>
                                        <Link href={""} className="text-white lg:text-base text-sm">About Us</Link>
                                        <Link href={""} className="text-white lg:text-base text-sm">Product</Link>
                                        <Link href={""} className="text-white lg:text-base text-sm">Contact</Link>
                                    </div>
                                </div>

                                <div>
                                    <h1 className="text-white font-medium lg:text-2xl text-xl font-ubuntu">Find Us</h1>
                                    <div className="flex-col mt-7 gap-y-4 items-center font-ubuntu">
                                        <div className="flex">
                                            <Image src={shopee} alt="" className="me-4 mb-4 w-6 lg:w-7" />
                                            <Link href={"https://shopee.co.id/velureperfume"} className="text-white lg:text-base text-sm pt-1">Shopee</Link>
                                        </div>

                                        <div className="flex">
                                            <Image src={tokped} alt="" className="me-3 mb-4 w-6 lg:w-8" />
                                            <Link href={"https://www.tokopedia.com/velure-perfume"} className="text-white lg:text-base text-sm pt-1">Tokopedia</Link>
                                        </div>

                                        <div className="flex">
                                            <Image src={wa} alt="" className="me-3 w-6 mb-4 lg:w-7" />
                                            <Link href={"https://wa.me/+6282184267456"} className="text-white lg:text-base text-sm">+62 812 3456 9336</Link>
                                        </div>

                                        <div className="flex">
                                            <Image src={instagram} alt="" className="me-4 w-6 lg:w-7" />
                                            <Link href={"https://www.instagram.com/velureperfume"} className="text-white lg:text-base text-sm">@pt_tujuh_anugrah_abadi</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-1 border-white mt-16" />

                    <div>
                        <p className="text-white flex justify-center lg:text-sm text-xs mt-6 font-ubuntu">Ⓒ2024 All rights reserved. PT. Tujuh Anugrah Abadi</p>
                    </div>
                </div>
            </div>
        </>
    );
}