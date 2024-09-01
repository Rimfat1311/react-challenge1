import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-10 justify-between'>
        <h1>The Dojo Blog</h1>
        <div>
            <ul className='flex justify-between gap-10'>
                <li><a href="">Home</a></li>
                <li><a href="">New Blog</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
