import React from 'react'

const Home = () => {
    const handleClick = () => {
        console.log('hello timnan');
      }
    
   
  return (
    <div>
        <h2>Homepage</h2>
        <button onClick={handleClick} className='bg-orange-500 p-5 hover:bg-slate-400'>click me</button>
        <button>tfghjkl ertyui</button>
        </div>
  )
}

export default Home