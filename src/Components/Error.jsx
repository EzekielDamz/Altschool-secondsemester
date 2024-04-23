import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className=" bg-[#0f0f1a] ">
      <div className="text-center pt-[30rem] pb-[13.7rem] h-[100svh]">
        <h1 className='text-white font-bold text-4xl '>404 </h1>
        <p className='pt-[2rem] text-white text-2xl pb-[2rem] max-sm:mx-2'>Sorry, we were unable to find that page</p>
        <p className='text-white text-xl'>
          Start from <Link to="/" className='underline '> home page</Link>
        </p>
      </div>
    </section>
  );
}

export default Error
