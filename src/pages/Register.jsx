import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen">
      {/* backgrounf */}
      <div className="w-1/2">
        <img 
          src="/images/login/background.png" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* form */}
      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <div className="w-4/5 max-w-sm">
          <h2 className="text-center text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-sm text-tertiary w-96 text-center mb-10"><i>Use your email for registration</i></p>
          <form>

            <div className="mb-4">
              {/* nama */}
                <input 
                  type="Name" 
                  id="Name" 
                  placeholder="Name" 
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-sm"
                  required
                />
              </div>
            {/*  Email */}
              <div className="mb-4">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email" 
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-sm"
                  required
                />
              </div>

              {/* password */}
              <div className="mb-4 relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="password" 
                  placeholder="Password" 
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-sm"
                  required
                />
                
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (

                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                    >
                      <path d="M508 624a112 112 0 00112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 00-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 000 11.31L155.25 889a8 8 0 0011.31 0l712.16-712.12a8 8 0 000-11.32zM332 512a176 176 0 01258.88-155.28l-48.62 48.62a112.08 112.08 0 00-140.92 140.92l-48.62 48.62A175.09 175.09 0 01332 512z" />
                      <path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 01445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5z" />
                    </svg>
                  ) : (

                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                    >
                      <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
                    </svg>
                  )}
                </div>
              </div>
            
            {/*  no telepon */}
              <div className="mb-4">
                <input 
                  type="number" 
                  id="number" 
                  placeholder="number" 
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-sm"
                  required
                />
              </div>

            {/* provinsi */}
              <div className="mb-6">
                <input 
                  type="province" 
                  id="province" 
                  placeholder="Province" 
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-sm"
                  required
                />
              </div>

            {/* button sign up */}
            <button 
              type="submit" 
              className="w-full flex items-center justify-center p-2.5 bg-primary border-primary text-white rounded-xl mb-4 text-sm signupBtn"
            >
              Sign Up
            </button>
            {/* button sign up as admin */}
            <button
              type="submit" 
              className="w-full flex items-center justify-center p-2.5 bg-primary border-primary text-white rounded-xl mb-4 text-sm signupBtn"
            >
              <Link to="/teacherprofile">
              Sign Up as Teacher
              </Link>
            </button>

            <p className='text-tertiary text-sm text-center'>Have an account?
              <Link to="/login" className='ml-1'> 
                <u>Login here</u>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
