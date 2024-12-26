import React from 'react';
import { Link } from 'react-router-dom';

export default function KelolaKursus(props) {
  const boxes = [
    { id: 1, title: 'gunakan sistem hidroponik yang modern', mentor: 'Mulyono',imgUrl: '/images/home/blog4.jpg' },
    { id: 2, title: 'pengendalian hama dan penyakit tanaman hidroponik', mentor: 'Indonesia Sehat',imgUrl: '/images/home/blog5.jpg' },
    { id: 3, title: 'Formula sempurna untuk pertumbuhan optimal', mentor: 'Sri Darmi',imgUrl: '/images/home/blog6.jpg' },
    { id: 4, title: 'Berkebun mudah di lahan yang sempit', mentor: 'Lala Suri',imgUrl: '/images/home/blog1.jpg' },
  ];

  return (
    <div className='py-8 px-16 rounded-2xl shadow-2xl min-h-full w-full'>
      <h1 className='font-bold text-lg'>Request Upload Video</h1>
      {boxes.map((box) => (
        <div key={box.id} className='flex justify-between items-center my-6 gap-10'>
          <div className='flex items-center gap-4'>
            <img
              src={box.imgUrl}
              alt=""
              className='object-cover rounded-xl w-60 h-40'
            />
            <div className='flex flex-col'>
              <h1>{box.title}</h1>
              <p className='text-sm text-cyan-500'>{box.mentor}</p>
            </div>
          </div>

          {/* container button */}
          <div className='flex gap-2'>
            {/* button approve */}
            <button
              className='text-sm border border-green-500 text-green-500 py-2 px-2 rounded-lg hover:bg-green-500 hover:text-white duration-300 ease-out'
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                {...props}
              >
                <path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" />
              </svg>
            </button>

            {/* button lihat video */}
            <button
                className='text-sm border border-cyan-500 text-cyan-500 py-2 px-2 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out'
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                {...props}
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z" />
              </svg>
            </button>

            {/* button hapus */}
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
