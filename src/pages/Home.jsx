import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Memecard from "../components/Memecard"
import {fetchMemes } from "../api/memeapi"
const Home = () => {
  const [data,setData]=useState([])
    useEffect(() => {
        fetchMemes().then(memes=>setData(memes.data.memes))
    }, [])
  
  return (
      <div className='row row-cols-4'>
      {
        data.map(el => <Memecard image={el.url} title={el.name} />)
          }
    </div>
  )
}

export default Home