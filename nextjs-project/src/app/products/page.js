'use client';

import { useParams } from 'next/navigation';

export default function Product() {
  const params = useParams();

  // Access the parameters
  const { tag, item } = params;

  console.log(params); // Logs: { tag: 'shoes', item: 'nike-air-max-97' }

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Category: {tag}</p>
      <p>Item: {item}</p>
    </div>
  );
}
