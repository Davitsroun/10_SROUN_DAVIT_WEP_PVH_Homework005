

const { default: allBook } = require("@/service/Allbook")

const BookcardComponent = async () => {

    const card = await allBook();
    console.log(allBook)

    return (
        <>
            {card.map((item) => {

                <div key={item.id} className="w-[600px] h-[310px] relative  ">

                    <div className="w-auto h-auto flex flex-col gap-5 absolute bottom-6 z-10 pl-8">
                        <div className="w-[176px] h-[221px] bg-amber-100 rounded-2xl">{item.image}</div>
                        <div className="w-[176px] h-[44px] bg-amber-300 rounded-2xl">{item.title}</div>
                    </div>
                    <div className=" w-[527px] h-[225px] rounded-2xl bg-background-100 absolute inset-x-0 bottom-0   flex justify-end ">
                        <div className="w-[55%] h-full rounded-2xl">{item.title}</div>
                    </div>
                </div>


            })}


        </>
    )

}

export default BookcardComponent;