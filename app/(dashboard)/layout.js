"use client"

import Navbar from '@/components/Navbar'
  import '../globals.css'

import Sidebar from '@/components/Sidebar'
import { useSession } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'


//RootLayout alterar para layout

export default function layout({ children }) {
  const {data:session,status}=useSession();

  //rota
  const router=useRouter();
//verificando
  if(status==="loading"){
    return (
      <body className="flex flex-col items-center h-[100vh] justify-center">
        <FontAwesomeIcon icon={faCircleNotch}
        className='w-8 h-8 animate-spin'
        />
        <p>Verificando se voce esta autenticado!</p>
      </body>
    )
    //caso estejamos autenticados
  } else if(status==="authenticated"){
    return (
    
      <body className='grid [grid-template-columns:250px_1fr] min-h-[100vh]' >
        <div className='relative'>
         <Sidebar/>
        </div>
        

        <div> 
          <Navbar/>
          {/* imagem do logotito */}
          <main className='mt-16 p-4'>{children}</main>
        </div>
      </body>
 
  )
  //caso nao ira nos mandar para a pasgina de login
  }else{
    return router.push('/auth/login')
  }
  // return (
    
  //     <body className='grid [grid-template-columns:250px_1fr] min-h-[100vh]' >
  //       <div className='relative'>
  //        <Sidebar/>
  //       </div>
        

  //       <div> 
  //         <Navbar/>
  //         {/* imagem do logotito */}
  //         <main className='mt-16 p-4'>{children}</main>
  //       </div>
  //     </body>
 
  // )
}
