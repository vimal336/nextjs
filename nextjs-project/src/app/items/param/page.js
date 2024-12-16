'use client';

import { useParams } from 'next/navigation';

export default function Post() {

  const params = useParams();
  const { id } = params;

  return (
    <div className="p-4">
      <p className="text-lg font-semibold">Post ID: {id}</p>
    </div>
  );
}
