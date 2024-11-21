import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to My App</h1>
      <p className="text-center text-gray-700">This is a demo application for Telegram login and messaging.</p>
      
      <div className="links flex flex-col gap-4">
        <Link href="/login" className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Login with Telegram</Link>
        <Link href="/dashboard" className="btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
          Go to Dashboard
        </Link>
      </div>
      </main>
    
    </div>
  );
}
