"use client"
import React from 'react'
import Image from 'next/image'
import Profile from '@/public/profile.svg'
import Link from 'next/link'
type posttype ={
  "id": number,
  "title": string,
  "body": string,
  "userId": number,
  "tags": string[],
  "reactions": number
}
const Container = (data : posttype ,type : string) => {
  
  return (
    
    
    <div
    // className="bg-base-200 hover:border hover:bg-base-100 hover:border-stone-500 w-full h-fit mt-2 p-2">
    className="bg-base-200 border-t-8 border-t-primary  rounded-md  h-fit mr-2 my-1 p-2">
      <h1
      className=" text-2xl text-secondary-focus font-extrabold">
        {data.title}
      </h1>
      <p
      className="">
       {data.body}
      </p>
      <div
      className=" w-full flex justify-between items-center">
        <div
        className='flex items-center'>
        <Image src={Profile} width={35} height={35} alt="Picture of the author" />
        <p>Created By {data.userId}</p>
        </div>
        <Link href={`/project/view/${data.id}`}
        className='btn btn-outline font-extrabold btn-secondary '> view 🚀</Link>
        
       
        
      </div>
    </div>
  
  )
}

export default Container