import React, { useState } from 'react';
import { useUser } from '../information/UserContext';

export default function Dashboard() {
  const [profilePicture, setProfilePicture] = useState('/images/home/profpict.jpg'); // default img
  const userInfo = useUser(); // ambil data user dari UserContext
  const [isEditing, setIsEditing] = useState(false);


  const [editedUserInfo, setEditedUserInfo] = useState({
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password,
    dom: userInfo.dom,
    number: userInfo.number,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditChange = (field, value) => {
    setEditedUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // nanti ganti logic ngesave profile disini
    setIsEditing(false);
    console.log('Informasi pengguna yang diperbarui:', editedUserInfo);
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-secondary text-3xl mt-48 mb-24'>Akun Saya</h1>

        {/* Foto Profil */}
        <div className="relative">
          <img
            src={profilePicture}
            alt="Profile"
            className='w-20 h-20 rounded-full object-cover mb-4 cursor-pointer'
            onClick={() => document.getElementById('fileInput').click()}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="fileInput"
            className="hidden"
          />
        </div>
      </div>

      {/* Informasi User */}
      <div className='flex flex-col justify-start mx-32 pb-60 gap-3'>
        <p className='text-sm text-tertiary pb-9'>
          <i>Klik foto profil anda untuk mengubah foto profil</i>
        </p>

        {/* Display Informasi User */}
        {Object.keys(editedUserInfo).map((key) => (
          <div key={key}>
            <p className='text-tertiary text-sm pt-4'>
              {key === 'dom' ? 'Tanggal Lahir' : key.charAt(0).toUpperCase() + key.slice(1)} <br />
              {isEditing ? (
                <input
                  type="text"
                  value={editedUserInfo[key]}
                  onChange={(e) => handleEditChange(key, e.target.value)}
                  className="border rounded-md p-1 text-base text-secondary w-full"
                />
              ) : (
                <span className='text-secondary text-base'>{editedUserInfo[key]}</span>
              )}
            </p>
            <div className='w-full h-px rounded-md bg-tertiary opacity-50'></div>
          </div>
        ))}

        {/* button edit & simpan */}
        <div className=" mt-4">
          {isEditing ? (
            <button
              className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white duration-300 ease-out"
              onClick={handleSave}
            >
              Simpan
            </button>
          ) : (
            <button
              className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white duration-300 ease-out"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
}
