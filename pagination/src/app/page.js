import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Next.js Pagination and Infinite Scrolling using Tanstack Query
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/pagination">
                  Pagination
              </Link>
            </li>
            <li>
              <Link href="/infinitescroll">
                  Infinite Scroll
              </Link>
            </li>
            <li>
              <Link href="/settings">
                  settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Home;

