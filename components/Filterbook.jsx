export default function Filterbook({ filterbook }) {
    return (
        <>
            <select
                id="filterLearningMaterials"
                name="filterLearningMaterials"
                className="text-sm block w-60 p-4 focus:outline-none text-gray-500 border-none bg-background-100"
            >
                <option hidden value="">
                    Filter By Category
                </option>
                <optgroup label="Choose Type Movies">
                    {filterbook?.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
            </select>
        </>
    );
}


