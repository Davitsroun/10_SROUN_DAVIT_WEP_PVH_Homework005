export const allBook = async (query, search)=>{
    // const allBook_data= await fetch(`https://nextjs-homework005.vercel.app/api/book${!query ? "" : `?query=${query}` }`);


    const allBook_data= await fetch(`https://nextjs-homework005.vercel.app/api/book${!query && !search ? "" : query ? `?query=${query}` : `?search=${search}` }`);

    const bookData= await allBook_data.json();
    return bookData
}
