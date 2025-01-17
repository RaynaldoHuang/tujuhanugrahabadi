'use client';

import { useEffect, useState } from "react";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Pagination } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import categories from "@/utils/categories";
import products from "@/utils/products";
import tokped from "@/public/svg/tokped.svg";
import shopee from "@/public/svg/shopee.svg";
import tiktok from "@/public/svg/tiktok.svg";
import all from "@/public/svg/allcat.svg"

export default function Products() {
    const CATEGORIES = categories;
    const PRODUCTS = products;

    const [dynamicArr, setDynamicArr] = useState<any>(PRODUCTS);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Jumlah produk per halaman

    /**
     * This function filters products based on the selected category
     * and search input.
     */
    const handleFilter = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset ke halaman pertama

        const search: any = document.getElementById("search");
        const tempArr = PRODUCTS;

        const result = tempArr.filter(
            (product: any) =>
                (category === "" || product.category === category) &&
                product.title.toLowerCase().includes(search.value.toLowerCase())
        );

        setDynamicArr(result);
    };

    // Hitung data produk yang ditampilkan berdasarkan halaman
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dynamicArr.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(dynamicArr.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true); // Show button when scrolling more than 300px
        } else {
            setIsVisible(false); // Hide button when at the top
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling
        });
    };

    // Add event listener on component mount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section>
                <div className="lg:bg-[url('/svg/heroimage.svg')] bg-[url('/svg/mobilehero.svg')] md:bg-[url('/svg/herotablet.svg')] bg-no-repeat bg-cover pt-40 lg:mb-28 mb-20 bg-black">
                    <div className="lg:max-w-7xl lg:mx-auto mx-6 md:mx-10">
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-5xl md:text-5xl text-3xl font-medium font-ubuntu text-white text-center lg:leading-normal md:leading-normal lg:w-5/6">
                                Your Trusted Partner in Innovation
                            </h1>
                            <p className="text-white text-center lg:mt-4 mt-6 mb-28 lg:w-4/5 font-ubuntu leading-loose md:leading-normal text-sm md:text-base">
                                Delivering Comprehensive IT Solutions, Goods, and Services Across 88 Cities in Indonesia with Excellence and Reliability.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#062236] lg:py-6 py-3 lg:px-5 px-3 !z-50 absolute lg:top-[330px] top-[410px] md:top-[450px] transform -translate-x-1/2 w-5/6 left-1/2 flex items-center lg:max-w-7xl">
                        <div className="relative w-full">
                            {/* Icon Search */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>

                            {/* Input Field */}
                            <input
                                type="text"
                                id="search"
                                onChange={() => handleFilter(selectedCategory)}
                                placeholder="Type here to search ..."
                                className="w-full py-3 pl-10 pr-4 lg:text-base placeholder:text-sm lg:placeholder:text-base placeholder:font-ubuntu border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                            />

                        </div>

                    </div>
                </div>
            </section>

            {/* Categories */}
            <section>
                <div className="lg:max-w-7xl lg:mx-auto my-10 mx-6 md:mx-10">
                    <div className="flex justify-between lg:gap-4 gap-6 mb-10 overflow-x-scroll lg:overflow-visible no-scrollbar">
                        {([{ id: 'all', value: '', title: 'All Product', icon: all }, ...CATEGORIES]).map((c: any) => (
                            <div
                                key={c.id}
                                className={`cursor-pointer px-4 py-2 flex flex-col items-center ${selectedCategory === c.value ? "border-b-2 border-[#1D2088]" : ""
                                    }`}
                                onClick={() => handleFilter(c.value)}
                            >
                                <Image src={c.icon} alt={c.title} width={40} height={40} className="w-10 h-10 object-contain" />
                                <p className="font-ubuntu mt-6 text-sm text-center">{c.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Products */}
                    <div className="lg:grid lg:grid-cols-4 lg:gap-4 gap-2 grid grid-cols-2">
                        {currentItems.length === 0 ? (
                            <p className="font-ubuntu">No results found ...</p>
                        ) : (
                            currentItems.map((product: any) => (
                                <div
                                    key={product.id}
                                    className="bg-[#F5F5F5] lg:px-6 px-3 lg:py-6 py-4 flex flex-col items-center"
                                >
                                    <Image src={product.src} alt="" />
                                    <h1 className="font-ubuntu font-normal lg:text-xl text-sm mt-3 mb-2 text-center">
                                        {product.title}
                                    </h1>
                                    <p className="text-center text-[#AAAAAA] lg:text-sm text-xs mb-5 line-clamp-2">
                                        {product.desc}
                                    </p>
                                    <p className="text-center lg:text-base text-sm mb-2 line-clamp-2">
                                        Click to checkout
                                    </p>
                                    <div className="flex lg:gap-4 gap-2">
                                        <Link
                                            href={product.topedLink}
                                            className="border-[#409442] rounded-full border-2 lg:w-12 lg:h-12 md:w-12 md:h-12 w-11 h-11 px-2.5 py-2.5 flex hover:bg-[#40944146]"
                                        >
                                            <Image alt={product.alt} src={tokped} />
                                        </Link>
                                        <Link
                                            href={product.shopeeLink}
                                            className="border-[#EE4D2D] rounded-full border-2 lg:w-12 lg:h-12 md:w-12 md:h-12 w-11 h-11 px-2.5 py-2.5 flex hover:bg-[#ee4d2d2c]"
                                        >
                                            <Image alt={product.alt} src={shopee} />
                                        </Link>
                                        <Link
                                            href={product.tiktokLink}
                                            className="border-black rounded-full border-2 lg:w-12 lg:h-12 md:w-12 md:h-12 w-11 h-11 px-2.5 py-2.5 flex hover:bg-[#0000002a]"
                                        >
                                            <Image alt={product.alt} src={tiktok} className="" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Records */}
                    <div className="my-5">
                        <p>{indexOfFirstItem + 1} to {indexOfLastItem > dynamicArr.length ? dynamicArr.length : indexOfLastItem} from {dynamicArr.length} items</p>
                    </div>

                    {/* Pagination */}
                    {/* <div className="flex justify-center items-center mt-10 space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 border rounded ${currentPage === page ? "bg-[#1D2088] text-white" : "bg-white text-[#1D2088]"}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div> */}
                    <div className="flex justify-center items-center mt-10 space-x-2">
                        <Pagination key={"bordered"} initialPage={1} total={totalPages} variant={"bordered"} onChange={(page: any) => handlePageChange(page)} size="lg" className="text-white"/>
                    </div>

                </div>
            </section>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-28 right-9 bg-blue-500 text-white flex justify-center items-center w-14 h-14 rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
            >
                <p className="text-xl">↑</p>
            </button>

            <div>
                <FloatingWhatsApp
                    phoneNumber="6285928953264"
                    accountName={"PT. Tujuh Bintang Anugrah"}
                    avatar="/png/avatar.png"
                    allowEsc
                    className="floating-whatsapp"
                />
            </div>
        </>
    );
}
