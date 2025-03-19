export const AllCartoon=  async(query) =>{
    const cartonAllData= await fetch(`https://nextjs-homework005.vercel.app/api/cartoon${!query ? "" : `?genre=${query}`}`)
    const cartoonData= await cartonAllData.json()
   
    return cartoonData
}

export const AllCartoonCategories= async ()=>{
    const cartonAllData= await fetch(`https://nextjs-homework005.vercel.app/api/cartoon`)
    const cartoonData= await cartonAllData.json()

    return cartoonData

}