import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const About = () => {
    return (

        <div>
            <Navbar />
            <h1 className='text-white text-5xl my-5'> About</h1>
            <Link to="http://localhost:5173">
                <button className='text-white bg-cyan-950 rounded-full m-9 px-9 py-3'>Home</button>
            </Link>
            <Link to="/Service">
                <button className='text-white bg-cyan-950 rounded-full m-9 px-9 py-3'>Service</button>
            </Link>
            <Link to="/Customer">
                <button className='text-white bg-cyan-950 rounded-full m-9 px-9 py-3'>Customer</button>
            </Link>
            <Link to="/About">
                <button className='text-white bg-cyan-950 rounded-full m-9 px-9 py-3'>About</button>
            </Link>
        </div>
    )
}

export default About