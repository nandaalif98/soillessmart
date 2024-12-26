import React from 'react';
import { Link } from 'react-router-dom';

export default function TransHistory(props) {
    const boxes = [
        { id: 1, title: 'gunakan sistem hidroponik yang modern', price:'15.000', imgUrl: '/images/home/blog4.jpg', buyer: 'ahmad' },
        { id: 2, title: 'pengendalian hama dan penyakit tanaman hidroponik', price:'15.000', imgUrl: '/images/home/blog5.jpg', buyer: 'faiz' },
        { id: 3, title: 'Formula sempurna untuk pertumbuhan optimal', price:'15.000', imgUrl: '/images/home/blog6.jpg',buyer: 'fauzi' },
        { id: 4, title: 'Berkebun mudah di lahan yang sempit', price:'15.000', imgUrl: '/images/home/blog1.jpg', buyer: 'Dihya' },
    ]

  return (
    <div className='shadow-2xl rounded-3xl p-16'>
        {boxes.map((box) => (
            <div className='flex justify-between items-center mb-4' key={box.id}>
                {/* buyer */}
                <div className='flex flex-col'>
                    <div className='flex justify-start items-center gap-2'>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            {...props}
                        >
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
                        </svg>
                        <h1 className='font-bold w-40'>{box.buyer}</h1>
                    </div>
                </div>

                {/* course thumbnail */}
                <img src={box.imgUrl} alt="" className='object-cover rounded-xl w-80 h-60' />
                <div className='flex flex-col gap-2 w-96'>
                    <h1 className='font-bold'>{box.title}</h1>
                    <p>{box.price}</p>
                    <Link to='/transvalidate'>
                        <button className='text-sm border border-cyan-500 text-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out'>
                            Detail Pembayaran
                        </button>
                    </Link>
                </div>
            </div>
        ))}
    </div>
  )
}
