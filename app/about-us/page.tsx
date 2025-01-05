import Navigation from "@/components/navigation"

import Link from "next/link"

export default function AboutUs() {
    return (
        <div>
            <section>
                <div className="bg-[url('/heroimage.svg')] bg-no-repeat bg-cover">
                    <Navigation />
                    <div className="w-1/2 mx-32 mt-32">
                        {/* Add code here */}
                        <div className="text-white">About Us Page</div>
                    </div>
                </div>
            </section>

            {/* Add code here */}
        </div>
    )
}