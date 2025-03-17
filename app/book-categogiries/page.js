import CardBookCategories from "@/components/CardBookCategories";
import { allBook } from "@/service/Allbook";
import Link from "next/link";

export default async function AllBookCategories() {
 
  const bookData =await allBook();

  // const filterbook=  bookData.map((items)=> items.book_autho)


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
          <div className="row-span-7 pl-10  grid grid-cols-2 gap-10 ">

            
           {bookData?.payload.map((items) => (
            //   <div key={items.id} className="w-[600px] h-[310px] relative  ">
            //   <div className="w-auto h-auto flex flex-col gap-5 absolute bottom-6 z-10 pl-8 ">
            //  <img className="w-[176px] h-[221px] rounded-2xl shadow-lg "  src={items.image} title={items.book_title}></img>
            //     <div className="w-[176px] h-[44px] bg-[#BFD7EA] rounded-2xl pl-5 pt-3 ">
            //       <Link href={`/detailbook/${ items.id}`}>
            //       <p className="">READ FULL ARTICLE</p>
            //       </Link>
                
            //       </div>
            //   </div>
            //   <div className=" w-[527px] h-[225px] rounded-2xl bg-background-100 absolute inset-x-0 bottom-0   flex justify-end ">
            //     <div className="w-[55%] h-full rounded-2xl">
            //     <p className="font-bold text-text-100 text-2xl line-clamp-1">{items.book_title}</p>

            //     </div>
            //   </div>
            // </div>
            <CardBookCategories key={items.id} {...items}/>

          ))} 
              

          </div>
        </div>




      </div>


    </>

  )
}