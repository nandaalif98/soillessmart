import React, { useState } from 'react';

// sidebar filter di halaman kursus
export default function SidebarFilter() {
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');

  const handleDurationChange = (e) => {
    const value = e.target.value;
    setDuration(duration === value ? '' : value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(category === value ? '' : value);
  };

  return (
    <div className=" mx-32 mb-24">

      {/* Filter Durasi */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Durasi</h3>
        <label className="flex items-center mb-2">
          <input 
            type="checkbox" 
            name="duration" 
            value="<30" 
            checked={duration === '<30'}
            onChange={handleDurationChange}
            className="mr-2 form-checkbox h-4 w-4 text-primary"
          />
          &lt; 30 Menit
        </label>
        <label className="flex items-center">
          <input 
            type="checkbox" 
            name="duration" 
            value=">30" 
            checked={duration === '>30'}
            onChange={handleDurationChange}
            className="mr-2 form-checkbox h-4 w-4 text-primary"
          />
          &gt; 30 Menit
        </label>
      </div>

      {/* Filter Kategori */}
      <div className='mb-4'>
        <h3 className="text-lg font-semibold mb-2">Kategori</h3>
        <label className="flex items-center mb-2">
          <input 
            type="checkbox" 
            name="category" 
            value="Sayuran" 
            checked={category === 'Sayuran'}
            onChange={handleCategoryChange}
            className="mr-2 form-checkbox h-4 w-4 text-primary"
          />
          Sayuran
        </label>
        <label className="flex items-center">
          <input 
            type="checkbox" 
            name="category" 
            value="Buahan" 
            checked={category === 'Buahan'}
            onChange={handleCategoryChange}
            className="mr-2 form-checkbox h-4 w-4 text-primary"
          />
          Buahan
        </label>
      </div>
      <button
        className='py-2 px-8 bg-primary text-sm text-white rounded-xl transition-transform duration-300 ease-out transform hover:scale-105'>
        Terapkan
      </button>
    </div>
  );
}
