import React, { useState, useEffect } from 'react';
import HomeKursus from '../components/HomeKursus';
import Topics from '../components/Topics';
import SidebarFilter from '../components/SidebarFilter';
import CourseCaroussell from '../components/CourseCaroussell';

export default function Kursus(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Taro logic search bar disini
  };

  return (
    <>
    <div
      className='mb-24 mt-40 mx-32 min-h-96 bg-primary rounded-3xl'
      style={{
        backgroundImage: 'url(/images/bgMainDiv.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='p-12'>
        <h1 className='text-[3rem] font-bold text-white max-w-[42rem]'>
          Kursus <span className='text-secondary'> Hidroponik</span>
        </h1>
        <p className='text-white pb-20 w-[30rem]'>
          Silahkan pilih kursus yang cocok untuk anda, kami telah menyediakan beberapa kursus di bawah ini.
        </p>

        {/* Search Bar */}
        <div className="flex items-center rounded-xl w-full max-w-md px-4 py-2 bg-white shadow-sm">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari kursus yang anda inginkan..."
            className="flex-grow focus:outline-none text-gray-700 text-sm"
          />
          <button onClick={handleSearch} className="text-secondary hover:text-primary duration-300 ml-2">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              {...props}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617z" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <div className='w-full shadow-2xl rounded-3xl mb-24 bg-other1'>
      <Topics />
    </div>

    <h1 className='mx-32 font-bold text-4xl mb-24 text-secondary'>Rekomendasi Kursus</h1>
    <HomeKursus />

    <h1 className='ml-32 font-bold text-4xl mb-20 text-secondary'>Semua Kursus</h1>
    <div className="flex mb-28">
      <SidebarFilter />
      <div className="flex items-start">
        <div className="w-px h-full bg-black mx-10"></div>
        <CourseCaroussell />
        <div>
        </div>
      </div>
    </div>

    </>
  );
}
