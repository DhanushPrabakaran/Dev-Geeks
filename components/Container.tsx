import React from 'react'
import Image from 'next/image'
import Profile from '@/public/profile.svg'
const Container = () => {
  return (
    
    
    <div
    // className="bg-base-200 hover:border hover:bg-base-100 hover:border-stone-500 w-full h-fit mt-2 p-2">
    className="bg-base-200 border-t-4 border-stone-400  rounded-md  h-fit mr-2 my-1 p-2">
      <h1
      className=" text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem unde fuga consectetur quis et.
      </h1>
      <p
      className=" text-neutral-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in deleniti magnam exercitationem nobis! Minima laboriosam labore maxime nostrum suscipit explicabo obcaecati, temporibus fuga fugiat dignissimos voluptates quod quaerat magni!
      </p>
      <div
      className=" w-full flex justify-between items-center">
        <div
        className='flex items-center'>
        <Image src={Profile} width={35} height={35} alt="Picture of the author" />
        <p>Created By user</p>
        </div>
         
        <div
        className="btn bg-black text-xl">
        view
        </div>
      </div>
    </div>
  
  )
}

export default Container