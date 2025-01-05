'use client'

import { usePathname } from "next/navigation";

import Navigation from "./navigation";

import Link from "next/link"
import Image from "next/image"


import delivery from "@/public/delivery.svg"
import distribution from "@/public/distribution.svg"
import reponse from "@/public/response.svg"
import img1 from "@/public/img1.svg"
import img2 from "@/public/img2.svg"
import img3 from "@/public/img3.svg"
import check from "@/public/check.svg"
import hp from "@/public/hpac.svg"
import eps from "@/public/eps.svg"
import epsonprinter from "@/public/epsonprinter.svg"
import tintaepson from "@/public/tintaepson.svg"
import pitaaepson from "@/public/putaepson.svg"
import kertaslabel from "@/public/kertaslabel.svg"
import tokped from "@/public/tokped.svg"
import shopee from "@/public/shopee.svg"
import epson from "@/public/epson.svg"
import canon from "@/public/canon.svg"
import logitech from "@/public/Logitech.svg"
import hplogo from "@/public/hp.svg"
import kassen from "@/public/kassen.svg"

export default function Main() {
    const path = usePathname()

    return (
        <>
            <section>
                <div className="bg-[url('/heroimage.svg')] bg-no-repeat bg-cover h-screen">
                    <Navigation />
                    <div className="max-w-7xl mx-auto mt-32"> {/* Change width to max-w-7xl & mx-auto */}
                        <h1 className="text-white font-bold font-ubuntu text-5xl w-7/12 leading-normal">The Most Comprehensive Printing & Technology Solutions in Indonesia</h1>
                        <p className="text-white font-normal w-2/3 font-ubuntu text-sm mt-8 leading-loose mb-16">PT. Tujuh Anugrah Abadi, your trusted partner for ink, printers, and procurement solutions across Indonesia.</p>
                        <div className="pb-48">
                            <Link href={""} className="bg-[#1D2088] text-white font-ubuntu py-4 px-8">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:max-w-7xl mx-auto my-20 bg-red-100">
                    <div className="grid grid-cols-3">
                        <div className="flex-col justify-items-center">
                            <Image src={distribution} alt="" className="mb-4"></Image>
                            <h1 className="text-xl font-bold font-ubuntu">Extensive Distribution Network</h1>
                            <p className="text-[#AAAAAA] text-center mt-3">Reaching various locations with an extensive<br /> distribution network.</p>
                        </div>
                        <div className="flex-col justify-items-center">
                            <Image src={delivery} alt="" className="mb-4"></Image>
                            <h1 className="text-xl font-bold font-ubuntu">Fast Delivery</h1>
                            <p className="text-[#AAAAAA] text-center mt-3">On-time delivery to ensure that your needs<br />are met promptly and efficiently.</p>
                        </div>
                        <div className="flex-col justify-items-center">
                            <Image src={reponse} alt="" className="mb-4"></Image>
                            <h1 className="text-xl font-bold font-ubuntu">Quick Response</h1>
                            <p className="text-[#AAAAAA] text-center mt-3 font-ubuntu">Immediate response to every inquiry or request,<br />ensuring quick and efficient assistance.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#F5F5F5]">
                    <div className="py-20 mx-32">
                        <div className="flex-col justify-items-center">
                            <h1 className="text-4xl font-bold font-ubuntu">Our Services</h1>
                            <p className="text-[#AAAAAA] text-center mt-4 w-1/2 font-ubuntu leading-normal">PT. Tujuh Anugrah Abadi stands as a dedicated business partner for entrepreneurs who are enthusiastic and optimistic about achieving success in their ventures.</p>
                        </div>

                        <div className="flex mt-16 items-center">
                            <div className="w-1/3">
                                <Image src={img1} alt="" className="w-96" />
                            </div>
                            <div className="w-2/3">
                                <h1 className="text-4xl font-bold font-ubuntu mb-6 leading-normal">Outstanding Service that<br />Prioritizes Customer Satisfaction</h1>
                                <p className="text-[#AAAAAA] mt-4 font-ubuntu leading-normal">
                                    Our ink and toner are made from high-quality materials designed to deliver the best results. Every product is 100% authentic and sourced directly from trusted manufacturers. With guaranteed quality, you can rely on maximum performance for all your printing needs.</p>
                                <div className="mt-6">
                                    <div className="flex">
                                        <Image src={check} alt="" className="me-4" />
                                        <p className="text-[#AAAAAA] font-ubuntu">Guaranteed 100% Authentic</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <Image src={check} alt="" className="me-4" />
                                        <p className="text-[#AAAAAA] font-ubuntu">Directly Sourced from Trusted Manufacturers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-16 items-center">
                            <div className="w-2/3">
                                <h1 className="text-4xl font-bold font-ubuntu mb-6 leading-normal">Solid Teamwork to Achieve<br />the Best Results
                                </h1>
                                <p className="text-[#AAAAAA] mt-4 font-ubuntu leading-normal">
                                    Fast and responsive assistance for customer inquiries and complaints. We offer a 100% customer satisfaction guarantee for all our products and services. Your trust is our top priority in delivering the best service.</p>
                                <div className="mt-6">
                                    <div className="flex">
                                        <Image src={check} alt="" className="me-4" />
                                        <p className="text-[#AAAAAA] font-ubuntu">Quick assistance for customer inquiries and complaints</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <Image src={check} alt="" className="me-4" />
                                        <p className="text-[#AAAAAA] font-ubuntu">Responsive to customer needs and issues</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 flex justify-end">
                                <Image src={img2} alt="" className="w-96" />
                            </div>
                        </div>

                        <div className="flex mt-16 items-center">
                            <div className="w-1/3">
                                <Image src={img3} alt="" className="w-96" />
                            </div>
                            <div className="w-2/3">
                                <h1 className="text-4xl font-bold font-ubuntu mb-6 leading-normal">Competitive Prices for Our Products,<br />Ensuring Affordability</h1>
                                <p className="text-[#AAAAAA] mt-4 font-ubuntu leading-normal">
                                    We offer competitive prices on all our products, ensuring that quality is maintained without compromising affordability. Each product is designed to provide added value to customers at a budget-friendly price. With competitive pricing, we are committed to delivering efficient and cost-effective solutions for your needs.</p>
                                <div className="mt-6">
                                    <div className="flex">
                                        <Image src={check} alt="" className="me-4" />
                                        <p className="text-[#AAAAAA] font-ubuntu">Offering competitive prices on all products</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <Image src={check} alt="" className="me-4" />
                                        <p className="text-[#AAAAAA] font-ubuntu">Quality is maintained without compromising affordability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[url('/heroimage1.svg')] bg-no-repeat bg-cover">
                    <div className="flex items-center">
                        <div className="mx-32 py-20 flex items-center">
                            <div>
                                <p className="text-white font-normal font-ubuntu mt-8 leading-loose">Our Achievement</p>
                                <h1 className="text-white font-bold font-ubuntu text-5xl w-3/4 leading-normal">Our Achievements: Trusted by Over 2,000 Clients Across 88 Cities</h1>
                                <p className="text-white font-normal w-2/3 font-ubuntu text-sm mt-8 leading-loose">With over 2,000 clients across 88 cities, PT. Tujuh Anugrah Abadi continues to set the standard in providing high-quality products and services in ink, printers, and procurement solutions.</p>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-col me-12 justify-items-center">
                                    <Image src={hp} alt="" className="w-[500px]" />
                                    <p className="text-white font-bold font-ubuntu mt-8 leading-loose text-lg">HP Partner Awards 2021</p>
                                    <p className="text-white font-ubuntu leading-loose">Best Supplies Growth</p>
                                </div>
                                <div className="flex-col justify-items-center">
                                    <Image src={eps} alt="" className="w-[500px]" />
                                    <p className="text-white font-bold font-ubuntu mt-8 leading-loose text-lg">EPR Best Achievement FY17</p>
                                    <p className="text-white font-ubuntu leading-loose">Dubai - Abu Dhabi 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="py-20 mx-32">
                    <div className="flex-col justify-items-center">
                        <h1 className="text-4xl font-bold font-ubuntu">Our Products</h1>
                        <p className="text-[#AAAAAA] text-center mt-4 w-1/2 font-ubuntu leading-normal mb-10">Discover premium ink, printers, and procurement solutions tailored to deliver exceptional value and efficiency for your business. To explore more products, you can visit our marketplace.</p>
                    </div>

                    <div className="mb-20 flex-col flex-col justify-items-center">
                        <div className="flex space-x-4">
                            <Link href={""} className="flex font-ubuntu text-lg font-medium bg-[#1D2088] text-white py-3 px-6 items-center">
                                <Image src={tokped} alt="" className="me-2 w-9" />
                                Tokopedia
                            </Link>

                            <Link href={""} className="flex font-ubuntu text-lg font-medium bg-[#1D2088] text-white py-3 px-6 items-center">
                                <Image src={shopee} alt="" className="me-3 w-8" />
                                Shopee
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-10">
                        <div className="bg-[#F5F5F5] px-6 py-6 flex-col justify-items-center">
                            <Image src={epsonprinter} alt="" />
                            <h1 className="font-ubuntu font-normal text-xl mt-3 mb-2 font-medium">Printer EPSON L121</h1>
                            <p className="text-center text-[#AAAAAA] text-sm mb-8 line-clamp-2">
                                Expect great efficiency when printing with the EcoTank L121.
                            </p>
                            <Link href={""} className="bg-[#1D2088] text-white py-2 px-4">Shop Now</Link>
                        </div>

                        <div className="bg-[#F5F5F5] px-6 py-6 flex-col justify-items-center">
                            <Image src={tintaepson} alt="" />
                            <h1 className="font-ubuntu font-normal text-xl mt-3 mb-2 font-medium">Tinta EPSON OO3 Black</h1>
                            <p className="text-center text-[#AAAAAA] text-sm mb-8 line-clamp-2">
                                Epson's new Eco Tank replacement ink bottles offer thousands of vivid prints at an ultra low cost.
                            </p>
                            <Link href={""} className="bg-[#1D2088] text-white py-2 px-4">Shop Now</Link>
                        </div>

                        <div className="bg-[#F5F5F5] px-6 py-6 flex-col justify-items-center">
                            <Image src={pitaaepson} alt="" />
                            <h1 className="font-ubuntu font-normal text-xl mt-3 mb-2 font-medium">Pita EPSON LX300</h1>
                            <p className="text-center text-[#AAAAAA] text-sm mb-8 line-clamp-2">
                                A Ribbon Cartridge is a specialized cartridge designed for Dot Matrix printers.
                            </p>
                            <Link href={""} className="bg-[#1D2088] text-white py-2 px-4">Shop Now</Link>
                        </div>

                        <div className="bg-[#F5F5F5] px-6 py-6 flex-col justify-items-center">
                            <Image src={kertaslabel} alt="" />
                            <h1 className="font-ubuntu font-normal text-xl mt-3 mb-2 font-medium">Kertas Label Thermal</h1>
                            <p className="text-center text-[#AAAAAA] text-sm mb-8 line-clamp-2">
                                There is no need to use a ribbon anymore because the paper itself contains chemical ink, requiring only heat to activate it in the thermal printing method.
                            </p>
                            <Link href={""} className="bg-[#1D2088] text-white py-2 px-4">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#F5F5F5]">
                    <div className="mx-32 py-16">
                        <div className="flex-col justify-items-center">
                            <h1 className="text-3xl font-bold font-ubuntu">Company Partner</h1>
                        </div>

                        <div className="grid grid-cols-5 flex justify-items-center items-center mt-16">
                            <div className="">
                                <Image alt="" src={logitech} className="w-40" />
                            </div>
                            <div className="">
                                <Image alt="" src={hplogo} className="w-20" />
                            </div>
                            <div className="">
                                <Image alt="" src={kassen} className="w-40" />
                            </div>
                            <div className="">
                                <Image alt="" src={epson} className="w-36" />
                            </div>
                            <div className="">
                                <Image alt="" src={canon} className="w-40" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}