export const allBook = async ()=>{
    const allBook_data= await fetch(`https://nextjs-homework005.vercel.app/api/book`);
    const bookData= await allBook_data.json();
     return bookData
}
