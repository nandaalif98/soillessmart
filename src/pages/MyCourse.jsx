import React from 'react'

export default function MyCourse({ haveCourse = true }) {
  const boxes = [
    { id: 1, title: 'Pengendalian Hama dan Penyakit Tanaman Hidroponik', seller: 'Tanah Air Team', imgUrl: '/images/home/HomeKursus1.jpg' },
    { id: 2, title: 'Formula Sempurna Untuk Pertumbuhan Optimal', seller: 'Bu Hajah Hidroponik', imgUrl: '/images/home/HomeKursus2.jpg' },
    { id: 3, title: 'Mempercantik Rumah dengan Tanaman Hidroponik', seller: 'Kleptoniak', imgUrl: '/images/home/HomeKursus3.jpg' },
    { id: 4, title: 'Gunakan Sistem Hidroponik yang Modern', seller: 'Hidroponik Bag Kalsel', imgUrl: '/images/home/HomeKursus4.jpg' },
  ];

  if (haveCourse) {
    return (
      <>
      <div className='mx-32'>
        <h1 className='text-center text-3xl my-48 font-bold text-secondary'>Kursus yang sudah dibeli</h1>
        <div className='flex justify-center gap-10 my-20'>
          {boxes.map((box) => (
            <div 
              className='p-4 rounded-xl shadow-xl w-72'
              key={box.id}
              >
                <img 
                  src={box.imgUrl} 
                  alt="" 
                  className='rounded-xl w-72 h-36 object-cover'/>
                <h1 className='text-secondary font-semibold mt-2'>{box.title}</h1>
                <p className='text-primary text-sm mt-2'>{box.seller}</p>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  } else {
    return (
      <h1 className='text-center text-xl py-[28rem] text-tertiary'><i>Anda tidak memiliki course, silahkan pergi ke halaman kursus untuk membeli.</i></h1>
    );
  }
}