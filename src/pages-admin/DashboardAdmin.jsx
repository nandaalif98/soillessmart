import React from 'react'
import UserActiveChart from '../components-admin/UserActiveChart'

export default function Dashboard(props) {
  return (
    <div className='ml-72 mr-16 my-16'>
      {/* container */}
      <div className='flex flex-col gap-10 mb-16'>
        <div className='flex justify-start gap-6 p-16 w-full rounded-3xl shadow-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2.25em"
            width="2.25em"
            className='text-white'
            {...props}
          >
            <path d="M12.97 2.59a1.5 1.5 0 00-1.94 0l-7.5 6.363A1.5 1.5 0 003 10.097V19.5A1.5 1.5 0 004.5 21h4.75a.75.75 0 00.75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 001.5-1.5v-9.403a1.5 1.5 0 00-.53-1.144l-7.5-6.363z" />
          </svg>
          <p className='font-bold text-4xl text-white'>
            Dashboard
          </p>
        </div>
        
        {/* container total user & total teacher */}
        <div className='flex justify-between gap-10'>
          {/* total user */}
          <div className='shadow-2xl rounded-3xl py-10 px-16 w-full'>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <h2>Total User</h2>
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="2.5em"
                  width="2.5em"
                  className='text-cyan-500 bg-cyan-200 rounded-lg p-2'
                  {...props}
                >
                  <path d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zM467.83 432H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z" />
                </svg>
              </div>
              <h1 className='text-2xl font-bold'>1192</h1>
              <h2><span className='text-primary'>1.3%</span> Up from last week</h2>
            </div>
          </div>

          {/* total teacher */}
          <div className='shadow-2xl rounded-3xl py-10 px-16 w-full'>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <h2>Total Teacher</h2>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2.5em"
                  width="2.5em"
                  className='text-fuchsia-500 bg-fuchsia-200 rounded-lg p-2'
                  {...props}
                >
                  <path d="M3 5v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3z" />
                </svg>
              </div>
              <h1 className='text-2xl font-bold'>23</h1>
              <h2><span className='text-primary'>0.8%</span> Up from last week</h2>
            </div>
          </div>
        </div>
      </div>

      <UserActiveChart/>
    </div>
  )
}
// text-fuchsia-500 bg-fuchsia-200 rounded-lg p-2