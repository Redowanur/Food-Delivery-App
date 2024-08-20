import React from 'react'
import { LOGO_URL, CART_URL } from '../../assets/img/images'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='w-full h-20 flex justify-center items-center bg-white drop-shadow-md fixed top-0 z-10'>
            <div className='w-[1300px] flex items-center justify-between'>
                <div className='h-20 flex justify-center items-center'>
                    <Link to='/'><img src={LOGO_URL} className='h-16' /></Link>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-20 flex justify-center'>
                        <Link to='/cart'><img src={CART_URL} className='w-12' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header