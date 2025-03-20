export const AllCartoon=  async(query, search) =>{
    const cartonAllData= await fetch(`https://nextjs-homework005.vercel.app/api/cartoon${!query && !search ? "" : query ? `?genre=${query}` : `?search=${search}` }`)
    const cartoonData= await cartonAllData.json()
   
    return cartoonData
}

export const AllCartoonCategories= async ()=>{
    const cartonAllData= await fetch(`https://nextjs-homework005.vercel.app/api/cartoon`)
    const cartoonData= await cartonAllData.json()

    return cartoonData

}