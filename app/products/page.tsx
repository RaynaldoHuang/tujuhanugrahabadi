'use client'

import Image from "next/image"
import Link from "next/link"

import Navigation from "@/components/navigation"

import categories from "@/utils/categories"
import products from "@/utils/products"

import epsonInk from "@/public/tintaepson.svg"
import { useState } from "react"

export default function Products() {
    let CATEGORIES = categories
    let PRODUCTS = products

    let [dynamicArr, setDynamicArr] = useState<any>(PRODUCTS)

    /**
     * This function handles the changes made by user
     * based on the search bar and dropdown
     * @param event 
     * @returns 
     */
    const handleChange = (event: any) => {
        let search: any = document.getElementById('search')
        let dropdown: any = document.getElementById('dropdown')

        let tempArr = PRODUCTS

        if (dropdown.value == "") {
            let result = tempArr.filter((product: any) => product.title.toLowerCase().includes(search.value.toLowerCase()))
            setDynamicArr(result)

            return
        }

        let result = tempArr.filter((product: any) => product.category == dropdown.value && product.title.toLowerCase().includes(search.value.toLowerCase()))

        setDynamicArr(result)
    }

    return (
        <div>
            <Navigation />

            {/* Input image as the background of this section */}
            <div className="">
                <div className="lg:max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl">Products</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

            {/* Products */}
            <div className="max-w-7xl mx-auto bg-red-100 my-10">
                {/* Search Bar and Filter */}
                <div className="flex flex-row justify-between mb-5">
                    <input type='text' id="search" onChange={(event: any) => handleChange(event)} placeholder='Input any product name ...' className="py-3 px-3 w-4/12" />
                    <select id="dropdown" onChange={(event: any) => handleChange(event)}>
                        <option value="">All</option>
                        {
                            CATEGORIES.map((c: any) => (
                                <option key={c.id} value={c.value}>{c.title}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="grid grid-cols-4 gap-x-4">
                    {
                        dynamicArr.length == 0
                        ?
                        <p>No results found ...</p>
                        :
                        dynamicArr.map((product: any) => (
                            <div key={product.id} className="bg-[#F5F5F5] px-6 py-6 flex-col justify-items-center">
                                <Image src={epsonInk} width={100} height={100} alt="" />
                                <h1 className="font-ubuntu font-normal text-xl mt-3 mb-2 font-medium">{product.title}</h1>
                                <p className="text-center text-[#AAAAAA] text-sm mb-8 line-clamp-2">
                                    {product.desc}
                                </p>
                                <Link href={"adsf"} className="bg-[#1D2088] text-white py-2 px-4">Shop Now</Link>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}