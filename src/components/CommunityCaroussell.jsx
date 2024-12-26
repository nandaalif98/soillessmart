import React from 'react'
import { Link } from 'react-router-dom'

export default function CommunityCaroussel(props) {
    const boxes = [
        { id: 1, name: 'Kebun Cantik', desc:'Telah berdiri sejak 2010 komunitas ini sudah sangat banyak membatu orang awam yang ingin memulai hydroponik ', imgUrl: '/images/home/blog4.jpg' },
        { id: 2, name: 'Sayur Subur', desc:'Telah berdiri sejak 2018 komunitas ini sudah sangat banyak membatu orang awam yang ingin memulai hydroponik ', imgUrl: '/images/home/blog5.jpg' },
        { id: 3, name: 'Palembang Hijau', desc:'Telah berdiri sejak 2019 komunitas ini sudah sangat banyak membatu orang awam yang ingin memulai hydroponik ', imgUrl: '/images/home/blog6.jpg' },
        { id: 4, name: 'Cinta Hidroponik', desc:'Telah berdiri sejak 2020 komunitas ini sudah sangat banyak membatu orang awam yang ingin memulai hydroponik ', imgUrl:'/images/home/blog1.jpg'},
      ];
  return (
    <div className='flex justify-start flex-wrap gap-20'>
        {boxes.map((box) => (
            <Link to='/detailkomunitas' key={box.id}>
            <div
                className="w-80 h-96 bg-white rounded-xl flex flex-col items-start justify-center"
            >
                <img 
                    src={box.imgUrl} 
                    alt="" 
                    className="object-cover rounded-xl w-full h-60"
                />
                <div className="flex items-center gap-2 pt-4">
                    <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        {...props}
                    >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                    <h3 className="text-primary text-sm font-bold">{box.name}</h3>
                </div>
                <h4 className="text-secondary text-sm text-justify">{box.desc}</h4>
            </div>
            </Link>
        ))}
    </div>
  )
}
