import React from 'react'

// img caroussell yg backgroundnya ijo muda
export default function Topics() {
    const topics = [
        { id: 1, title: 'Dasar Hidroponik', imgUrl: '/images/home/topic1.png' },
        { id: 2, title: 'DIY Sistem Hidroponik', imgUrl: '/images/home/topic2.png' },
        { id: 3, title: 'Nutrisi Tanaman', imgUrl: '/images/home/topic3.png' },
        { id: 4, title: 'Solusi Masalah Hidroponik', imgUrl:'/images/home/topic4.png'},
        { id: 5, title: 'Hidroponik Komersial', imgUrl:'/images/home/topic5.png'},
      ];
      return (
        <div className="flex flex-wrap justify-start align-middle gap-20 pb-20 pt-20 mx-32">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="w-64 h-64 bg-white rounded-xl flex flex-col items-center justify-center"
            >
              <img 
                src={topic.imgUrl} 
                alt="" 
                className="object-cover rounded-xl w-3/4 h-3/4"
              />
              <h3 className="text-secondary font-bold text-center mt-2">{topic.title}</h3>
            </div>
          ))}
        </div>
      )
    }      
