import React, { useState, useEffect } from 'react';

export default function LayoutDetailKursus() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // function handle payment midtrans di button "bayar sekarang"
    const handlePayment = async () => {
        try {
            // manggil API backend untuk membuat transaksi, nanti pas develop BE ganti pake api sendiri
            const response = await fetch('/api/create-transaction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: 100000, // contoh total harga
                }),
            });
    
            const { token } = await response.json();
    
            // manggil snap midtrans buat nampilin halaman pembayaran
            window.snap.pay(token, {
                onSuccess: function(result) {
                    alert('Pembayaran berhasil!');
                    console.log(result);
                },
                onPending: function(result) {
                    alert('Menunggu pembayaran...');
                    console.log(result);
                },
                onError: function(result) {
                    alert('Pembayaran gagal!');
                    console.log(result);
                },
            });
        } catch (error) {
            console.error('Error saat memproses pembayaran:', error);
        }
    };

    // buat contoh
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Mas rusdi', content: 'Kursus yang sangat informatif!' },
        { id: 2, name: 'Si imut', content: 'Worth it bgt buat harga segini' },
        { id: 3, name: 'Mas amba', content: 'Materi ga jelas' },
        { id: 4, name: 'Pengguna yang mungkin anda kenal', content: 'enak nih cara mentornya ngajarin' },
    ]);

    // code di bawah buat komentar, jangan lupa buat codingan nampilin komentar & nyimpen komentar baru ke db
    const [newReview, setNewReview] = useState('');
    const [showAll, setShowAll] = useState(false);
    
    const handleInputChange = (e) => {
        setNewReview(e.target.value);
    };

    const handleSubmitReview = () => {
        if (newReview.trim() !== '') {
            const newReviewObj = {
                id: reviews.length + 1,
                name: 'Anonim', // nanti ubah pake nama user yg login
                content: newReview,
            };
            setReviews([...reviews, newReviewObj]);
            setNewReview('');
        }
    };

    const displayedReviews = showAll ? reviews : reviews.slice(0, 2);

    return (
        <>
            <div className='mb-24 mt-40'>
                {/* judul & penulis */}
                <div className='w-full min-h-96 bg-other1 py-12 px-32'>
                    <h1 className='text-5xl font-bold text-secondary max-w-[60rem] pb-24'>Pengendalian Hama dan Penyakit Tanaman Hidroponik</h1>
                    <p className='text-sm text-secondary'>John Doe</p>
                </div>
                
                {/* main container */}
                <div className='flex justify-between mx-32 my-24'>
                    {/* sub container thumbnail, deskripsi, ulasan */}
                    <div className='flex flex-col gap-4 w-[100rem]'>
                        <img 
                            src="/images/home/blog4.jpg"
                            className='rounded-2xl w-full h-[40rem] object-cover' 
                            alt="" 
                        />
                        <h3 className='font-bold text-xl'>Deskripsi</h3>
                        <p className='text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <h3 className='font-bold text-xl'>Ulasan Materi Terkait</h3>
                        
                        {/* komentar user */}
                        <div className="space-y-4">
                            {displayedReviews.map((review) => (
                                <div key={review.id} className="bg-white p-3 rounded-lg shadow">
                                    <h3 className="font-semibold text-secondary">{review.name}</h3>
                                    <p className="text-secondary text-sm">{review.content}</p>
                                </div>
                            ))}
                        </div>

                        {/* button reveal komen */}
                        {reviews.length > 2 && ( // kalo lebih dari 2 komen, hide komen sisanya
                            <button 
                                onClick={() => setShowAll(!showAll)}
                                className="mt-3 w-64 px-4 py-2 text-sm bg-primary text-white rounded-xl shadow transition-transform duration-300 ease-out transform hover:scale-105"
                            >
                                {showAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
                            </button>
                        )}

                        {/* Input text tambah komen */}
                        <div className="mt-6">
                            <textarea
                                value={newReview}
                                onChange={handleInputChange}
                                placeholder="Tulis ulasan anda di sini..."
                                rows="2"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            ></textarea>
                            <button
                                onClick={handleSubmitReview}
                                className="mt-3 px-4 py-2 w-64 text-sm bg-primary text-white rounded-xl transition-transform duration-300 ease-out transform hover:scale-105"
                            >
                                Kirim Ulasan
                            </button>
                        </div>
                    </div>

                    {/* sub container btn beli, harga, informasi lainnya */}
                    <div className='flex flex-col gap-4 w-72 ml-10'>
                        <img 
                            src="/images/home/blog4.jpg" 
                            alt="" 
                            className='max-w-72 max-h-52 object-cover rounded-lg' 
                        />
                        <div className='flex justify-between text-sm'>
                            <p>Harga</p>
                            <p className='font-bold'>Rp15.000</p>
                        </div>
                        <button
                            className='w-full bg-primary text-sm px-4 py-2 text-white rounded-xl transition-transform duration-300 ease-out transform hover:scale-105 flex items-center justify-center'
                            onClick={handlePayment}
                        >
                            <svg
                                viewBox="0 0 576 512"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="inline mr-2"
                            >
                                <path d="M0 24C0 10.7 10.7 0 24 0h72c11.5 0 21.4 8.2 23.6 19.5L122 32h190v102.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V32h181.7c21.2 0 36.5 20.3 30.8 40.7l-54 192c-3.9 13.8-16.5 23.3-30.8 23.3h-317l9.1 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H160c-11.5 0-21.4-8.2-23.6-19.5L76.1 48H24C10.7 48 0 37.3 0 24zm224 440c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm240 48c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" />
                            </svg>
                            Beli Sekarang
                        </button>


                        <div className='flex justify-between text-tertiary text-sm'>
                            <p>Terjual</p>
                            <p>100</p>
                        </div>
                        <div className='flex justify-between text-tertiary text-sm'>
                            <p>Bahasa</p>
                            <p>Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
