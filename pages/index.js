import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img1 from "../asts/img1.jpg";


export default function Home() {
  
  return (
    <>
      <div className="text-gray-900 text-4xl flex items-center justify-center bg-indigo-50 h-screen    ">
        <div className="flex items-center justify-center bg-purple-400 w-3/5 h-4/5 rounded-2xl">

        <div className="bg-pink-700 w-1/2 h-full rounded-l-2xl flex">

        <div className="flex items-center justify-center w-full h-2/4 bg-red-900 rounded-l-2xl">
       
        </div>

        </div>
       
          {/* image dev */}

        <div className="bg-gray-700 w-1/2 h-full rounded-r-2xl">
       <Image src ={img1} alt="this is a pice " width={500}
      height={650} className="h-16 w-full object-cover rounded-r-2xl"/>
           
        </div>
         
        
        </div>
      </div>  

    </>
  )
}
