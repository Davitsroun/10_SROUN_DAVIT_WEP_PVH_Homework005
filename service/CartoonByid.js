export const CartoonByid= async (id)=>{
    const cartoonData= await fetch (`https://nextjs-homework005.vercel.app/api/cartoon/${id}`);
    const catoonDetailById= await cartoonData.json(); 
   return catoonDetailById
}