import React from 'react';
import Button from '../button/page';

const usebtn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Sign In button</h1>
      {/* First Button with default width */}
      <Button className="w-32 mb-4">Sign In</Button>
      
      {/* Second Button with different width and style */}
      <Button className="w-48 bg-green-500 hover:bg-green-700">Sign In with Google</Button>

      <Button className="w-48 bg-red-500 hover:bg-green-700">Sign up with Google</Button>
    </div>
  );
};

export default usebtn;