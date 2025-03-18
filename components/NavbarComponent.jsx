


const NavbarComponent = (    ) => {
    // const [getInput, setInputValues] = useState("")



    // const handleOnChange = event => {
    //     const { name, value } = event.target;
    //     setInputValues({ [name]: value });
    // };
    // console.log(getInput)

    return (
        <>
            <div className="w-[95%] h-full flex items-center justify-center ">
                <input

                    type="text"
                    name="name"
                    // onChange={handleOnChange}
                    className="border p-2 rounded-2xl w-full h-[40%]"
                    placeholder="  Search anything you want to" />
            </div>

        </>
    )
}

export default NavbarComponent