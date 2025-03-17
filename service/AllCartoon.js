export const AllCartoon=  async() =>{
    const cartonAllData= await fetch(`https://nextjs-homework005.vercel.app/api/cartoon`)
    const cartoonData= await cartonAllData.json()
    return cartoonData
}