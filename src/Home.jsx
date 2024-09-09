import React from 'react'
import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState("Timnan")
    const [age, setAge] = useState(30)

    const handleClick = () => {
        setName("Rimfat")
        setAge(35)
      }
    
   
  return (
    <div>
        <h2 className='font-bold'>Homepage</h2>
        <p className='m-5'> {name} is {age} years old </p>
        <button onClick={handleClick} className='bg-orange-500 p-5 hover:bg-slate-400'>click me</button>
        </div>
  )
}

export default Home