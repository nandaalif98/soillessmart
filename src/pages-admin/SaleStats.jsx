import React from 'react'
import DiagramPenjualan from '../components-admin/DiagramPenjualan'

export default function SaleStats(props) {
  return (
    <div className='ml-80 mr-16 my-16'>
      <div className='flex flex-col gap-10'>
        <div className='flex justify-start gap-6 p-16 w-full rounded-3xl shadow-2xl bg-gradient-to-r from-green-400 to-blue-500'>
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="2.25em"
            width="2.25em"
            className='text-white'
            {...props}
          >
            <path
              fillRule="evenodd"
              d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
            />
          </svg>
          <p className='font-bold text-4xl text-white'>
            Statistik Penjualan Anda
          </p>
        </div>
        <DiagramPenjualan />
      </div>
    </div>
  )
}
