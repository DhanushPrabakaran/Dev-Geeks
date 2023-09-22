
import React from 'react'
type posttype ={
  
  "id": number,
  "title": string,
  "body": string,
  "userId": number,
  "tags": string[],
  "reactions": number
}
export async function getpost(
 id : number
) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`,{cache:"force-cache"})
  const result:posttype=await  res.json();
  return  result;
}

const page = async( {
  params,
}: {
  params: { id: number };
}) => {
  const data = await getpost(params.id);
  return (
    <div>
      {data.title}
    </div>
  )
}

export default page