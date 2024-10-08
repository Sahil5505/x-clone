import Link from "next/link";

export default function MobileHeader() {
  return (
    <header    
    className="fixed flex h-14 w-full items-center justify-center border-b border-gray-200 bg-white p-4 md:hidden"
 >
      <div>
        <div className="absolute left-4 top-4">
        <div className="aspect-sqaure h-6 w-6 rounded-full bg-gray-200"/>
        </div>
      </div>
      <Link href="/">
   <h1 className="h-8 w-8 text-gray-800 " >
   𝕏
    </h1>   
      </Link> 
      
    </header>
  )
}
