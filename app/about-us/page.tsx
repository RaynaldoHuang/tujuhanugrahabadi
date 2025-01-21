"use client"

import Image from "next/image"
import Link from "next/link"

import { FloatingWhatsApp } from "react-floating-whatsapp"
import { gsap } from 'gsap';
import { useEffect, useState } from "react";

import indonesiamap from "@/public/svg/indonesiamap.svg"
import colorlogo from "@/public/svg/rgblogo.svg"
import whatsApp from "@/public/svg/WhatsAppcolor.svg"

export default function AboutUs() {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach((counter) => {
            // Persempit tipe elemen menjadi HTMLElement
            const element = counter as HTMLElement;

            const endValue = parseInt(element.dataset.value || '0', 10);

            gsap.fromTo(
                element,
                { innerText: 0 },
                {
                    innerText: endValue,
                    duration: 2, // durasi animasi (detik)
                    ease: 'power2.out',
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        element.innerText = Math.ceil(parseFloat(element.innerText || '0')).toString(); // Menampilkan angka bulat
                    },
                }
            );
        });
    }, []);

    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);  // Show button when scrolling more than 300px
        } else {
            setIsVisible(false); // Hide button when at the top
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    // Add event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section>
                <div className="lg:bg-[url('/svg/heroimage.svg')] bg-[url('/svg/mobilehero.svg')] bg-no-repeat bg-cover lg:h-screen lg:pt-40 md:pt-48 pt-40 lg:pb-32 md:pb-32 pb-28 bg-black">
                    <div className="lg:max-w-7xl lg:mx-auto mx-6 md:mx-10">
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-3xl md:text-3xl text-2xl font-medium font-ubuntu text-white lg:mb-10 mb-5 md:mb-10">About Us</h1>
                            <h1 className="lg:text-5xl md:text-5xl text-3xl font-medium font-ubuntu text-white text-center lg:leading-normal md:leading-normal lg:w-5/6">A Legacy of Fortune, Unwavering Success, and Eternal Excellence</h1>
                            <p className="text-white text-center lg:mt-8 mt-6 lg:w-4/5 font-ubuntu leading-loose md:leading-normal text-sm md:text-base hidden lg:block md:block">PT. Tujuh Anugrah Abadi is steadfast in its commitment to delivering unparalleled quality and sustainability, while fostering a legacy of fortune, success, and meaningful impact. With a vision rooted in creating value for customers, partners, and society, we aim to inspire confidence, trust, and prosperity that endure for generations to come.</p>
                            <p className="text-white text-center lg:mt-8 mt-6 lg:w-4/5 font-ubuntu lg:leading-loose leading-normal lg:text-sm text-sm lg:hidden md:hidden">PT. Tujuh Anugrah Abadi is steadfast in its commitment to delivering unparalleled quality and sustainability, while fostering a legacy of fortune, success, and meaningful impact.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center lg:items-center lg:gap-x-16 md:gap-x-8 mt-12 md:mt-16 lg:mt-16 md:flex-row md:justify-center md:items-center">
                            <div className="flex items-center mb-6 lg:mb-0 md:mb-0">
                                <h1 className="font-ubuntu text-white font-bold text-6xl me-4 counter" data-value="14">0</h1>
                                <p className="font-ubuntu text-[#4d4d4d] lg:text-sm text-xs">Years Of<br />Experience</p>
                            </div>
                            <div className="w-0.5 h-10 bg-white hidden lg:block md:block"></div>
                            <div className="flex items-center mb-6 lg:mb-0 md:mb-0">
                                <h1 className="font-ubuntu text-white font-bold text-6xl counter flex" data-value="88">0</h1>
                                <h1 className="font-ubuntu text-white font-bold text-6xl me-4">+</h1>
                                <p className="font-ubuntu text-[#4d4d4d] lg:text-sm text-xs">Companies In<br />Indonesia</p>
                            </div>
                            <div className="w-0.5 h-10 bg-white hidden lg:block md:block"></div>
                            <div className="flex items-center">
                                <h1 className="font-ubuntu text-white font-bold text-6xl counter" data-value="2000">0</h1>
                                <h1 className="font-ubuntu text-white font-bold text-6xl me-4">+</h1>
                                <p className="font-ubuntu text-[#4d4d4d] lg:text-sm text-xs">Clients Across<br />Indonesia</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="lg:max-w-7xl lg:mx-auto mx-6 md:mx-10">
                    <div className="py-16">
                        <div className="lg:flex md:flex items-center lg:gap-x-32 md:gap-x-14">
                            <div className="lg:w-1/2 md:w-1/2">
                                <h1 className="lg:text-4xl text-3xl font-ubuntu font-bold mb-8 lg:hidden md:hidden">About The Company</h1>
                                <Image
                                    alt=""
                                    src={colorlogo}
                                    className="lg:w-full md:w-full w-72"
                                />
                            </div>
                            <div className="lg:w-1/2 md:w-1/2">
                                <h1 className="lg:text-4xl text-3xl font-ubuntu font-bold mb-8 mt-16 md:mt-0 lg:mt-0 hidden lg:block md:block">About The Company</h1>
                                <p className="font-ubuntu lg:text-base md:text-base text-sm text-[#4d4d4d] leading-relaxed mt-8 lg:mt-0">PT. Tujuh Anugrah Abadi embodies a company name that reflects themes of fortune, success, and eternity. This name conveys positive values, a long-term vision, and a commitment to quality and sustainability.The number seven, often referred to as the &ldquo;lucky number seven,&rdquo; is believed to symbolize both fortune and the enduring nature of PT. Tujuh Anugrah Abadi&apos;s business prospects.<br /> <br /> In a business context, the term &ldquo;Anugrah&rdquo; signifies the company&apos;s dedication to providing blessings and additional value to its customers and partners, with the overarching goal of creating a positive impact. According to the Indonesian Language Dictionary (KBBI), &ldquo;abadi&rdquo; means unchanging or eternal. This implies that PT. Tujuh Anugrah Abadi is committed to delivering unwavering quality to its customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#f5f5f5]">
                    <div className="lg:max-w-7xl lg:mx-auto mx-6 md:mx-10">
                        <div className="lg:flex items-center gap-20 lg:py-20 py-16 lg:justify-between">
                            <div className="lg:w-1/3 mb-16 lg:mb-0 lg:me-20">
                                <div className="mb-10">
                                    <h1 className="lg:text-4xl md:text-4xl text-3xl font-ubuntu font-bold mb-4">Our Vision</h1>
                                    <p className="font-ubuntu lg:text-base md:text-base text-sm text-[#4d4d4d] leading-relaxed">To become a leading national company of international standards that is technology-oriented and possesses the most comprehensive, extensive, and trusted network.</p>
                                </div>
                                <div>
                                    <h1 className="lg:text-4xl md:text-4xl text-3xl font-ubuntu font-bold mb-4">Our Mission</h1>
                                    <ul className="font-ubuntu lg:text-base md:text-base text-[#4d4d4d] text-sm list-disc list-inside leading-relaxed">
                                        <li>To provide high-quality genuine products.</li>
                                        <li>To have a robust company infrastructure, skilled human resources, and an effective management system.</li>
                                        <li>To be a trusted partner providing reliable integrated solutions and high-quality services.</li>
                                        <li>To maintain strong relationships with customers and business partners.</li>
                                        <li>To enhance employee welfare while fully committing to Corporate Social Responsibility initiatives.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-2/3">
                                <Image
                                    alt=""
                                    src={indonesiamap}
                                    className="md:w-full lg:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#062236] py-16">
                    <div className="lg:max-w-7xl lg:mx-auto mx-6">
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-4xl md:text-3xl text-2xl font-ubuntu font-bold mb-5 text-white text-center">Feel Free to Reach Out for Support or Inquiries</h1>
                            <p className="font-ubuntu lg:text-base md:text-base text-sm text-[#aaaaaa] leading-relaxed mb-8 text-center">Let&apos;s create something great together. Reach out to us today!</p>

                            <Link href={""} className="flex items-center">
                                <Image
                                    alt=""
                                    src={whatsApp}
                                    className="lg:w-20 md:w-20 w-14 me-4"
                                />
                                <div className="lg:text-5xl md:text-5xl text-2xl font-ubuntu font-bold text-white">+62 812 3456 9336</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:max-w-7xl lg:mx-auto mx-6">
                    <div className="my-20">
                        <h1 className="text-4xl font-ubuntu font-bold mb-10">Our Location</h1>
                        <div className="lg:flex justify-between gap-x-12">
                            <div className="lg:w-1/2 mb-8 lg:mb-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5508004238463!2d112.6544272!3d-7.2918376999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fdc7d4229af3%3A0x1bd7b8a45f57d063!2sG%20-%20WALK%20Citraland%20Surabaya!5e0!3m2!1sid!2sid!4v1736772215302!5m2!1sid!2sid"
                                    width="600"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl w-full h-80 lg:h-[450px]"
                                >
                                </iframe>
                            </div>
                            <div className="lg:w-1/2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.601471833384!2d106.82082656350707!3d-6.157436669416077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5dfecf3dd7d%3A0x5e68063413dfabb3!2sJl.%20Kebon%20Jeruk%20VII%20No.2A%2C%20RT.2%2FRW.1%2C%20Maphar%2C%20Kec.%20Taman%20Sari%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011160!5e0!3m2!1sid!2sid!4v1736773020904!5m2!1sid!2sid"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl w-full h-80 lg:h-[450px]"
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-28 right-9 bg-blue-500 text-white flex justify-center items-center w-14 h-14 rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <p className="text-xl">↑</p>
            </button>

            <div>
                <FloatingWhatsApp
                    phoneNumber="6281234569336"
                    accountName={"PT. Tujuh Bintang Anugrah"}
                    avatar="/png/avatar.png"
                    allowEsc
                    className="floating-whatsapp"
                />
            </div>
        </>
    )
}