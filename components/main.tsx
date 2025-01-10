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
import tokped from "@/public/tokped.svg"
import shopee from "@/public/shopee.svg"
import epson from "@/public/epson.svg"
import canon from "@/public/canon.svg"
import logitech from "@/public/Logitech.svg"
import hplogo from "@/public/hp.svg"
import kassen from "@/public/kassen.svg"

export default function Main() {

    return (
        <>
            {/* Hero Section */}
            <section>
                <div className="lg:bg-[url('/heroimage.svg')] bg-[url('/mobilehero.svg')] bg-no-repeat bg-cover h-screen">
                    <Navigation />
                    <div className="lg:max-w-8xl lg:mx-auto lg:mt-32 mt-10 mx-6"> {/* Change width to max-w-8xl & mx-auto */}
                        <h1 className="text-white font-bold font-ubuntu lg:text-5xl text-2xl lg:w-[650px] leading-normal lg:leading-normal text-center lg:text-left">The Most Comprehensive Printing & Technology Solutions in Indonesia</h1>
                        <p className="text-white font-normal lg:w-4/12 font-ubuntu lg:text-sm text-xs lg:mt-8 mt-4 leading-loose lg:mb-16 mb-12 text-center lg:text-left">PT. Tujuh Anugrah Abadi, your trusted partner for ink, printers, and procurement solutions across Indonesia.</p>
                        <div className="lg:pb-48 text-center lg:text-left">
                            <Link href={""} className="bg-[#1D2088] text-white font-ubuntu lg:py-4 lg:px-8 lg:text-base text-sm py-4 px-6">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section>
                <div className="lg:max-w-8xl lg:mx-auto my-20 mx-6">
                    <div className="lg:grid grid-cols-3">
                        <div className="flex flex-col items-center mb-10 lg:mb-0">
                            <Image src={distribution} alt="" className="mb-4"></Image>
                            <h1 className="lg:text-xl font-bold font-ubuntu">Extensive Distribution Network</h1>
                            <p className="text-[#AAAAAA] lg:text-base text-sm text-center lg:mt-3 mt-2">Reaching various locations with an extensive<br /> distribution network.</p>
                        </div>
                        <div className="flex flex-col items-center mb-10 lg:mb-0">
                            <Image src={delivery} alt="" className="mb-4"></Image>
                            <h1 className="lg:text-xl font-bold font-ubuntu">Fast Delivery</h1>
                            <p className="text-[#AAAAAA] lg:text-base text-sm text-center mt-3">On-time delivery to ensure that your needs<br />are met promptly and efficiently.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={reponse} alt="" className="mb-4"></Image>
                            <h1 className="lg:text-xl font-bold font-ubuntu">Quick Response</h1>
                            <p className="text-[#AAAAAA] lg:text-base text-sm text-center mt-3 font-ubuntu">Immediate response to every inquiry or request,<br />ensuring quick and efficient assistance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section>
                <div className="bg-[#F5F5F5]">
                    <div className="lg:py-20 py-16 lg:max-w-8xl lg:mx-auto mx-6">
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-4xl text-3xl font-bold font-ubuntu">Our Services</h1>
                            <p className="text-[#AAAAAA] text-center mt-4 lg:w-1/2 font-ubuntu leading-normal lg:text-base text-xs">PT. Tujuh Anugrah Abadi stands as a dedicated business partner for entrepreneurs who are enthusiastic and optimistic about achieving success in their ventures.</p>
                        </div>

                        <div className="lg:flex lg:mt-20 mt-12 items-center">
                            <div className="lg:w-1/3">
                                <Image src={img1} alt="" className="lg:w-96" />
                            </div>
                            <div className="lg:w-2/3">
                                <h1 className="lg:text-4xl text-xl font-bold font-ubuntu lg:mb-6 mb-4 lg:leading-normal mt-4 lg:mt-0">Outstanding Service that<br />Prioritizes Customer Satisfaction</h1>
                                <p className="text-[#AAAAAA] lg:mt-4 font-ubuntu leading-normal lg:text-base text-xs">
                                    Our ink and toner are made from high-quality materials designed to deliver the best results. Every product is 100% authentic and sourced directly from trusted manufacturers. With guaranteed quality, you can rely on maximum performance for all your printing needs.</p>
                                <div className="mt-6">
                                    <div className="flex items-center">
                                        <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                        <p className="text-[#AAAAAA] lg:text-base text-xs font-ubuntu">Guaranteed 100% Authentic</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                        <p className="text-[#AAAAAA] lg:text-base text-xs font-ubuntu">Directly Sourced from Trusted Manufacturers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* dekstop view */}
                        <div className="hidden lg:block">
                            <div className="lg:flex mt-16 items-center">
                                <div className="w-2/3">
                                    <h1 className="text-4xl font-bold font-ubuntu mb-6 leading-normal">Solid Teamwork to Achieve<br />the Best Results
                                    </h1>
                                    <p className="text-[#AAAAAA] mt-4 font-ubuntu leading-normal">
                                        Fast and responsive assistance for customer inquiries and complaints. We offer a 100% customer satisfaction guarantee for all our products and services. Your trust is our top priority in delivering the best service.</p>
                                    <div className="mt-6">
                                        <div className="flex items-center">
                                            <Image src={check} alt="" className="me-4" />
                                            <p className="text-[#AAAAAA] font-ubuntu">Quick assistance for customer inquiries and complaints</p>
                                        </div>
                                        <div className="flex mt-3 items-center">
                                            <Image src={check} alt="" className="me-4" />
                                            <p className="text-[#AAAAAA] font-ubuntu">Responsive to customer needs and issues</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-end">
                                    <Image src={img2} alt="" className="w-96" />
                                </div>
                            </div>

                        </div>

                        {/* mobile view */}
                        <div className="lg:hidden">
                            <div className="lg:flex mt-16 items-center">
                                <div className="lg:w-1/3 flex lg:justify-end">
                                    <Image src={img2} alt="" className="w-96" />
                                </div>
                                <div className="lg:w-2/3">
                                    <h1 className="lg:text-4xl text-xl font-bold font-ubuntu lg:mb-6 mt-4 leading-normal">Solid Teamwork to Achieve<br />the Best Results
                                    </h1>
                                    <p className="text-[#AAAAAA] mt-4 font-ubuntu leading-normal lg:text-base text-xs">
                                        Fast and responsive assistance for customer inquiries and complaints. We offer a 100% customer satisfaction guarantee for all our products and services. Your trust is our top priority in delivering the best service.</p>
                                    <div className="mt-6">
                                        <div className="flex items-center">
                                            <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                            <p className="text-[#AAAAAA] font-ubuntu lg:text-base text-xs">Quick assistance for customer inquiries and complaints</p>
                                        </div>
                                        <div className="flex mt-3 items-center">
                                            <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                            <p className="text-[#AAAAAA] font-ubuntu lg:text-base text-xs">Responsive to customer needs and issues</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:flex mt-16 items-center">
                            <div className="lg:w-1/3">
                                <Image src={img3} alt="" className="w-96" />
                            </div>
                            <div className="lg:w-2/3">
                                <h1 className="lg:text-4xl text-xl font-bold font-ubuntu lg:mb-6 mt-4 lg:leading-normal">Competitive Prices for Our Products, Ensuring Affordability</h1>
                                <p className="text-[#AAAAAA] mt-4 font-ubuntu leading-normal lg:text-base text-xs">
                                    We offer competitive prices on all our products, ensuring that quality is maintained without compromising affordability. Each product is designed to provide added value to customers at a budget-friendly price. With competitive pricing, we are committed to delivering efficient and cost-effective solutions for your needs.</p>
                                <div className="mt-6">
                                    <div className="flex items-center">
                                        <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                        <p className="text-[#AAAAAA] font-ubuntu lg:text-base text-xs">Offering competitive prices on all products</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                        <p className="text-[#AAAAAA] font-ubuntu lg:text-base text-xs">Quality is maintained without compromising affordability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:bg-[url('/heroimage1.svg')] bg-[url('/heroimage2.svg')] bg-no-repeat bg-cover">
                    <div className="lg:flex items-center">
                        <div className="lg:py-20 py-14 lg:max-w-8xl lg:mx-auto lg:flex items-center mx-6">
                            <div>
                                <p className="text-white font-normal font-ubuntu lg:mt-8 mb-2 lg:mb-0 leading-loose">Our Achievement</p>
                                <h1 className="text-white font-bold font-ubuntu lg:text-5xl text-2xl lg:w-3/4 lg:leading-normal">Our Achievements: Trusted by Over 2,000 Clients Across 88 Cities</h1>
                                <p className="text-white font-normal lg:w-2/3 font-ubuntu lg:text-sm text-xs lg:mt-8 mt-4 lg:leading-loose leading-loose">With over 2,000 clients across 88 cities, PT. Tujuh Anugrah Abadi continues to set the standard in providing high-quality products and services in ink, printers, and procurement solutions.</p>
                            </div>

                            <div className="flex items-center mt-8">
                                <div className="flex-col lg:me-12 me-8 lg:justify-items-center">
                                    <Image src={hp} alt="" className="w-[500px]" />
                                    <p className="text-white font-bold font-ubuntu lg:mt-8 mt-4 lg:leading-loose lg:text-lg">HP Partner Awards 2021</p>
                                    <p className="text-white font-ubuntu lg:leading-loose lg:mt-0 mt-2 lg:text-base text-xs">Best Supplies Growth</p>
                                </div>
                                <div className="flex-col lg:justify-items-center">
                                    <Image src={eps} alt="" className="w-[500px]" />
                                    <p className="text-white font-bold font-ubuntu lg:mt-8 mt-4 lg:leading-loose lg:text-lg">EPR Best Achievement</p>
                                    <p className="text-white font-ubuntu lg:leading-loose lg:mt-0 mt-2 lg:text-base text-xs">Dubai - Abu Dhabi 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:py-20 py-14 lg:max-w-8xl lg:mx-auto mx-6">
                    <div className="flex flex-col items-center">
                        <h1 className="lg:text-4xl text-3xl font-bold font-ubuntu">Our Products</h1>
                        <p className="text-[#AAAAAA] text-center mt-4 lg:w-2/3 font-ubuntu lg:leading-normal mb-10 lg:text-base text-xs">Discover premium ink, printers, and procurement solutions tailored to deliver exceptional value and efficiency for your business. To explore more products, you can visit our marketplace.</p>
                    </div>

                    <div className="lg:mb-20 mb-14 flex flex-col items-center">
                        <div className="flex space-x-4">
                            <Link href={""} className="flex font-ubuntu lg:text-lg text-sm font-medium bg-[#1D2088] text-white lg:py-3 py-2 lg:px-6 px-5 items-center">
                                <Image src={tokped} alt="" className="me-2 lg:w-9 w-7" />
                                Tokopedia
                            </Link>

                            <Link href={""} className="flex font-ubuntu lg:text-lg text-sm font-medium bg-[#1D2088] text-white lg:py-3 py-2 lg:px-6 px-5 items-center">
                                <Image src={shopee} alt="" className="me-3 lg:w-9 w-6" />
                                Shopee
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="lg:grid lg:grid-cols-4 lg:gap-10 grid grid-cols-2 gap-4">
                            <div className="bg-[#F5F5F5] lg:px-6 px-3 lg:py-6 py-4 flex flex-col items-center">
                                <Image src={epsonprinter} alt="" />
                                <h1 className="font-ubuntu font-normal lg:text-xl text-sm mt-3 mb-2 font-medium text-center">Printer EPSON L121</h1>
                                <p className="text-center text-[#AAAAAA] lg:text-sm text-xs mb-8 line-clamp-2">
                                    Expect great efficiency when printing with the EcoTank L121.
                                </p>
                                <Link href={""} className="bg-[#1D2088] lg:text-base text-sm text-white py-2 px-4">Shop Now</Link>
                            </div>

                            <div className="bg-[#F5F5F5] lg:px-6 px-3 lg:py-6 py-4 flex flex-col items-center">
                                <Image src={epsonprinter} alt="" />
                                <h1 className="font-ubuntu font-normal lg:text-xl text-sm mt-3 mb-2 font-medium text-center">Printer EPSON L121</h1>
                                <p className="text-center text-[#AAAAAA] lg:text-sm text-xs mb-8 line-clamp-2">
                                    Expect great efficiency when printing with the EcoTank L121.
                                </p>
                                <Link href={""} className="bg-[#1D2088] lg:text-base text-sm text-white py-2 px-4">Shop Now</Link>
                            </div>

                            <div className="bg-[#F5F5F5] lg:px-6 px-3 lg:py-6 py-4 flex flex-col items-center">
                                <Image src={epsonprinter} alt="" />
                                <h1 className="font-ubuntu font-normal lg:text-xl text-sm mt-3 mb-2 font-medium text-center">Printer EPSON L121</h1>
                                <p className="text-center text-[#AAAAAA] lg:text-sm text-xs mb-8 line-clamp-2">
                                    Expect great efficiency when printing with the EcoTank L121.
                                </p>
                                <Link href={""} className="bg-[#1D2088] lg:text-base text-sm text-white py-2 px-4">Shop Now</Link>
                            </div>

                            <div className="bg-[#F5F5F5] lg:px-6 px-3 lg:py-6 py-4 flex flex-col items-center">
                                <Image src={epsonprinter} alt="" />
                                <h1 className="font-ubuntu font-normal lg:text-xl text-sm mt-3 mb-2 font-medium text-center">Printer EPSON L121</h1>
                                <p className="text-center text-[#AAAAAA] lg:text-sm text-xs mb-8 line-clamp-2">
                                    Expect great efficiency when printing with the EcoTank L121.
                                </p>
                                <Link href={""} className="bg-[#1D2088] lg:text-base text-sm text-white py-2 px-4">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#F5F5F5]">
                    <div className="max-w-8xl lg:mx-auto lg:py-16 py-10 mx-6">
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-3xl text-xl font-bold font-ubuntu">Company Partner</h1>
                        </div>

                        <div className="lg:grid lg:grid-cols-5 flex justify-items-center items-center lg:mt-16 mt-8 space-x-4 lg:space-x-0">
                            <div className="flex">
                                <Image alt="" src={logitech} className="w-40" />
                            </div>
                            <div className="flex">
                                <Image alt="" src={hplogo} className="w-20" quality={100} />
                            </div>
                            <div className="">
                                <Image alt="" src={kassen} className="w-40" quality={100} />
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