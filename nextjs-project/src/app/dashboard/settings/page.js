"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Settings() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Example: Extract a query parameter (e.g., 'theme')
  const themeParam = searchParams.get("theme");

  const back = () => {
    router.push("/dashboard");
  };

  const saveProfile = () => {
    alert("Profile saved!");
  };

  const changePassword = () => {
    alert("Password changed!");
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Update the URL with the new theme query parameter
    const newParams = new URLSearchParams(searchParams);
    newParams.set("theme", newDarkMode ? "dark" : "light");
    router.push(`/settings?${newParams.toString()}`);
    
    alert(`Theme changed to ${newDarkMode ? "Dark" : "Light"} Mode!`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <button
        onClick={back}
        className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold py-2 px-4 mb-8"
      >
        Back
      </button>
      
      <h1 className="text-4xl font-bold mb-8">Settings Page</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Change Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            New Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          onClick={changePassword}
          className="bg-red-500 hover:bg-red-700 rounded text-white font-bold py-2 px-4"
        >
          Change Password
        </button>
      </div>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Theme</h2>
        <p>Current theme from URL: {themeParam || "None"}</p>
        <button
          onClick={toggleTheme}
          className="bg-gray-500 hover:bg-gray-700 rounded text-white font-bold py-2 px-4"
        >
          Toggle to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </main>
  );
}
