import React from 'react';

function Login() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://www.overwaterbungalows.net/wp-content/uploads/2022/06/d06328ca.jpg)' }}>
      <div className="absolute top-10 left-10">
        <p className="text-white italic hover-expand text-2xl font-bold">
          V.I.B.E.
        </p>
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="bg-gray-800 bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-md custom-backdrop">
          <h2 className="text-3xl font-bold text-center text-white mb-2 italic hover-expand">
            Log In
          </h2>
          <p className="text-center text-gray-300 mb-8 hover-expand">
            Please Enter Your Details
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <input
                  className="w-full p-3 pl-10 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  id="email"
                  placeholder="Enter Your Email"
                  type="email"
                />
                <i className="fas fa-envelope absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <div className="relative">
                <input
                  className="w-full p-3 pl-10 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                  type="tel"
                />
                <i className="fas fa-phone absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 hover-expand">
                Cancel
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 hover-expand">
                Log In
              </button>
            </div>
          </form>
          <p className="text-center text-gray-400 mt-4">
            Don't Have An Account?{" "}
            <a className="text-red-500 hover:underline" href="#">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
