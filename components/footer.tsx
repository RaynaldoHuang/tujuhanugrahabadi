import Link from "next/link";
import Image from "next/image";

import logo from "@/public/svg/logo.svg"
import tokpedwhite from "@/public/svg/tokpedwhite.svg"
import shopeewhite from "@/public/svg/shopeewhite.svg"
import instagram from "@/public/svg/instagram.svg"
import wa from "@/public/svg/wa.svg"
import tiktokwhite from "@/public/svg/tiktokwhite.svg"

export default function Footer() {
    return (
        <>
            <div>
                <div className="bg-[#062236]">
                    <div className="lg:pt-16 pt-12 lg:max-w-7xl lg:mx-auto mx-6 md:mx-10">
                        <div>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="lg:size-8 size-20 md:size-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            <span className="text-white font-ubuntu lg:w-2/3 md:w-5/6 ms-3 lg:text-base text-sm">Ruko G-Walk Citraland, Jl. Ruko Taman Gapura Blok W2 No.32, Lontar, Kec. Sambikerep, Kota Surabaya, Jawa Timur 60217 <br /><p>031 57431015</p>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex mt-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="lg:size-8 size-14 md:size-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <span className="text-white font-ubuntu lg:w-2/3 md:w-5/6 ms-3 lg:text-base text-sm">Jl. Kebon Jeruk VII No.2A, RT.4/RW.5, Maphar, Kec. Taman Sari, Jakarta, Jawa Barat 11160<br /><p>021 22683226</p></span>
                                    </div>
                                </div>

                                <div className="flex lg:grid lg:grid-cols-2 lg:gap-12 gap-12 md:gap-32 mt-10 lg:mt-0">
                                    <div className="lg:pl-10">
                                        <h1 className="text-white font-medium lg:text-2xl text-xl font-ubuntu">Quick Links</h1>
                                        <div className="flex flex-col mt-8 gap-y-5 font-ubuntu">
                                            <Link href={""} className="text-white lg:text-base text-sm">Home</Link>
                                            <Link href={""} className="text-white lg:text-base text-sm">About Us</Link>
                                            <Link href={""} className="text-white lg:text-base text-sm">Product</Link>
                                        </div>
                                    </div>

                                    <div className="">
                                        <h1 className="text-white font-medium lg:text-2xl text-xl font-ubuntu">Find Us</h1>
                                        <div className="mt-7 gap-y-4 items-center font-ubuntu">
                                            <div className="flex">
                                                <Image src={shopeewhite} alt="" className="me-3 mb-5 w-6 lg:w-6" />
                                                <Link href={"https://shopee.co.id/superinkjkt"} className="text-white lg:text-base text-sm pt-1">Shopee</Link>
                                            </div>

                                            <div className="flex">
                                                <Image src={tokpedwhite} alt="" className="me-3 mb-5 w-6 lg:w-6" />
                                                <Link href={"https://www.tokopedia.com/superinkjkt"} className="text-white lg:text-base text-sm pt-1">Tokopedia</Link>
                                            </div>

                                            <div className="flex">
                                                <Image src={wa} alt="" className="me-3 w-6 mb-5 lg:w-6" />
                                                <Link href={"https://wa.me/081234569336"} className="text-white lg:text-base text-sm">+62 812 3456 9336</Link>
                                            </div>

                                            <div className="flex">
                                                <Image src={instagram} alt="" className="me-3 mb-5 w-6 lg:w-6" />
                                                <Link href={"https://www.instagram.com/pt_tujuh_anugrah_abadi"} className="text-white lg:text-base text-sm">Instagram</Link>
                                            </div>

                                            <div className="flex">
                                                <Image src={tiktokwhite} alt="" className="me-3 w-6 lg:w-6" />
                                                <Link href={"https://www.tiktok.com/@superinkjkt"} className="text-white lg:text-base text-sm">Tiktok</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-1 border-white mt-16" />

                    <div>
                        <p className="text-white flex justify-center lg:text-sm text-xs mt-6 font-ubuntu pb-6">Ⓒ2024 All rights reserved. PT. Tujuh Anugrah Abadi</p>
                    </div>
                </div>
            </div>
        </>
    );
}