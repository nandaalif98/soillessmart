import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DiagramPenjualan = () => { 
  const [isYearly, setIsYearly] = useState(false);

  // data penjualan bulan
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Jumlah Terjual',
        data: [5, 10, 17, 10, 5, 20, 25, 10, 15, 30, 20, 10],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // data penjualan tahunan
  const yearlyData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Jumlah Terjual',
        data: [150, 180, 210, 250],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const toggleView = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="p-8 bg-white rounded-3xl shadow-2xl min-h-full">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Penjualan {isYearly ? 'Tahunan' : 'Bulanan'}</h1>

        <Bar data={isYearly ? yearlyData : monthlyData} options={{ responsive: true }} />

        <div className="flex justify-center mt-6">
          <button
            onClick={toggleView}
            className="text-sm mt-4 border border-cyan-500 text-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white duration-300 ease-out"
          >
            Lihat Penjualan {isYearly ? 'Bulanan' : 'Tahunan'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagramPenjualan;
