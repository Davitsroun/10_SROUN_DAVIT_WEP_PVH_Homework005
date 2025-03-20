"use client"

import { useRouter } from "next/navigation";

export default function Filterbook({ filterbook }) {
        const router= useRouter();
    
    return (
        <>
            <select
                onChange={e => router.replace(`/book-categogiries?query=${e.target.value}`)}
                id="filterLearningMaterials"
                name="filterLearningMaterials"
                className="text-sm block w-60 p-4 focus:outline-none text-gray-500 border-none bg-background-100"
            >
                <option hidden value="">
                    Filter By Category
                </option>
                <optgroup label="Choose Type Movies">
                    {filterbook?.map((item, index) => (
                        <option key={index} value={item.id}>{item.book_cate_name}</option>
                    ))}
                </optgroup>
            </select>
        </>
    );
}


