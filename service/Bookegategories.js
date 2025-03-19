export const bookgategory= async () =>{
        const res= await fetch(`https://nextjs-homework005.vercel.app/api/book_category`)
        const bookgategory= await res.json();
        return bookgategory

}