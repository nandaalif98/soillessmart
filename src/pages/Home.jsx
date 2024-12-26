import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Topics from '../components/Topics'
import HomeKursus from '../components/HomeKursus'
import HomeBlog from '../components/HomeBlog'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='flex items-center justify-between my-64 mx-32'>
        <div className='w-[40rem]'>

          <h2 className='font-semibold'>Berkebun Keren, Hidup Sehat!</h2>
          <h1 className='text-primary font-bold text-[5rem] py-0'>
            SOILLES
            <span className='text-title'>SMART</span>
          </h1>
          <p className='text-tertiary'>
            Berkebun seru tanpa ribet! Hidroponik adalah solusi yang tepat menanam sayuran segar di rumah meski dengan ruang terbatas.
          </p>

          <button 
          className='w-48 h-10 rounded-xl text-white bg-primary border border-solid border-primary flex items-center justify-center text-center text-xs mt-4 transition-transform duration-300 ease-out transform hover:scale-105'>
            <Link to='/kursus'>Mulai kursus sekarang</Link>
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-9">
          <div className='mt-16'>
            <img 
              src="/images/home/opening1.jpeg" 
              alt="Image not found" 
              className="object-cover h-[24rem] w-[20rem] rounded-2xl"
            />
          </div>
          <img 
            src="/images/home/opening2.jpeg" 
            alt="Image not found" 
            className="object-cover h-[24rem] w-[20rem] rounded-2xl"
          />
        </div>
      </div>

      {/* Favourite topic to learn */}
      {/* elemennya ada di /pages/Topics.jsx */}
      <div className='w-full shadow-2xl rounded-3xl bg-other1'>
        <h1 className='mx-32 font-bold text-4xl pt-20 text-secondary'>Topik favorit untuk dipelajari</h1>
        <Topics />
      </div>

      {/* Dari 'kursus kami' sampai 'blog' */}

        <h1 className="text-center text-4xl pt-28 pb-4 font-bold text-secondary">Kursus Kami</h1>
        <div className="flex justify-center pb-36">
          <div className="w-72 bg-primary h-1"></div>
        </div>
        <HomeKursus/>

        {/* Komunitas */}
        <h1 className="text-center text-4xl pt-28 pb-4 font-bold text-secondary">Komunitas</h1>
        <div className="flex justify-center pb-36">
          <div className="w-64 bg-primary h-1"></div>
        </div>
        <div className='mx-32 pb-20 flex items-center justify-between'>
          <div className='w-[40rem]'>
            <h3 className='text-3xl font-bold w-[42rem] pb-4 text-justify'>Berkembang bersama komunitas petani hidroponik dari seluruh penjuru nusantara</h3>
            <p className='text-tertiary w-96'>Berkembang bersama komunitas Hidroponik kami dan pelajari cara bertani modern.</p>
            <button 
              className='w-48 h-10 rounded-xl text-white bg-primary border border-solid border-primary flex items-center justify-center text-center text-xs mt-4 transition-transform duration-300 ease-out transform hover:scale-105'>
              <Link to='/komunitas'>Gabung komunitas</Link>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-9">
            <img 
              src="/images/home/komunitas1.jpg" 
              alt="Image not found" 
              className="object-cover h-[20rem] w-[20rem] rounded-full"
            />
            <img 
              src="/images/home/komunitas2.jpg" 
              alt="Image not found" 
              className="object-cover h-[20rem] w-[20rem] rounded-full"
            />
          </div>
        </div>

        {/* Blog */}
        <h1 className="text-center text-4xl pt-28 pb-4 font-bold text-secondary">Blog</h1>
        <div className="flex justify-center pb-36">
          <div className="w-32 bg-primary h-1"></div>
        </div>
        <HomeBlog />
    </>
  )
}