import { Account } from "@clerk/nextjs"; // Use this import instead of @clerk/clerk-react for Next.js

const userprofile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <Account />
    </div>
  );
};

export default userprofile;
