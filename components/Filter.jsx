export default function Filter({filter}) {
    
    return (
        <>
            <select
                id="filterLearningMaterials"
                name="filterLearningMaterials"
                className=" text-sm  block w-60 p-4 focus:outline-none text-gray-500 border-none  bg-background-100"
            >
                <option hidden value="">
                    Filter By Category
                </option>
                <optgroup label="Chose Type Movies ">
                    {filter.map((items,index)=>(
                         <option  key={index} value="A-Z">{items}</option>
                         
                    ))}
                   
                </optgroup>
            </select>
        </>
    )

}