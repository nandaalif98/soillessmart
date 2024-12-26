import React, { useState } from 'react'

export default function AddBlog(props) {
    const [news, setNews] = useState({
      title: '',
      content: '',
      image: '',
    });

    const handleChange = (e) => {
      const {name, value} = e.target;
      setNews({
        ...news,
        [name]: value,
      });
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setNews({
          ...news,
          image: URL.createObjectURL(file),
        });
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // taro logic upload blog ke server atau db
      console.log("News Data:", news);
    };

  return (
    <div className='ml-72 mr-16 my-16'>
      <div className='flex flex-col gap-10'>
        <div className='flex justify-start gap-6 p-16 w-full rounded-3xl shadow-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2.25em"
            width="2.25em"
            className='text-white'
            {...props}
          >
            <path d="M20 3H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M5 7h5v6H5V7m14 10H5v-2h14v2m0-4h-7v-2h7v2m0-4h-7V7h7v2z" />
          </svg>
          <p className='font-bold text-4xl text-white'>
            Upload Blog
          </p>
        </div>

        {/* form upload berita */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 bg-white p-16 rounded-3xl shadow-2xl'>
          <div className='flex flex-col'>
            <label className='font-semibold'>Judul Blog</label>
            <input
              type='text'
              name='title'
              value={news.title}
              onChange={handleChange}
              className='border border-gray-300 p-2 rounded-lg w-full'
              placeholder='Masukkan Judul Berita'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold'>Konten Blog</label>
            <textarea
              name='content'
              value={news.content}
              onChange={handleChange}
              className='border border-gray-300 p-2 rounded-lg w-full'
              placeholder='Masukkan Isi Berita'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold'>Upload Gambar</label>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='hidden'
              id='imageupload'
            />

            <label 
              htmlFor="imageupload"
              className='cursor-pointer text-sm border border-gray-300 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 duration-300 ease-out inline-block'  
            >
              Pilih Gambar
            </label>
            {/* preview gambar */}
            {news.image && (
              <img src={news.image} alt="Thumbnail" className='w-60 h-40 mt-4 rounded-xl object-cover'/>
            )}
          </div>

          {/* button upload blog */}
          <button
            type='submit'
            className='text-sm mt-4 border border-cyan-500 text-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out'
          >
            Upload Blog
          </button>
        </form>
      </div>
    </div>
  )
}
