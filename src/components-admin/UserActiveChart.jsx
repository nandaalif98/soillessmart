import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const UserActiveChart = () => {
  const data = {
    labels: [
      'Januari', 'Februari', 'Maret', 'April', 
      'Mei', 'Juni', 'Juli', 'Agustus', 
      'September', 'Oktober', 'November', 'Desember'
    ],
    datasets: [
      {
        label: 'Total User Aktif',
        data: [150, 400, 150, 300, 370, 400, 312, 209, 450, 630, 550, 420], // Data contoh user
        borderColor: '#06b6d4', // Warna garis
        backgroundColor: 'rgba(30, 58, 138, 0.5)', // Warna area di bawah garis
        tension: 0.4, // biar garisnya lebih halus
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='rounded-3xl shadow-2xl p-16'>
      <h1 className="text-2xl font-bold mb-4">Active User Diagram</h1>
      <div className="max-w-6xl mx-auto p-4 h-[30rem]">
        <Line data={data} options={options} />
      </div>
    </div>

  );
};

export default UserActiveChart;
