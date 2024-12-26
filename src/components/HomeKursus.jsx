import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeKursus() {
  const boxes = [
    { id: 1, title: 'Pengendalian Hama dan Penyakit Tanaman Hidroponik', seller: 'Tanah Air Team', price: 'Rp23.799', imgUrl: '/images/home/HomeKursus1.jpg' },
    { id: 2, title: 'Formula Sempurna Untuk Pertumbuhan Optimal', seller: 'Bu Hajah Hidroponik', price: 'Rp30.999', imgUrl: '/images/home/HomeKursus2.jpg' },
    { id: 3, title: 'Mempercantik Rumah dengan Tanaman Hidroponik', seller: 'Kleptoniak', price: 'Rp15.899', imgUrl: '/images/home/HomeKursus3.jpg' },
    { id: 4, title: 'Gunakan Sistem Hidroponik yang Modern', seller: 'Hidroponik Bag Kalsel', price: 'Rp39.300', imgUrl: '/images/home/HomeKursus4.jpg' },
  ];

  return (
    <div className="grid grid-cols-4 gap-8 pb-20 mx-32">
      {boxes.map((box) => (
        <Link to="/detailkursus" key={box.id}>
          <div
            className="w-80 h-96 bg-white rounded-xl flex flex-col items-start justify-center"
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
  );
}
