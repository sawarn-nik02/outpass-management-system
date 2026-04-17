import React, { useState } from 'react';
import logo from '../images/logo.jpg';

const Login = ({ history }) => {
  const [form, setForm] = useState({
    name: 'NIKHIL KUMAR',
    rollNo: '2023BCS0045',
    email: 'nikhil23bcs45@iitkottayam.ac.in',
    punchTime: '17:05:23',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.punchTime) {
      setError('Please enter punch time');
      return;
    }
    const userData = { ...form, startedAt: Date.now() };
    sessionStorage.setItem('outpassUser', JSON.stringify(userData));
    history.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Outpass</h1>
            <p className="text-sm text-gray-500 -mt-1">Management Platform</p>
          </div>
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
            <input type="text" name="rollNo" value={form.rollNo} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Punch Time</label>
            <input type="time" name="punchTime" value={form.punchTime} onChange={handleChange} step="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit"
            className="mt-2 w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition font-semibold">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
