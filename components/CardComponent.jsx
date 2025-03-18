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
                    <Link   key={option.id} href={option.linkData ||'#'}>
                     <div
                        className="w-[314px] h-[398px] rounded-2xl bg-cover bg-center relative "
                        style={{ backgroundImage: `url(${option.url})` }}
                    >
                        {/* Dark overlay on hover */}
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300"></div>

                        {/* Text displayed on hover */}
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white font-bold text-4xl line-clamp-3 w-[50%]">{option.text}</span>
                        </div>
                        <div className="absolute w-auto h-6 bg-white ml-5 mt-3 rounded-2xl flex gap-1 pl-2 text-[#087E8B] font-bold pr-2">
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
