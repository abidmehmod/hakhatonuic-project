import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'


const  chef = async () => {
 
  useEffect(() => {
    const fetchfunction  = async ()=>{
      const data = await client.fetch(`*[_type == "chef"]{
  name,position,experience,specialty,
    image,discription,available
}

        `)
    }
  }, []);






  return (
    <div>
   

    </div>
  )
}

export default chef