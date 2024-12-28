import Image from "next/image"
import Link from "next/link"

import logo from "@/public/logo.svg"

export default function Navigation() {
    return (
        <>
            {/* dekstop view */}
            <div className="hidden lg:block">
                <div className="mx-32">
                    <div className="flex items-center justify-between py-8">
                        <Image src={logo} alt="" className="w-28" />
                        <div className="flex font-ubuntu space-x-10 text-white mt-2">
                            <Link href={"/"}>Home</Link>
                            <Link href={""}>Services</Link>
                            <Link href={""}>About Us</Link>
                            <Link href={""}>Product</Link>
                            <Link href={""}>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}