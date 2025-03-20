import CartoonCard from "@/components/CartoonCard";
import Filter from "@/components/Filter";
import { AllCartoon, AllCartoonCategories } from "@/service/AllCartoon";


export default async function cartoon({searchParams}) {

    const queryId= (await searchParams).genre;
    const search= (await searchParams).search;
    
         const AllCartoons =await AllCartoon(queryId, search)
         const filter= await AllCartoonCategories();
        
       
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
                                <Filter filter= {filter}/>
                            </div>
                        </div>
                        <hr className="bg-[#087E8B] w-[95%] h-1  ml-10" />
                    </div>
                    <div className="row-span-7 pl-10 grid grid-cols-3 mt-5 gap-10 ">
                        {AllCartoons.payload.map((items)=>(
                           
                            <CartoonCard key={items.id} {...items} />
                         
                        ))}
                       
                    </div>
                </div>
            </div>


        </>

    )
}