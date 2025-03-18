import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default function RootLayout({ children }) {
    return (
      <>
          <div className="grid grid-cols-11 grid-flow-col gap-20 bg-gray-200 h-screen overflow-auto">
            <div className="col-span-2 bg-white">
              <SidebarComponent />
            </div>
  
            <div className=" col-span-9  grid grid-rows-6 ">
              <div className="  row-span-1 ">
                <NavbarComponent />
              </div>
              <div className="row-span-5 ">
                {children}
              </div>
  
            </div>
          </div>
      
      </>
    );
  }
  