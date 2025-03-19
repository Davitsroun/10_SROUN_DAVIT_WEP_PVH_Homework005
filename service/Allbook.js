export const allBook = async (query)=>{
    const allBook_data= await fetch(`https://nextjs-homework005.vercel.app/api/book${!query ? "" : `?query=${query}`}`);
    const bookData= await allBook_data.json();
    return bookData
}
