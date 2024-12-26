import React, { useState } from 'react';

export default function AddPost() {
  // State untuk menyimpan konten post dan file gambar
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState(null);

  // Handle perubahan teks pada input post
  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  // Handle perubahan gambar pada input file
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPostImage(e.target.files[0]);
    }
  };

  // Handle submit postingan
  const handleAddPost = () => {
    // Lakukan sesuatu dengan konten postingan dan gambar, misalnya simpan ke database
    console.log('Post Content:', postContent);
    console.log('Post Image:', postImage);

    // Kosongkan input setelah postingan ditambahkan
    setPostContent('');
    setPostImage(null);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl mb-6">
      <h3 className="text-lg font-semibold mb-4">Buat Postingan Baru</h3>
      
      {/* Input teks buat ngepost*/}
      <textarea
        value={postContent}
        onChange={handlePostContentChange}
        placeholder="Apa yang ingin kamu bagikan?"
        className="w-full p-3 border rounded-lg resize-none text-sm focus:outline-none focus:border-primary mb-4"
        rows="3"
      />

      {/* Input file untuk mengunggah gambar */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id='uploadgambar'
      />

        <label 
            htmlFor="uploadgambar"
            className='cursor-pointer text-sm border border-gray-300 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 duration-300 ease-out inline-block mr-4'
        >
            Pilih Gambar
        </label>
      {/* Tampilkan pratinjau gambar jika ada */}
      {postImage && (
        <div className="mb-4">
          <img
            src={URL.createObjectURL(postImage)}
            alt="Preview"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      )}

      {/* Tombol submit untuk menambahkan postingan */}
      <button
        onClick={handleAddPost}
        className="bg-primary text-white px-4 py-2 rounded-lg transition-transform duration-300 ease-out transform hover:scale-105"
      >
        Bagikan
      </button>
    </div>
  );
}
