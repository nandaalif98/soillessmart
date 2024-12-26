import React, { useState } from 'react';
import { useCourse } from '../information/CourseContext';

export default function LayoutEditKursus(props) {
    const courseInfo = useCourse();

    const [course, setCourse] = useState({
        title: courseInfo.title,
        price: courseInfo.price,
        desc: courseInfo.desc,
        imgUrl: courseInfo.thumbnail || "",  // URL img
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({
          ...course,
          [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCourse({
                ...course,
                imgUrl: URL.createObjectURL(file),
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Course Updated: ", course);
        // taro logic ngesave update kursus disini buat update ke db, atau mau di file terpisah juga bisa
    };

    return (
        <div className='ml-80 mr-16 my-16'>
            <div className='flex flex-col gap-10'>
                <div className='flex justify-start gap-6 p-16 w-full rounded-3xl shadow-2xl bg-gradient-to-r from-green-400 to-blue-500'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="2.25em"
                        width="2.25em"
                        className='text-white'
                        {...props}
                    >
                        <path d="M19.39 10.74L11 19.13V20H4a2 2 0 01-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 012 2v2.15c-.26-.09-.54-.15-.83-.15-.67 0-1.3.26-1.78.74M13 19.96V22h2.04l6.13-6.12-2.04-2.05L13 19.96m9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98 2.04 2.04.98-.98c.2-.19.2-.52 0-.72z" />
                    </svg>
                    <p className='font-bold text-4xl text-white'>Edit Kursus</p>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-6 bg-white p-8 rounded-3xl shadow-lg'>
                    <div className='flex flex-col'>
                        <label className='font-medium'>Judul Kursus</label>
                        <input
                            type='text'
                            name='title'
                            value={course.title}
                            onChange={handleChange}
                            className='border border-gray-300 p-2 rounded-lg w-full'
                            placeholder='Masukkan judul kursus'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-medium'>Deskripsi Kursus</label>
                        <textarea
                            name='desc'
                            value={course.desc}
                            onChange={handleChange}
                            className='border border-gray-300 p-2 rounded-lg w-full'
                            placeholder='Masukkan deskripsi kursus'
                            rows="4"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-medium'>Harga Kursus</label>
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
                        <label className='font-medium'>Thumbnail Kursus</label>
                        
                        {/* input file hidden, soalnya yg default jelek bgt */}
                        <input
                            type='file'
                            accept='image/*'
                            onChange={handleImageChange}
                            className='hidden'
                            id='thumbnailUpload' // id buat gantiin design tombol input file lebih manusiawi
                        />
                        
                        <label
                            htmlFor='thumbnailUpload' // nyambung kesini
                            className='cursor-pointer text-sm border border-gray-300 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 duration-300 ease-out inline-block'
                        >
                            Pilih Gambar
                        </label>
                        
                        {/* Preview gambar */}
                        {course.imgUrl && (
                            <img src={course.imgUrl} alt='Thumbnail' className='w-60 h-40 mt-4 rounded-xl object-cover' />
                        )}
                    </div>

                    <button
                        type='submit'
                        className='text-sm mt-4 border border-cyan-500 text-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out'
                    >
                        Simpan Perubahan
                    </button>
                </form>
            </div>
        </div>
    );
}