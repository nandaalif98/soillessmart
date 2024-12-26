import React, { useState } from 'react';

export default function CommunityPost( props) {
  // State buat handle likes, showComments, dan komentar baru
  const [likes, setLikes] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // function buat handle like
  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  // toggle function komentar
  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  // function buat handle perubahan komen
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  // function nambah komentar
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment(''); // kosongin input abis komen 
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-6 mb-8">
        {/* Header */}
        <div className="flex items-center mb-4">
          <img
            src="/images/home/profpict.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <h2 className="font-semibold text-lg">Alesia Joanna</h2>
        </div>

        {/* Isi Konten Post */}
        <p className="text-gray-700 mb-4">
          Just got my own Hydroponic vegetables! Do you wanna know what's the best way to harvest all of these?
        </p>

        {/* Gambar Post */}
        <div className="mb-4">
          <img
            src="/images/community/post1.jpg"
            alt="Post Image"
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* btn like & comment */}
        <div className="flex items-center justify-between mb-4">

          {/* btn like */}
          <button
            className="flex items-center text-tertiary duration-300 ease-out hover:text-red-500"
            onClick={handleLike}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
              className="mr-2"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {likes}
          </button>

          {/* button show comment */}
          <button
            className="flex items-center text-tertiary duration-300 ease-out hover:text-primary"
            onClick={toggleComments}
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M512 240c0 114.9-114.6 208-256 208-37.1 0-72.3-6.4-104.1-17.9-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.8 3.4-17.4l.3-.3c.3-.3.7-.7 1.3-1.4 1.1-1.2 2.8-3.1 4.9-5.7 4.1-5 9.6-12.4 15.2-21.6 10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240 0 125.1 114.6 32 256 32s256 93.1 256 208z" />
            </svg>
          </button>
        </div>

        {/* Comment Section */}
        {showComments && (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Komentar</h3>

            {/* Tampilkan komentar yang ada */}
            {comments.map((comment, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm font-semibold">Pengguna {index + 1}</p>
                <p className="text-gray-600">{comment}</p>
              </div>
            ))}

            {/* Form komen */}
            <input
              type="text"
              value={newComment}
              placeholder="Tulis komentar..."
              className="w-full mt-2 p-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
              onChange={handleCommentChange}
            />

            {/* btn kirim komen */}
            <button
              className="text-sm bg-primary text-white px-4 py-2 rounded-lg mt-2 transition-transform duration-300 ease-out transform hover:scale-105"
              onClick={handleAddComment}
            >
              Kirim
            </button>
          </div>
        )}
    </div>
  );
}