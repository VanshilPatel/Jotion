"use client"

import Image from "@/node_modules/next/image";


const DocumentsPage = () => {
    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image
          src="/empty.png"
          height="300"
          width="300"
          alt="Empty"
          className="dark:hidden"
        />
        <Image
          src="/empty-dark.png"
          height="300"
          width="300"
          alt="Empty"
          className="hidden dark:block"
        />
        </div>
     );
}
 
export default DocumentsPage;