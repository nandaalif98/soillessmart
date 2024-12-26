import React, { useEffect } from 'react'

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let boxes = [
    { id: 1, title: 'Pengendalian Hama dan Penyakit Tanaman Hidroponik', imgUrl: '/images/home/HomeKursus1.jpg' },
    { id: 2, title: 'Mengapa Menjaga PH Penting pada Pertanian Hidroponik?', imgUrl: '/images/home/HomeKursus2.jpg' },
    { id: 3, title: 'Mempercantik Rumah dengan Tanaman Hidroponik', imgUrl: '/images/home/blog4.jpg' },
    { id: 4, title: 'Pengendalian Hama dan Penyakit Tanaman Hidroponik', imgUrl: '/images/home/HomeKursus1.jpg' },
    { id: 5, title: 'Mengapa Menjaga PH Penting pada Pertanian Hidroponik?', imgUrl: '/images/home/HomeKursus2.jpg' },
    { id: 6, title: 'Mempercantik Rumah dengan Tanaman Hidroponik', imgUrl: '/images/home/blog4.jpg' },
  ];

  // buat contoh teks doang
  let text =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  let repeatedTexts = Array(5).fill(text);
  return (
    <>
      <div className='mx-32'>
        <h1 className='text-center font-bold text-4xl mb-24 mt-40 text-secondary'>Blog</h1>

        {/* main container judul & berita lainnya */}
        <div className='flex justify-between'>
          {/* sub-container judul*/}
          <div className='flex flex-col gap-4 max-w-[110rem]'>
            <h1 className='text-2xl font-bold text-secondary'>Apa sih pengertian hidroponik?</h1>
            <h3 className='text-sm text-tertiary'>Penulis: John Doe</h3>
            <img 
              src="/images/home/opening2.jpeg" 
              alt="" 
              className='w-full h-80 object-cover rounded-2xl'/>
            {repeatedTexts.map((item, index) => (
              <div key={index}>
                <p className="mb-3 text-justify">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className='w-0.5 h-1 px-4'></div>

          {/* sub-container berita lainnya */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-secondary pb-10'>Berita lainnya</h1>  
              {boxes.map((box) => (
                <div
                  key={box.id}
                  className="flex max-w-full bg-white rounded-xl"
                >
                  <img 
                    src={box.imgUrl} 
                    alt="" 
                    className="object-cover rounded-lg h-32 max-w-60"
                  />
                  <div className="ml-4 flex flex-col">
                    <h3 className="text-secondary font-semibold text-justify text-sm">{box.title}</h3>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  )
}