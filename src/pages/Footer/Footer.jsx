import React from 'react'

function Footer() {
  return (
    <div className='h-[500px] bg-stone-950 flex justify-center items-center gap-28 text-white'>
      <div className='w-40 h-full pt-16'>
        <h1 className='font-bold text-2xl mb-2'>Swiggy</h1>
        <p>© 2024 Bundl Technologies Pvt. Ltd</p>
      </div>
      <div className='h-full pt-16'>
        <ul className='flex flex-col gap-2 text-gray-200'>
          <li className='font-bold text-white'>Company</li>
          <li>About</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Swiggy One</li>
          <li>Swiggy Instamart</li>
          <li>Swiggy Genie</li>
        </ul>
      </div>
      <div className='h-full pt-16'>
        <ul className='flex flex-col gap-2 text-gray-200'>
          <li className='font-bold text-white'>Contact us</li>
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
        <ul className='flex flex-col gap-2 text-gray-200 mt-6'>
          <li className='font-bold text-white'>Legal</li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
          <li>Investor Relations</li>
        </ul>
      </div>
      <div className='h-full pt-16'>
        <ul className='flex flex-col gap-2 text-gray-200'>
          <li className='font-bold text-white'>We deliver to:</li>
          <li>Bangalore</li>
          <li>Gurgaon</li>
          <li>Hyderabad</li>
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Pune</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer