import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/TaniKroos')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <div className='bg-yellow-100'>Github followers: {data.followers}
        <img src={data.avatar_url} className='rounded-lg ' alt="" /></div>
    )
}

export default Github


// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/TaniKroos')
//     return response.json()
// }