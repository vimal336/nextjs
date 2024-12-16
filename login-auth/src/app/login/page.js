"use client"
import { useState } from 'react';
import useApi from "../hooks/useApi"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { loading, error, data, apiFn } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await apiFn({
        url: '/auth/login?platform=email',
        options: {
          method: 'POST',
          body: JSON.stringify({ email, password }),
        },
      });

      console.log('Login successful:', result);
      setSuccessMessage('Login successful!'); 
    } catch (err) {
      console.error('Login failed:', err);
      setSuccessMessage(''); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-gray-700"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>} 
      </form>
    </div>
  );
}
