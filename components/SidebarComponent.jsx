"use client"
import { data_sidebar } from '../data/data_sidebar'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
const SidebarComponent = () => {
    const pathname= usePathname();
   

  return (
    <aside className="flex flex-col w-74 ">
      <div className='w-full h-full   flex flex-col text-xl gap-2 pt-10 pb-10' >
        <div className='flex flex-col items-center gap-1 w-auto'>
          <img src="./image (1).svg" alt="" />
          <h2 className='text-[#0B3954]'>Black Monster</h2>
          <h2 className='text-[#087E8B]'>blackmonster@gmail.com</h2>
        </div>

        <div className=" flex flex-col gap-1 p-4 text-[#0B3954]">
          {data_sidebar.map((item) => (
            <Link key={item.id} href={item.linkData}>
              <div  className= {`flex items-center gap-2 p-2  cursor-pointer ${
                pathname === item.linkData? "bg-background-100": "bg-none"
              }`} >
                <div className="text-xl">{item.icon}</div>
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </Link>

          ))}
        </div>

        <div className='  h-[55px] pl-3  bg-slate-200 w-[90%] ml-5 flex pt-3 gap-2 mt-5 rounded-2xl '>
          <div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1604 15.75C10.0904 15.75 8.41043 14.07 8.41043 12C8.41043 9.93 10.0904 8.25 12.1604 8.25C14.2304 8.25 15.9104 9.93 15.9104 12C15.9104 14.07 14.2304 15.75 12.1604 15.75ZM12.1604 9.75C10.9204 9.75 9.91043 10.76 9.91043 12C9.91043 13.24 10.9204 14.25 12.1604 14.25C13.4004 14.25 14.4104 13.24 14.4104 12C14.4104 10.76 13.4004 9.75 12.1604 9.75Z" fill="#0B3954" />
            <path d="M15.3704 22.19C15.1604 22.19 14.9504 22.16 14.7404 22.11C14.1204 21.94 13.6004 21.55 13.2704 21L13.1504 20.8C12.5604 19.78 11.7504 19.78 11.1604 20.8L11.0504 20.99C10.7204 21.55 10.2004 21.95 9.58043 22.11C8.95043 22.28 8.30043 22.19 7.75043 21.86L6.03043 20.87C5.42043 20.52
             4.98043 19.95 4.79043 19.26C4.61043 18.57 4.70043 17.86 5.05043 17.25C5.34043 16.74 5.42043 16.28 5.25043 15.99C5.08043 15.7 4.65043 15.53 4.06043 15.53C2.60043 15.53 1.41043 14.34 1.41043 12.88V11.12C1.41043 9.66 2.60043 8.47 4.06043 8.47C4.65043 8.47 5.08043 8.3 5.25043 8.01C5.42043 7.72 5.35043 7.26 5.05043 6.75C4.70043 
            6.14 4.61043 5.42 4.79043 4.74C4.97043 4.05 5.41043 3.48 6.03043 3.13L7.76043 2.14C8.89043 1.47 10.3804 1.86 11.0604 3.01L11.1804 3.21C11.7704 4.23 12.5804 4.23 13.1704 3.21L13.2804 3.02C13.9604 1.86 15.4504 1.47 16.5904 2.15L18.3104 3.14C18.9204 3.49 19.3604 4.06 19.5504 4.75C19.7304 5.44 19.6404 6.15 19.2904 6.76C19.0004 7.27 18.9204 7.73 19.0904 8.02C19.2604 8.31 
            19.6904 8.48 20.2804 8.48C21.7404 8.48 22.9304 9.67 22.9304 11.13V12.89C22.9304 14.35 21.7404 15.54 20.2804 15.54C19.6904 15.54 19.2604 15.71 19.0904 16C18.9204 16.29 18.9904 16.75 19.2904 17.26C19.6404 17.87 19.7404 18.59 19.5504 19.27C19.3704 19.96 18.9304 20.53 18.3104 20.88L16.5804 21.87C16.2004 22.08 15.7904 22.19 15.3704 22.19ZM12.1604 18.49C13.0504 18.49 13.8804 19.05 14.4504 20.04L14.5604 20.23C14.6804 20.44 14.8804 20.59 15.1204 20.65C15.3604 
            20.71 15.6004 20.68 15.8004 20.56L17.5304 19.56C17.7904 19.41 17.9904 19.16 18.0704 18.86C18.1504 18.56 18.1104 18.25 17.9604 17.99C17.3904 17.01 17.3204 16 17.7604 15.23C18.2004 14.46 19.1104 14.02 20.2504 14.02C20.8904 14.02 21.4004 13.51 21.4004 12.87V11.11C21.4004 10.48 20.8904 9.96 20.2504 9.96C19.1104 9.96 18.2004 9.52 17.7604 8.75C17.3204 7.98 17.3904 6.97 17.9604 5.99C18.1104 5.73 18.1504 5.42 18.0704 5.12C17.9904 4.82 17.8004 4.58 17.5404 4.42L15.8104 3.43C15.3804 3.17 14.8104 3.32 14.5504 3.76L14.4404
             3.95C13.8704 4.94 13.0404 5.5 12.1504 5.5C11.2604 5.5 10.4304 4.94 9.86043 3.95L9.75043 3.75C9.50043 3.33 8.94043 3.18 8.51043 3.43L6.78043 4.43C6.52043 4.58 6.32043 4.83 6.24043 5.13C6.16043 5.43 6.20043 5.74 6.35043 6C6.92043 6.98 6.99043 7.99 6.55043 8.76C6.11043 9.53 5.20043 9.97 4.06043 9.97C3.42043 9.97 2.91043 10.48 2.91043 11.12V12.88C2.91043 13.51 3.42043 14.03 4.06043 14.03C5.20043 14.03 6.11043 14.47 6.55043 15.24C6.99043 16.01 6.92043 17.02 6.35043 18C6.20043 18.26 6.16043 18.57 6.24043 18.87C6.32043 
             19.17 6.51043 19.41 6.77043 19.57L8.50043 20.56C8.71043 20.69 8.96043 20.72 9.19043 20.66C9.43043 20.6 9.63043 20.44 9.76043 20.23L9.87043 20.04C10.4404 19.06 11.2704 18.49 12.1604 18.49Z" fill="#0B3954" />
          </svg>
          </div>
          <div className='text-[#0B3954]'>Settings</div>
        </div>


      </div>
    </aside>

  )
}

export default SidebarComponent