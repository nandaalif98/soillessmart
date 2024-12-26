import React from 'react';
import { Link } from 'react-router-dom';

export default function TransValidate(props) {
  return (
    <div className='ml-80 mr-16 my-32'>
        <div className='flex flex-col gap-10 p-16 items-center rounded-3xl shadow-2xl'>
            <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="4em"
                width="4em"
                className='text-cyan-500'
                {...props}
            >
                <path d="M8.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L2.324 8.384a.75.75 0 111.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 01.02-.022zm-.92 5.14l.92.92a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 10-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
            </svg>
            <h1 className='text-center'>Pembayaran sukses, silahkan lakukan pengecekan mutasi rekening di akun mbanking anda <br />Terima Kasih!</h1>
            <Link to='/transaksi'>
                <button className='text-sm border border-cyan-500 text-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out'>
                    Kembali
                </button>
            </Link>
        </div>
    </div>
  )
}
