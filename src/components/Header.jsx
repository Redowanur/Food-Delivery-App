import React, { useContext, useEffect } from 'react'
import { LOGO_URL } from '../assets/img/images'
import { Link } from 'react-router-dom'
import { CiDark } from 'react-icons/ci'
import { IoCart } from 'react-icons/io5'
import { useSelector } from 'react-redux'

function Header() {
    const cartItems = useSelector(store => store.cart.items)
    return (
        <div className='w-full h-20 flex justify-center items-center bg-white drop-shadow-md fixed top-0 z-10'>
            <div className='w-[1300px] flex items-center justify-between'>
                <div className='h-20 flex justify-center items-center'>
                    <Link to='/'><img src={LOGO_URL} className='h-16' /></Link>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <CiDark className='text-4xl' />
                    <Link to='/cart'>
                        <div className='flex relative'>
                            <IoCart className='text-4xl' />
                            <span className={`${cartItems.length>0? 'bg-red-400 w-5 h-5 flex justify-center rounded-full text-sm font-bold pt-[1px] absolute -right-2 -top-1':'hidden'}`}>{cartItems.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header