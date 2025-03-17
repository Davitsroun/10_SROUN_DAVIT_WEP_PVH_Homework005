import Link from "next/link";


export  default  function CardBookCategories (items) {

    return (
        <>
              <div  className="w-[600px] h-[310px] relative  ">
              <div className="w-auto h-auto flex flex-col gap-5 absolute bottom-6 z-10 pl-8 ">
             <img className="w-[176px] h-[221px] rounded-2xl shadow-lg "  src={items.image} title={items.book_title}></img>
                <div className="w-[176px] h-[44px] bg-[#BFD7EA] rounded-2xl pl-4 pt-3 hover:bg-cyan-600 ">
                  <Link href={`/detailbook/${items.id}`} >
                  <p className="">READ FULL ARTICLE</p>
                  </Link>
                
                  </div>    
              </div>
              <div className=" w-[527px] h-[225px] rounded-2xl bg-background-100 absolute inset-x-0 bottom-0   flex justify-end pr-2">
                <div className="w-[55%] h-full rounded-2xl">
                <p className="font-bold text-text-100 text-2xl line-clamp-1">{items.book_title}</p>
                <p className="line-clamp-6 mt-4 text-gray-600">{items.description}</p>

                </div>
              </div>
            </div>

        </>

    )
}