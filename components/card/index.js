import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';
import {FaFacebook,FaInstagram,FaLinkedinIn,FaTwitter } from "react-icons/fa";

export default function Card({name, post, img = "/rotaractLogo.png"}) 
{
    useEffect(() => {
        Aos.init()
      }, [])
      
    return(
        <>
            <div className='card-1 sm:min-h-[15rem] rounded-md bg-slate-100  w-[12rem]  drop-shadow-xl'  data-aos="fade-up">
                    <div className=' sm:bg-gradient-to-b from-pink-500 to-pink-300 rounded-md h-[8rem]   sm:gap-8 sm:flex flex-col place-content-center place-items-center'>   
                     <div className='rounded-full sm:h-20 sm:w-20 bg-slate-300 relative flex '><Image src={img} layout="fill" alt="DP"></Image></div> 
                </div>
                <div className='hover: pt-7 space-y-2 ' data-aos="fade-left">
                    <h4 className='p1 sm:text-sm text-center '>{post}</h4>
                    <h5 className=" sm:text-sm text-center">{name}</h5>
                
                </div>
                <div className='pt-5 pb-3 flex justify-center gap-5 ' data-aos="fade-right">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaLinkedinIn/>
                    <FaTwitter/>
                
                </div>
            </div>
        </>
    )
}

