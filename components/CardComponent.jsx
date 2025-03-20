"use client"
import { useState } from "react"
import { img_data } from "../data/img_data"
import Link from "next/link"

export default function CardComponent() {
    const [getImg, setIme] = useState(img_data)



    return (
        <>
            <div className="flex flex-row gap-20">
                {getImg?.map((option) => (
                    <Link key={option.id} href={option.linkData || '#'}>
                        <div
                            className="w-[314px] h-[398px] rounded-2xl bg-cover bg-center relative group"
                            style={{ backgroundImage: `url(${option.url})` }}
                        >
                            {/* Black Hover Overlay */}
                            <div className=" ml-2 w-[300px] h-[388px] rounded-3xl absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>

                            {/* Text that appears on hover */}
                            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                <span className="text-white font-bold text-4xl line-clamp-3 w-[50%]">{option.text}</span>
                            </div>

                            {/* Title Box */}
                            <div className="absolute w-auto h-6 bg-white ml-5 mt-3 rounded-2xl flex gap-1 pl-2 text-[#087E8B] font-bold pr-2 z-10">
                                <div className="mt-1">{option.icon}</div>
                                <div>{option.title}</div>
                            </div>
                        </div>

                    </Link>

                ))}
            </div>
        </>
    )
}
