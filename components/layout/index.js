import { useEffect, useState } from "react"
import Navbar from "../navbar"
import Script from 'next/script'
import Head from "next/head"

export default function Layout({ children }) {
  const [browser, setbrowser] = useState(false)

  useEffect(() => {
    setbrowser(true)
  }, [])
    

    return (
      <>
          <Navbar/>
          <div className='min-h-[200vh] m-0 pt-20 bg-slate-100  text-[#121212]  flex justify-center'>
            <div className='w-full md:w-[100%] text-2xl  flex flex-col gap-10 '> 
              {children}
            </div>
          </div>
          
      </>
    )
  
}