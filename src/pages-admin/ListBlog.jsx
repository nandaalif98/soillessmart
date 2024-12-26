import React from 'react';
import { Link } from 'react-router-dom';

export default function ListBlog(props) {
  const blogData = [
    { title: 'Blog Post 1', status: 'Published' },
    { title: 'Blog Post 2', status: 'Deleted' },
    { title: 'Blog Post 3', status: 'Published' },
  ];

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
            <p className='font-bold text-4xl text-white'>List Blog</p>
            </div>


            {/* tabel */}
            <div className='overflow-x-auto bg-white p-16 rounded-3xl shadow-2xl'>
                {/* button add blog */}
                <Link to='/addblog'>
                    <button className='inline-flex items-center text-sm border border-cyan-500 text-cyan-500 rounded-lg px-2 py-2 w-fit hover:bg-cyan-500 hover:text-white duration-300 ease-out mb-10'>
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1.5em"
                            width="1.5em"
                            className="mr-2"
                        >
                            <path d="M17 11a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 012 0v4h4z" />
                        </svg>
                        Tambah Blog
                    </button>
                </Link>

                {/* tabel */}
                <table className='table-auto w-full text-center'>
                    <thead>
                        <tr className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white'>
                            <th className='px-6 py-4'>Title</th>
                            <th className='px-6 py-4'>Status</th>
                            <th className='px-6 py-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogData.map((blog, index) => (
                            <tr
                                key={index}
                                className={`${
                                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                }`}
                            >
                            <td className='px-6 py-4 text-gray-700 text-sm w-[30rem]'>{blog.title}</td>
                            <td
                                className={`px-6 py-4 ${
                                blog.status === 'Published'
                                    ? 'text-green-600'
                                    : 'text-red-600'
                                } text-sm`}
                            >
                                {blog.status}
                            </td>
                                <td className='px-6 py-4 flex gap-2 justify-center'>
                                    {/* button lihat */}
                                    <button className='text-sm border border-cyan-500 text-cyan-500 py-2 px-2 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out'>
                                        <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                                                clipRule="evenodd"
                                        />
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M12 3c5.591 0 10.29 3.824 11.622 9-1.332 5.176-6.03 9-11.622 9S1.71 17.176.378 12C1.71 6.824 6.408 3 12 3zm0 16c-4.476 0-8.269-2.942-9.543-7C3.731 7.942 7.524 5 12 5c4.476 0 8.269 2.942 9.543 7-1.274 4.058-5.067 7-9.543 7z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {/* button edit */}
                                    <Link to='/editblog'>
                                    <button className='text-sm border border-yellow-500 text-yellow-500 py-2 px-2 rounded-lg hover:bg-yellow-500 hover:text-white duration-300 ease-out'>
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            {...props}
                                        >
                                            <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                        </svg>
                                    </button>
                                    </Link>

                                    {/* button delete */}
                                    <button className='text-sm border border-red-500 text-red-500 py-2 px-2 rounded-lg hover:bg-red-500 hover:text-white duration-300 ease-out'>
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            {...props}
                                        >
                                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
