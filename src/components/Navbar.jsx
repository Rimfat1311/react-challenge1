import React from 'react'

const Navbar = () => {
  // logic
  const handleClick = (e) => {
    console.log('hello timnan', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }
  return (
    // interface
    <div className='flex p-20 justify-between  text-pink-700 mb-10'>
        <h1>The Dojo Blog</h1>
        <div>
            <ul className='flex gap-10'>
                <li><a href="">Home</a></li>
                <li><a href="">New Blog</a></li>
            </ul>
        </div>
        <button onClick={handleClick} className='bg-red-500 p-5 hover:bg-slate-800'>click me</button>
        <button onClick={(e) => handleClickAgain('happy',e)}  className='bg-green-500 p-5 hover:bg-slate-800'>click me again</button>

    </div>
  )
}

export default Navbar
