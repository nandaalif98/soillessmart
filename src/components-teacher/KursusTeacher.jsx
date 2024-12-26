import React from 'react';
import { Link } from 'react-router-dom';

export default function KursusTeacher(props) {
  const boxes = [
    { id: 1, title: 'gunakan sistem hidroponik yang modern', imgUrl: '/images/home/blog4.jpg' },
    { id: 2, title: 'pengendalian hama dan penyakit tanaman hidroponik', imgUrl: '/images/home/blog5.jpg' },
    { id: 3, title: 'Formula sempurna untuk pertumbuhan optimal', imgUrl: '/images/home/blog6.jpg' },
    { id: 4, title: 'Berkebun mudah di lahan yang sempit', imgUrl: '/images/home/blog1.jpg' },
  ];

  return (
    <div className='p-8 rounded-2xl shadow-2xl min-h-full w-full'>
      <h1 className='font-bold text-lg'>Video Saya</h1>
      {boxes.map((box) => (
        <div key={box.id} className='flex justify-between items-center my-6 gap-10'>
          <div className='flex items-center gap-4'>
            <img
              src={box.imgUrl}
              alt=""
              className='object-cover rounded-xl w-60 h-40'
            />
            <h1>{box.title}</h1> {/* Judul di samping gambar */}
          </div>

          {/* btn container */}
          <div className='flex gap-2'>
            {/* btn edit kursus */}
            <Link to='/editkursus'>
              <button
                className='text-sm border border-yellow-500 text-yellow-500 py-2 px-2 rounded-lg hover:bg-yellow-500 hover:text-white duration-300 ease-out'
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  {...props}
                >
                  <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
              </button>
            </Link>
            
            {/* btn hapus kursus */}
            <button
              className='text-sm border border-red-500 text-red-500 py-2 px-2 rounded-lg hover:bg-red-500 hover:text-white duration-300 ease-out'
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                {...props}
              >
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
