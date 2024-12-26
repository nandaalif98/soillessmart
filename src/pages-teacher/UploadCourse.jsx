import React, { useState } from 'react';

export default function UploadCourse() {
  const [course, setCourse] = useState({
    title: '',
    desc: '',
    price: '',
    video: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setCourse({
      ...course,
      video: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // taro logic buat upload course ke server atau db
    console.log("Course Data:", course);
  };

  return (
    <div className='ml-80 mr-16 my-16'>
      <div className='flex flex-col gap-10'>
        <div className='flex justify-start gap-6 p-16 w-full rounded-3xl shadow-2xl bg-gradient-to-r from-green-400 to-blue-500'>
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="2.25em"
            width="2.25em"
            className='text-white'
          >
            <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h117.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H448c35.3 0 64 28.7 64 64V416zm-280-40c0 13.3 10.7 24 24 24s24-10.7 24-24v-64h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v64h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" />
          </svg>
          <p className='font-bold text-4xl text-white'>
            Upload Kursus Anda
          </p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-6 bg-white p-8 rounded-3xl shadow-2xl'>
          <div className='flex flex-col'>
            <label className='font-semibold'>Judul Video</label>
            <input
              type='text'
              name='title'
              value={course.title}
              onChange={handleChange}
              className='border border-gray-300 p-2 rounded-lg w-full'
              placeholder='Masukkan judul video kursus'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold'>Deskripsi</label>
            <textarea
              name='desc'
              value={course.desc}
              onChange={handleChange}
              className='border border-gray-300 p-2 rounded-lg w-full'
              placeholder='Masukkan deskripsi kursus'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold'>Harga</label>
            <input
              type='number'
              name='price'
              value={course.price}
              onChange={handleChange}
              className='border border-gray-300 p-2 rounded-lg w-full'
              placeholder='Masukkan harga kursus'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold'>Upload Video</label>
            <input
              type='file'
              accept='video/*'
              onChange={handleFileChange}
              className='hidden'
              id='videoupload'
            />

            <label 
              htmlFor="videoupload"
              className='cursor-pointer text-sm border border-gray-300 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 duration-300 ease-out inline-block'  
            >
              Pilih Video
            </label>
            {course.video && (
              <p className='mt-2 text-gray-600'>{course.video.name}</p>
            )}
          </div>

          <button
            type='submit'
            className='text-sm mt-4 border border-cyan-500 text-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out'
          >
            Upload Kursus
          </button>
        </form>
      </div>
    </div>
  );
}