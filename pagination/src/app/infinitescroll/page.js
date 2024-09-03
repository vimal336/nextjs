'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function InfiniteScroll() {
  const listRef = useRef(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = async ({ pageParam = 1 }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=5`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 5) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });

  const posts = data ? data.pages.flatMap((page) => page) : [];

  const handleIntersection = useCallback((entries) => {
    if (entries[0].isIntersecting && hasNextPage && !isFetching && !isLoadingMore) {
      setIsLoadingMore(true);
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, isLoadingMore, fetchNextPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (listRef.current) {
      observer.observe(listRef.current);
    }
    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, [listRef, handleIntersection]);

  useEffect(() => {
    if (!isFetching) {
      setIsLoadingMore(false);
    }
  }, [isFetching]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchNextPage({ pageParam: page });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl bg-yellow-500 font-bold text-center mb-4">Infinite x with Pagination</h2>
      <ul ref={listRef} className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded shadow-md hover:bg-gray-600 transition">
            {post.title}
          </li>
        ))}
      </ul>
      <div className="text-center mt-4 text-gray-500">
        {isFetching ? 'Fetching...' : isLoadingMore ? 'Loading more...' : null}
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || isFetching}
          className="px-4 py-2 bg-blue-500 text-white rounded "
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!hasNextPage || isFetching}
          className="px-4 py-2 bg-blue-500 text-white rounded "
        >
          Next
        </button>
      </div>
    </div>
  );
}
