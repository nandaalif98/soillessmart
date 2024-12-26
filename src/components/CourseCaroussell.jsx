import React from 'react'
import { Link } from 'react-router-dom';

export default function CourseCaroussell() {
  const boxes = [
    { id: 1, title: 'Pengendalian Hama dan Penyakit Tanaman Hidroponik', seller:'Tanah Air Team', price:'Rp23.799', imgUrl: '/images/home/HomeKursus1.jpg' },
    { id: 2, title: 'Formula Sempurna Untuk Pertumbuhan Optimal', seller:'Bu Hajah Hidroponik', price:'Rp30.999', imgUrl: '/images/home/HomeKursus2.jpg' },
    { id: 3, title: 'Mempercantik Rumah dengan Tanaman Hidroponik', seller:'Kleptoniak', price:'Rp15.899', imgUrl: '/images/home/HomeKursus3.jpg' },
    { id: 4, title: 'Pengendalian Hama dan Penyakit Tanaman Hidroponik', seller:'Tanah Air Team', price:'Rp23.799', imgUrl: '/images/home/HomeKursus1.jpg' },
    { id: 5, title: 'Formula Sempurna Untuk Pertumbuhan Optimal', seller:'Bu Hajah Hidroponik', price:'Rp30.999', imgUrl: '/images/home/HomeKursus2.jpg' },
    { id: 6, title: 'Mempercantik Rumah dengan Tanaman Hidroponik', seller:'Kleptoniak', price:'Rp15.899', imgUrl: '/images/home/HomeKursus3.jpg' },
    { id: 7, title: 'Pengendalian Hama dan Penyakit Tanaman Hidroponik', seller:'Tanah Air Team', price:'Rp23.799', imgUrl: '/images/home/HomeKursus1.jpg' },
    { id: 8, title: 'Formula Sempurna Untuk Pertumbuhan Optimal', seller:'Bu Hajah Hidroponik', price:'Rp30.999', imgUrl: '/images/home/HomeKursus2.jpg' },
    { id: 9, title: 'Mempercantik Rumah dengan Tanaman Hidroponik', seller:'Kleptoniak', price:'Rp15.899', imgUrl: '/images/home/HomeKursus3.jpg' },
  ];
  return (
    <div className='flex flex-wrap justify-center gap-16 mb-20 mr-32'>
        {boxes.map((box) => (
          <Link to="/detailkursus" key={box.id}>
            <div
              className="w-80 h-96 bg-white rounded-xl"
            >
            <img 
              src={box.imgUrl} 
              alt="" 
              className="object-cover rounded-xl h-3/4 w-full"
            />
              <h3 className="text-secondary font-semibold mt-2">{box.title}</h3>
              <h4 className="text-primary text-sm mt-4">{box.seller}</h4>
              <h2 className="text-secondary font-semibold mt-4">{box.price}</h2>
            </div>
          </Link>
        ))}
    </div>
  )
}
