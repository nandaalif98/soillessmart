import React, { useState } from 'react';
import { useTeacher } from '../information/TeacherContext';

export default function TeacherProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const teacherInfo = useTeacher();

  // Ngeset default isi formnya dari AdminContext yang lagi login di akun ini
  const [profile, setProfile] = useState({
    name: teacherInfo.name,
    email: teacherInfo.email,
    password: teacherInfo.password,
    dom: teacherInfo.dom,
    country: teacherInfo.country,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // taro logic ngesave perubahan info disini, kaya update ke db
    console.log("Profile updated:", profile);
  };

  return (
    // Main container
    <div className='ml-80 mr-16 my-16'>
      <div className='flex flex-col gap-10'>
        <div className='p-16 w-full rounded-3xl shadow-2xl bg-gradient-to-r from-green-400 to-blue-500'>
          <p className='font-bold text-4xl text-white'>
            Selamat Datang, <i>{teacherInfo.name}!</i>
          </p>
        </div>

        <div className='p-16 rounded-3xl shadow-2xl w-full'>
          <h1 className='font-bold text-lg mb-4'>Edit Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* edit nama */}
            <div>
              <label className='block font-medium'>Nama</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className='w-full p-2 rounded-lg border border-gray-300'
              />
            </div>
            
            {/* edit email */}
            <div>
              <label className='block font-medium'>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className='w-full p-2 rounded-lg border border-gray-300'
              />
            </div>
            
            {/* edit password */}
            <div className='relative'>
              <label className='block font-medium'>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={profile.password}
                onChange={handleChange}
                className='w-full p-2 rounded-lg border border-gray-300 pr-10' // Tambahkan padding right untuk ruang ikon
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer'
              >
                {showPassword ? (
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1.2em"
                    width="1.2em"
                  >
                    <path d="M508 624a112 112 0 00112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 00-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 000 11.31L155.25 889a8 8 0 0011.31 0l712.16-712.12a8 8 0 000-11.32zM332 512a176 176 0 01258.88-155.28l-48.62 48.62a112.08 112.08 0 00-140.92 140.92l-48.62 48.62A175.09 175.09 0 01332 512z" />
                    <path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 01445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1.2em"
                    width="1.2em"
                  >
                    <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
                  </svg>
                )}
              </div>
            </div>
            
            {/* edit domisili */}
            <div>
              <label className='block font-medium'>Domisili</label>
              <input
                type="text"
                name="dom"
                value={profile.dom}
                onChange={handleChange}
                className='w-full p-2 rounded-lg border border-gray-300'
              />
            </div>
            
            {/* edit negara */}
            <div>
              <label className='block font-medium'>Negara</label>
              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleChange}
                className='w-full p-2 rounded-lg border border-gray-300'
              />
            </div>
            
            <button 
              type="submit" 
              className='text-sm mt-4 border border-cyan-500 text-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out'
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}