"use client";
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Pagination() {
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { isLoading, isError, error, data } = useQuery({
    keepPreviousData: true,
    queryKey: ['posts', page],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (<h2 className="text-center text-lg font-medium">Loading...</h2>);
  }

  if (isError) {
    return (<h2 className="text-center text-red-500 text-lg">{error.message}</h2>); 
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Next.js Pagination</h2> 
      {data && (
        <div className="bg-white shadow rounded-lg p-4">
          <ul className="space-y-4"> 
            {data.map((post) => (
                <li key={post.id} className="border-b pb-2 text-lg">{post.title}</li> 
            ))}
          </ul>
        </div>
      )}

      <div className='flex justify-between mt-6'>
        <button
          onClick={() => setPage(prevState => Math.max(prevState - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Prev Page
        </button>

        <button
          onClick={() => setPage(prevState => prevState + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
