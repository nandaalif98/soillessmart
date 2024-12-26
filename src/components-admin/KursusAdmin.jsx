import React from 'react';
import { Link } from 'react-router-dom';

export default function KursusAdmin() {
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
            <h1 className=''>{box.title}</h1> {/* Judul di samping gambar */}
          </div>
          <div className='flex gap-4'>
            <Link to='/editkursus'>
              <button
                className='text-sm border border-cyan-500 text-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out'
              >
                Edit
              </button>
            </Link>

            <button
              className='text-sm border border-red-500 text-red-500 py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white duration-300 ease-out'
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
