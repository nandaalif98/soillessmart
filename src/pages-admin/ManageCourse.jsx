import React from 'react'
import KursusAdmin from '../components-admin/KursusAdmin'

export default function ManageCourse(props) {
  return (
    <div className='ml-80 mr-16 my-16'>
      <div className='flex flex-col gap-10'>
        <div className='flex justify-start gap-6 p-16 w-full rounded-3xl shadow-2xl bg-gradient-to-r from-green-400 to-blue-500'>
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="2.25em"
            width="2.25em"
            className='text-white'
            {...props}
          >
            <path d="M64 480h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64z" />
          </svg>
          <p className='font-bold text-4xl text-white'>
            Kelola Kursus Anda
          </p>
        </div>
        <KursusAdmin />
        
      </div>
    </div>
  )
}
