import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-zinc-700 text-gray-300 py-2 px-3 mt-24'>
      <div className=' mx-auto grid space-x-20 md:grid-cols-4'>
      <div className=''>
        <h6 className="text-2xl py-3 font-raleway">Explore</h6>
        <p className=''>Stream millions of movies for free from our  limitless server </p>
        <a className='p-2 text-1xl bg-yellow-700 rounded-md'>Learn more...</a>
      </div>
      <div>
        <h6 className="text-2xl py-3 font-raleway">Help</h6>
        <p>Check our FAQs for any help</p>
      </div>
      <div>
        <h6 className="text-2xl py-3 font-raleway">Socials</h6>
        <p>Engage in the community!</p>
      </div>
      </div>
      {/* <div className='col-span-2 pt-8 md:pt-2'>
      <h6 className='capitalize text-center text-2xl'>Get fascinating movies every week</h6>
      <form className='flex flex-col sm:flex-row'>
        <input className='w-full p-2 rounded-md' type="email"/>
        <button className='p-2  rounded-md bg-blue-400'>Subscribe</button>
      </form>
      </div> */}
    </div>
  )
}

export default Footer