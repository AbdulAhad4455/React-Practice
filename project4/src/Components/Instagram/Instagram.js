import React from 'react'
import {useLoaderData} from 'react-router-dom'

const Instagram = () => {
    const insta = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
          Instagram Followers :{insta.followers}
          <img src={insta.avatar_url} alt='Git-Pic' width={300}/>
        </div>
      )
    }
    
    export default Instagram
     export const instagramInfoLoader = async ()=> {
      const respons = await fetch('https://api.instagram.com/users/ahadansari56')
      return respons.json()
     }