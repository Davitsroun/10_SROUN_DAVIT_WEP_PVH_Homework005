import CartoonCard from "@/components/CartoonCard";
import { AllCartoon } from "@/service/AllCartoon";
import Link from "next/link";

export default async function cartoon() {
         const AllCartoons =await AllCartoon();
        // const filterCartoon =  [...new Set(AllCartoons.map((items)=> items.ct_title))]
       
    return (
        <>
            <div className="w-[95%] border rounded-2xl bg-white overflow-auto h-screen ">
                <div className="w-full h-full  grid grid-flow-row grid-rows-8 border">
                    <div className="w-full">
                        <div className="row-span-1   pl-10 pt-5 flex justify-between ">
                            <div className="w-auto h-auto">
                                <button className="text-[#087E8B bg-[#F5F7F8] w-auto pl-5 pr-5 h-auto pt-4 pb-4 mb-3 text-text-100 font-bold ">Old School Cartoon</button>
                            </div>
                            <div className="w-auto h-auto mr-10">
                                <select
                                    id="filterLearningMaterials"
                                    name="filterLearningMaterials"
                                    className=" text-sm  block w-60 p-4 focus:outline-none text-gray-500 border-none  bg-background-100"
                                >
                                    <option hidden value="">
                                        Filter By Category
                                    </option>
                                    <optgroup label="Chose Type Movies ">
                                        <option value="A-Z">A-Z</option>
                                        <option value="Z-A">Z-A</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <hr className="bg-[#087E8B] w-[95%] h-1  ml-10" />
                    </div>
                    <div className="row-span-7 pl-10 grid grid-cols-3 mt-5 gap-10 ">
                        {AllCartoons.payload.map((items)=>(
                            // <Link href={`/cartoondetail/${items.id}`}>
                            //  <div key={items.key} className=" w-[314px] h-[490px] flex flex-col gap-4  ">
                            //      <div className =" rounded-2xl shadow-lg w-[314px] h-[398px]">
                            //         <img src={items.image} className="bg-slate-500 rounded-2xl shadow-lg w-[314px] h-[398px]"></img>
                            //      </div>
                            //      <div className="w-full h-100 ml-2">
                            //          <p className="text-2xl font-bold mb-1 line-clamp-1 ">{items.ct_title}</p>
                            //          <div className=" flex  text-text-100 font-medium gap-5">
                            //              <div className="w-auto h-auto flex gap-3 ">
                            //              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            //                  <path d="M11.9999 16.33C9.60992 16.33 7.66992 14.39 7.66992 12C7.66992 9.61 9.60992 7.67 11.9999 7.67C14.3899 7.67 16.3299 9.61 16.3299 12C16.3299 14.39 14.3899 16.33 11.9999 16.33ZM11.9999 9.17C10.4399 9.17 9.16992 10.44 9.16992 12C9.16992 13.56 10.4399 14.83 11.9999 14.83C13.5599 14.83 14.8299 13.56 14.8299 12C14.8299 10.44 13.5599 9.17 11.9999 9.17Z" fill="#087E8B" />
                            //                  <path d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 9C4.70008 5.18 8.25008 2.98 12.0001 2.98C15.7501 2.98 19.3001 5.18 21.7401 9C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.48C8.77008 4.48 5.68008 6.42 3.52008 9.81C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.81C18.3201 6.42 15.2301 4.48 12.0001 4.48Z" fill="#087E8B" />
                            //              </svg>
                            //              <p>{items.view_count} Times</p>
     
                            //              </div>
                            //              <div className="border-l-2 border-green-600 pl-3 h-5   ">{items.published_year}</div>
                                                               
                            //        </div>
                            //      </div>
                            //  </div>
                            // </Link>
                            <CartoonCard key={items.id} {...items} />
                         
                        ))}
                       
                    </div>
                </div>
            </div>


        </>

    )
}