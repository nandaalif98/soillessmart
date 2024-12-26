import React from 'react'
import TransHistory from '../components-teacher/TransHistory'

export default function Transaction(props) {
  return (
    <div className='ml-80 mr-16 my-16'>
        <div className='flex flex-col gap-10'>
            <div className='flex justify-start gap-6 p-16 w-full rounded-3xl shadow-2xl bg-gradient-to-r from-green-400 to-blue-500'>
                <svg
                    viewBox="0 0 640 512"
                    fill="currentColor"
                    height="2.25em"
                    width="2.25em"
                    className='text-white'
                    {...props}
                >
                    <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-174-.2c-13.3 0-24-10.7-24-24s10.7-24 24-24h174.1L535 41zM105 377l-23 23h174c13.3 0 24 10.7 24 24s-10.7 24-24 24H81.9l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64h241.9c-3.7 7.2-5.9 15.3-5.9 24 0 28.7 23.3 52 52 52h117.4c-4 17 .6 35.5 13.8 48.8 20.3 20.3 53.2 20.3 73.5 0l19.3-19.3V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24 0-28.7-23.3-52-52-52H138.6c4-17-.6-35.5-13.8-48.8-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zm384 192c-35.3 0-64 28.7-64 64h64v-64zm-224 32c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96z" />
                </svg>
                <p className='font-bold text-4xl text-white'>
                    Transaksi
                </p>
            </div>
            
            {/* total sales */}
            <div className='shadow-2xl rounded-3xl py-8 px-16 w-full'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <h2>Total Sales</h2>
                        <svg
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            height="2.25em"
                            width="2.25em"
                            className='text-green-500 bg-green-200 rounded-lg p-2'
                            {...props}
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                            />
                        </svg>
                    </div>
                    <h1 className='text-2xl font-bold'>Rp234.000</h1>
                    <h2><span className='text-primary'>1.3%</span> Up from last week</h2>
                </div>
            </div>
            <TransHistory />
        </div>
    </div>
  )
}
// text-cyan-500 bg-cyan-200 rounded-lg p-2