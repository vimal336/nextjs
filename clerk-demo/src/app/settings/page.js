import Link from "next/link";

const settings = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Home
          </Link>
          <Link 
            href="/settings" 
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Settings
          </Link>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Settings</h1>
        <p className="text-lg text-gray-600">Manage your account settings here.</p>
      </div>
    </main>
  );
};

export default settings;
