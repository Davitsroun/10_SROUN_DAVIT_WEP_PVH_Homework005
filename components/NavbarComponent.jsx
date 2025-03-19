"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

const NavbarComponent = ( ) => {
    const router = useRouter();
    // const [get, set]= useState("");
    // console.log(get)
    // const c= router.replace(`/book-categogiries?search=${get}`)
    return (
        <>
            <div className="w-[95%] h-full flex items-center justify-center ">
                <input
                onChange={e=> router.replace(`/book-categogiries?search=${e}`)}

                    type="text"
                    name="name"
                    className="border p-2 rounded-2xl w-full h-[40%]"
                    placeholder="  Search anything you want to" />
            </div>

        </>
    )
}

export default NavbarComponent