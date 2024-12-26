import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Taro logic pengiriman form disini
  };

  return (
    <div className="flex h-screen">
      {/* background */}
      <div className="w-1/2">
        <img
          src="/images/login/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* form */}
      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <form className="w-4/5 max-w-sm" onSubmit={handleSubmit}>
          <h2 className="text-center text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-sm text-tertiary w-96 text-justify mb-10">
            <i>
              To keep connected with us, please login with your personal information by email address and password.
            </i>
          </p>
          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-sm"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
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
                  {/* SVG mata ketutup */}
                </svg>
              ) : (
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  {/* SVG mata kebuka */}
                </svg>
              )}
            </div>
          </div>

          {/* Button login */}
          {/* pas develop BE, tag hapus <Link>nya. kalo mau nyoba ke dashboard teacher, ganti to="/teacherprofile". kalo dashboard admin ganti to="/dashboardadmin" */}
          <Link to="/teacherprofile">
            <button
              type="submit"
              className="w-full p-2.5 text-sm border border-solid border-primary text-primary rounded-xl mb-4 loginBtn"
            >
              Login
            </button>
          </Link>

          {/* Garis abu-abu */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-grow h-0.5 bg-tertiary rounded-lg"></div>
            <p className="text-sm text-tertiary whitespace-nowrap">
              or login with
            </p>
            <div className="flex-grow h-0.5 bg-tertiary rounded-lg"></div>
          </div>

          {/* Button login with Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center p-2.5 bg-primary border-primary text-white rounded-xl mb-4 text-sm signupBtn"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.3em"
              width="1.3em"
              className="mr-2"
            >
              <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z" />
            </svg>
            Login with Google
          </button>

          <p className="text-tertiary text-sm text-center">
            Don't have an account?
            <Link to="/register" className="ml-1">
              <u>Register here</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
