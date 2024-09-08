import React from "react";

function Foot() {
  return (
    <footer className="bg-gray-800 text-white p-10 grid grid-cols-1 md:grid-cols-4 gap-10">
      <nav>
        <h6 className="text-xl font-semibold mb-4">Services</h6>
        <ul>
          <li><a className="text-sm hover:text-gray-400" href="#">Branding</a></li>
          <li><a className="text-sm hover:text-gray-400" href="#">Design</a></li>
          <li><a className="text-sm hover:text-gray-400" href="#">Marketing</a></li>
          <li><a className="text-sm hover:text-gray-400" href="#">Advertisement</a></li>
        </ul>
      </nav>

      <nav>
        <h6 className="text-xl font-semibold mb-4">Company</h6>
        <ul>
          <li><a className="text-sm hover:text-gray-400" href="#">About us</a></li>
          <li><a className="text-sm hover:text-gray-400" href="#">Contact</a></li>
          <li><a className="text-sm hover:text-gray-400" href="#">Jobs</a></li>
          <li><a className="text-sm hover:text-gray-400" href="#">Press kit</a></li>
        </ul>
      </nav>

      <nav>
        <h6 className="text-xl font-semibold mb-4">Legal</h6>
        <ul>
          <li><a className="text-sm hover:text-gray-400" href="#">Terms of use</a></li>
          <li><a className="text-sm hover:text-gray-400" href="#">Privacy policy</a></li>
          <li><a className="text-sm hover:text-gray-400" href="#">Cookie policy</a></li>
        </ul>
      </nav>

      <form>
        <h6 className="text-xl font-semibold mb-4">Newsletter</h6>
        <fieldset className="space-y-2">
          <label className="block text-sm">Enter your email address</label>
          <div className="flex">
            <input
              type="email"
              placeholder="username@site.com"
              className="w-full p-2 rounded-l-md bg-gray-700 text-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-4 py-2 bg-blue-600 rounded-r-md text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

export default Foot;
