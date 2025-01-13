'use client'

import Link from "next/link"
import Image from "next/image"

import delivery from "@/public/svg/delivery.svg"
import distribution from "@/public/svg/distribution.svg"
import reponse from "@/public/svg/response.svg"
import img1 from "@/public/svg/img1.svg"
import img2 from "@/public/svg/img2.svg"
import img3 from "@/public/svg/img3.svg"
import check from "@/public/svg/check.svg"
import hp from "@/public/png/hpac.png"
import eps from "@/public/png/eps.png"
import epsonprinter from "@/public/svg/epsonprinter.svg"
import tokped from "@/public/svg/tokped.svg"
import shopee from "@/public/svg/shopee.svg"
import epson from "@/public/svg/epson.svg"
import canon from "@/public/svg/canon.svg"
import logitech from "@/public/svg/Logitech.svg"
import hplogo from "@/public/svg/hp.svg"
import kassen from "@/public/svg/kassen.svg"
import { FloatingWhatsApp } from "react-floating-whatsapp"

export default function Main() {
    return (
        <>
            {/* Hero Section */}
            <section>
                <div className="lg:bg-[url('/svg/heroimage.svg')] bg-[url('/svg/mobilehero.svg')] md:bg-[url('/svg/herotablet.svg')] bg-black bg-no-repeat bg-cover h-screen lg:pt-48 pt-60 md:pt-80">
                    <div className="lg:max-w-7xl lg:mx-auto mx-6 md:mx-10 md:flex md:flex-col md:items-center lg:items-start">
                        <h1 className="text-white font-bold font-ubuntu lg:text-5xl md:text-6xl text-3xl lg:w-[650px] leading-normal lg:leading-normal md:leading-normal text-center lg:text-left">The Most Comprehensive Printing & Technology Solutions in Indonesia</h1>
                        <p className="text-white font-normal lg:w-4/12 font-ubuntu lg:text-sm md:text-lg md:w-5/6 text-sm lg:mt-8 mt-4 lg:leading-loose md:leading-loose leading-normal lg:mb-16 mb-12 text-center lg:text-left">PT. Tujuh Anugrah Abadi, your trusted partner for ink, printers, and procurement solutions across Indonesia.</p>
                        <div className="lg:pb-48 text-center lg:text-left">
                            <Link href={""} className="bg-[#1D2088] text-white font-ubuntu lg:py-4 lg:px-8 lg:text-base text-sm py-4 px-6">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section>
                <div className="lg:max-w-7xl lg:mx-auto my-20 mx-6 md:mx-10">
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
                    <div className="lg:py-20 py-16 lg:max-w-7xl lg:mx-auto mx-6 md:mx-10">
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-4xl text-3xl font-bold font-ubuntu">Our Services</h1>
                            <p className="text-[#AAAAAA] text-center mt-4 lg:w-1/2 md:w-5/6 font-ubuntu lg:leading-normal md:leading-normal leading-normal lg:text-base md:text-sm text-sm">PT. Tujuh Anugrah Abadi stands as a dedicated business partner for entrepreneurs who are enthusiastic and optimistic about achieving success in their ventures.</p>
                        </div>

                        <div className="lg:flex md:flex lg:mt-20 mt-12 items-center">
                            <div className="lg:w-1/3 md:w-1/3 md:me-10 lg:me-0">
                                <Image src={img1} alt="" className="lg:w-96" />
                            </div>
                            <div className="lg:w-2/3 md:w-2/3">
                                <h1 className="lg:text-4xl md:text-2xl text-xl font-bold font-ubuntu lg:mb-6 mb-4 lg:leading-normal mt-4 md:mt-0 lg:mt-0">Outstanding Service that<br />Prioritizes Customer Satisfaction</h1>
                                <p className="text-[#AAAAAA] lg:mt-4 font-ubuntu leading-normal lg:text-base text-sm">
                                    Our ink and toner are made from high-quality materials designed to deliver the best results. Every product is 100% authentic and sourced directly from trusted manufacturers. With guaranteed quality, you can rely on maximum performance for all your printing needs.</p>
                                <div className="mt-6">
                                    <div className="flex items-center">
                                        <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                        <p className="text-[#AAAAAA] lg:text-base text-sm font-ubuntu">Guaranteed 100% Authentic</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                        <p className="text-[#AAAAAA] lg:text-base text-sm font-ubuntu">Directly Sourced from Trusted Manufacturers</p>
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
                            <div className="lg:flex md:flex mt-16 items-center">
                                <div className="lg:w-1/3 md:w-1/3 flex lg:justify-end md:me-10 lg:me-0">
                                    <Image src={img2} alt="" className="w-96" />
                                </div>
                                <div className="lg:w-2/3 md:w-2/3">
                                    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold font-ubuntu lg:mb-6 md:mt-0 mt-4 leading-normal">Solid Teamwork to Achieve<br />the Best Results
                                    </h1>
                                    <p className="text-[#AAAAAA] mt-4 font-ubuntu leading-normal lg:text-base text-sm">
                                        Fast and responsive assistance for customer inquiries and complaints. We offer a 100% customer satisfaction guarantee for all our products and services. Your trust is our top priority in delivering the best service.</p>
                                    <div className="mt-6">
                                        <div className="flex items-center">
                                            <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                            <p className="text-[#AAAAAA] font-ubuntu lg:text-base text-sm">Quick assistance for customer inquiries and complaints</p>
                                        </div>
                                        <div className="flex mt-3 items-center">
                                            <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                            <p className="text-[#AAAAAA] font-ubuntu lg:text-base text-sm">Responsive to customer needs and issues</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:flex md:flex mt-16 items-center">
                            <div className="lg:w-1/3 md:w-1/3 md:me-10 lg:me-0">
                                <Image src={img3} alt="" className="w-96" />
                            </div>
                            <div className="lg:w-2/3 md:w-2/3">
                                <h1 className="lg:text-4xl md:text-2xl text-xl font-bold font-ubuntu lg:mb-6 md:mt-0 mt-4 lg:leading-normal">Competitive Prices for Our Products, Ensuring Affordability</h1>
                                <p className="text-[#AAAAAA] mt-4 font-ubuntu leading-normal lg:text-base text-sm">
                                    We offer competitive prices on all our products, ensuring that quality is maintained without compromising affordability. Each product is designed to provide added value to customers at a budget-friendly price. With competitive pricing, we are committed to delivering efficient and cost-effective solutions for your needs.</p>
                                <div className="mt-6">
                                    <div className="flex items-center">
                                        <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                        <p className="text-[#AAAAAA] font-ubuntu lg:text-base text-sm">Offering competitive prices on all products</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <Image src={check} alt="" className="me-4 lg:w-6 w-5" />
                                        <p className="text-[#AAAAAA] font-ubuntu lg:text-base text-sm">Quality is maintained without compromising affordability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:bg-[url('/svg/heroimage1.svg')] bg-[url('/svg/heroimage2.svg')] bg-no-repeat bg-cover">
                    <div className="lg:flex items-center">
                        <div className="lg:py-20 py-14 lg:max-w-7xl lg:mx-auto lg:flex items-center md:mx-10 mx-6">
                            <div>
                                <p className="text-white font-normal font-ubuntu lg:mt-8 mb-2 lg:mb-0 leading-loose">Our Achievement</p>
                                <h1 className="text-white font-bold font-ubuntu lg:text-5xl text-2xl lg:w-3/4 md:w-3/4 lg:leading-normal">Our Achievements: Trusted by Over 2,000 Clients Across 88 Cities</h1>
                                <p className="text-white font-normal lg:w-2/3 md:w-2/3 font-ubuntu lg:text-sm text-sm lg:mt-8 mt-4 lg:leading-loose leading-normal">With over 2,000 clients across 88 cities, PT. Tujuh Anugrah Abadi continues to set the standard in providing high-quality products and services in ink, printers, and procurement solutions.</p>
                            </div>

                            <div className="flex items-center mt-8">
                                <div className="flex-col lg:me-12 me-8 lg:justify-items-center">
                                    <Image src={hp} alt="" className="w-[500px]" />
                                    <p className="text-white font-bold font-ubuntu lg:mt-8 mt-4 lg:leading-loose lg:text-lg md:text-xl">HP Partner Awards 2021</p>
                                    <p className="text-white font-ubuntu lg:leading-loose lg:mt-0 mt-2 lg:text-base md:text-sm text-xs">Best Supplies Growth</p>
                                </div>
                                <div className="flex-col lg:justify-items-center">
                                    <Image src={eps} alt="" className="w-[500px]" />
                                    <p className="text-white font-bold font-ubuntu lg:mt-8 mt-4 lg:leading-loose lg:text-lg md:text-xl">EPR Best Achievement</p>
                                    <p className="text-white font-ubuntu lg:leading-loose lg:mt-0 mt-2 lg:text-base  text-xs">Dubai - Abu Dhabi 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:py-20 py-14 lg:max-w-7xl lg:mx-auto mx-6 md:mx-10">
                    <div className="flex flex-col items-center">
                        <h1 className="lg:text-4xl text-3xl font-bold font-ubuntu">Our Products</h1>
                        <p className="text-[#AAAAAA] text-center mt-4 lg:w-2/3 font-ubuntu lg:leading-normal mb-10 lg:text-base md:text-sm text-sm md:w-5/6">Discover premium ink, printers, and procurement solutions tailored to deliver exceptional value and efficiency for your business. To explore more products, you can visit our marketplace.</p>
                    </div>

                    <div className="lg:mb-20 mb-14 flex flex-col items-center">
                        <div className="flex space-x-4">
                            <Link href={""} className="flex font-ubuntu lg:text-lg text-sm font-medium bg-[#1D2088] text-white lg:py-3 py-2 lg:px-6 px-5 items-center">
                                <Image src={tokped} alt="" className="me-4 lg:w-6 w-7" />
                                Tokopedia
                            </Link>

                            <Link href={""} className="flex font-ubuntu lg:text-lg text-sm font-medium bg-[#1D2088] text-white lg:py-3 py-2 lg:px-6 px-5 items-center">
                                <Image src={shopee} alt="" className="me-4 lg:w-6 w-7" />
                                Shopee
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="lg:grid lg:grid-cols-4 gap-4 grid grid-cols-2">
                            <div className="bg-[#F5F5F5] lg:px-6 px-3 lg:py-6 py-4 flex flex-col items-center">
                                <Image src={epsonprinter} alt="" />
                                <h1 className="font-ubuntu font-normal lg:text-xl text-sm mt-3 mb-2 text-center">Printer EPSON L121</h1>
                                <p className="text-center text-[#AAAAAA] lg:text-sm text-xs mb-5 line-clamp-2">
                                    Expect great efficiency when printing with the EcoTank L121.
                                </p>
                                <Link href={""} className="bg-[#1D2088] lg:text-base text-sm text-white py-2 px-4">Shop Now</Link>
                            </div>

                            <div className="bg-[#F5F5F5] lg:px-6 px-3 lg:py-6 py-4 flex flex-col items-center">
                                <Image src={epsonprinter} alt="" />
                                <h1 className="font-ubuntu font-normal lg:text-xl text-sm mt-3 mb-2 text-center">Printer EPSON L121</h1>
                                <p className="text-center text-[#AAAAAA] lg:text-sm text-xs mb-5 line-clamp-2">
                                    Expect great efficiency when printing with the EcoTank L121.
                                </p>
                                <Link href={""} className="bg-[#1D2088] lg:text-base text-sm text-white py-2 px-4">Shop Now</Link>
                            </div>

                            <div className="bg-[#F5F5F5] lg:px-6 px-3 lg:py-6 py-4 flex flex-col items-center">
                                <Image src={epsonprinter} alt="" />
                                <h1 className="font-ubuntu font-normal lg:text-xl text-sm mt-3 mb-2 text-center">Printer EPSON L121</h1>
                                <p className="text-center text-[#AAAAAA] lg:text-sm text-xs mb-5 line-clamp-2">
                                    Expect great efficiency when printing with the EcoTank L121.
                                </p>
                                <Link href={""} className="bg-[#1D2088] lg:text-base text-sm text-white py-2 px-4">Shop Now</Link>
                            </div>

                            <div className="bg-[#F5F5F5] lg:px-6 px-3 lg:py-6 py-4 flex flex-col items-center">
                                <Image src={epsonprinter} alt="" />
                                <h1 className="font-ubuntu font-normal lg:text-xl text-sm mt-3 mb-2 text-center">Printer EPSON L121</h1>
                                <p className="text-center text-[#AAAAAA] lg:text-sm text-xs mb-5 line-clamp-2">
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
                    <div className="max-w-7xl lg:mx-auto lg:py-16 py-10 mx-6 md:mx-10">
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-3xl text-xl font-bold font-ubuntu">Company Partner</h1>
                        </div>

                        <div className="lg:grid lg:grid-cols-5 flex justify-items-center items-center lg:mt-16 mt-8 space-x-4 lg:space-x-0 md:space-x-16">
                            <div className="flex">
                                <Image alt="" src={logitech} className="w-40" />
                            </div>
                            <div className="flex">
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

            <div>
                <FloatingWhatsApp
                    phoneNumber="6285928953264"
                    accountName={"Lumibyte"}
                    avatar="/png/avatar.png"
                    allowEsc
                    className="floating-whatsapp"
                />
            </div>
        </>
    )
}