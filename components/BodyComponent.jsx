import CardComponent from "./CardComponent";
export default function () {

    return (
        <>
            <div className="w-[95%] h-full  grid grid-flow-row grid-rows-6 border rounded-2xl bg-white">
                <div className="row-span-1   pl-10 pt-5 ">

                    <button className="text-[#087E8B bg-[#F5F7F8] w-[9%] h-[50%] mb-3 text-[#087E8B] font-bold ">Homepage</button>
                    <hr className="bg-[#087E8B] w-[95%] h-1 " />
                </div>
                
                <div className="row-span-5 justify-self-center content-center">
                    <CardComponent/>
                   

                </div>
            

            </div>


        </>

    )
}