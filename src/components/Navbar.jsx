import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ isLoggedIn = true }, props) {
  if (isLoggedIn) {
    return (
        <div className='nav'>
            <img src="logo.png" alt="" className='w-48'/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="kursus">Kursus</Link></li>
                <li><Link to="komunitas">Komunitas</Link></li>
                <li><Link to="blog">Blog</Link></li>
            </ul>

            <div className="flex items-center gap-20">
                {/* Shopping Cart/Course yang udah dibeli user */}
                <Link to="mycourse">
                <svg
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    height="1.3em"
                    width="1.3em"
                    {...props}
                    >
                    <path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h52.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5h328c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zm152 512c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48z" />
                </svg>
                </Link>

                {/* Ke halaman dashboard user */}
                <Link to="dashboard">
                    {/* pas develop BE, srcnya ganti pake profpict user */}
                    <img src="/images/home/profpict.jpg" alt="" className='w-10 h-10 rounded-full object-cover' />
                </Link>
            </div>
        </div>
        )
    } else {
        return (
            <div className='nav'>
                <img src="logo.png" alt="" className='w-48'/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="kursus">Kursus</Link></li>
                    <li><Link to="komunitas">Komunitas</Link></li>
                    <li><Link to="blog">Blog</Link></li>
                </ul>
                {/* Elemen Button Login & Signup */}
                <div className='flex gap-4'>
                <Link 
                    to="/login"
                    className='w-24 h-9 rounded-xl text-primary border border-solid border-primary flex items-center justify-center text-center text-sm loginBtn'
                >
                    Login
                </Link>

                <Link 
                    to="/register"
                    className='w-24 h-9 rounded-lg text-white bg-primary border border-solid border-primary flex items-center justify-center text-center text-sm signupBtn'
                >
                    Sign Up
                </Link>
                </div>
            </div>
        )
    }
}
