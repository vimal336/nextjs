'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Post() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [postId, setPostId] = useState('');

  useEffect(() => {
    const id = searchParams.get('id');
    setPostId(id || '');
  }, [searchParams]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('id', searchTerm);
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <div className="p-4">
      <p className="text-lg font-semibold mb-4">
        Post ID: {postId || 'No ID found'}
      </p>
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by ID..."
          className="px-4 py-2 border border-blue-300 rounded w-half"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </form>
    </div>
  );
}
