import CardBookCategories from "@/components/CardBookCategories";

import Filterbook from "@/components/Filterbook";
import { allBook } from "@/service/Allbook";
import { bookgategory } from "@/service/Bookegategories";


export default async function AllBookCategories({searchParams}) {

  const queryId= (await searchParams).query;
  const search=( await searchParams).search;
  console.log(search)

  const bookData =await allBook(queryId, search);
  const bookgategories = await bookgategory();
  
 

  return (
    <>
      <div className="w-[95%] border rounded-2xl bg-white overflow-auto h-screen ">
        <div className="w-full h-full  grid grid-flow-row grid-rows-8 border">
          <div className="w-full">
            <div className="row-span-1   pl-10 pt-5 flex justify-between ">
              <div className="w-auto h-auto">
                <button className="text-[#087E8B bg-[#F5F7F8] w-auto pl-5 pr-5 h-auto pt-4 pb-4 mb-3 text-text-100 font-bold rounded-2xl">All Books</button>
              </div>
              <div className="w-auto h-auto mr-10">
                <Filterbook filterbook={bookgategories.payload}/>
              </div>
            </div>
            <hr className="bg-[#087E8B] w-[95%] h-1  ml-10" />
          </div>
          <div className="row-span-7 pl-10  grid grid-cols-2 gap-10 ">

            
           {bookData?.payload.map((items) => (
           
            <CardBookCategories key={items.id} {...items}/>

          ))} 
              

          </div>
        </div>




      </div>


    </>

  )
}