"use client"

import { useRouter } from "next/navigation"

export default function Filter({filter}) {
    const router= useRouter();
 
    return (
        <>
            <select

            onChange={e=> router.replace(`/old-school-cartoons?genre=${e.target.value}`)}
                id="filterLearningMaterials"
                name="filterLearningMaterials"
                className=" text-sm  block w-60 p-4 focus:outline-none text-gray-500 border-none  bg-background-100"
            >
                <option hidden value="">
                    Filter By Category
                </option>
                <optgroup label="Chose Type Movies ">
                    {filter.payload.map((items,index)=>(
                         <option  key={index} value={items.id}>{items.ct_title}</option>
                         
                    ))}
                   
                </optgroup>
            </select>
        </>
    )

}