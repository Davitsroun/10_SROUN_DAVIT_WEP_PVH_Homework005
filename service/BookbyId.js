export const getProductById = async (id) =>{
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`)
    const bookById= await res.json();
    
    return bookById;
}