import React, { useState, useEffect } from 'react'
import CommunityCaroussell from '../components/CommunityCaroussell';

export default function Komunitas(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Taro logic search bar disini, terserah pake algoritma searching apaan
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
            Temukan<span className='text-secondary'> Komunitas </span>
            yang Berada di Daerah Anda
          </h1>
          <p className='text-white pb-10'>
            Silahkan cari komunitas petani hidroponik di sekitar anda.
          </p>

          {/* Search Bar */}
          <div className="flex items-center rounded-xl w-full max-w-md px-4 py-2 bg-white shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Cari komunitas di daerah anda..."
              className="flex-grow focus:outline-none text-gray-700 text-sm"
            />
            {/* button search */}
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


      <div className='mx-32'>
        <h3 className='text-4xl font-bold text-secondary mt-4'>Sumatera Selatan</h3>
        <p>Komunitas yang sedang trending di Sumatera Selatan</p>
        <CommunityCaroussell />

        <h3 className='text-4xl font-bold text-secondary mt-4'>Jawa Barat</h3>
        <p>Komunitas yang sedang trending di Jawa Barat</p>
        <CommunityCaroussell />

        <h3 className='text-4xl font-bold text-secondary mt-4'>Riau</h3>
        <p>Komunitas yang sedang trending di Riau</p>
        <CommunityCaroussell />

        <h3 className='text-4xl font-bold text-secondary mt-4'>Kalimantan Selatan</h3>
        <p>Komunitas yang sedang trending di Kalimantan Selatan</p>
        <CommunityCaroussell />

      </div>
    </>
  )
}
