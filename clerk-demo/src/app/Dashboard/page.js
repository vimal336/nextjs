"use client"

import { useUser } from "@clerk/nextjs";
//import UserProfileButton from "../components/UserProfileButton";
import OrganizationButton from "../components/OrganizationButton";
import CreateOrganizationButton from "../components/CreateOrganizationButton";

const Dashboard = () => {
  const { user } = useUser();
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    heading: {
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>
      <h1 style={styles.heading}>Welcome, {user?.firstName}</h1>
      <OrganizationButton />
      <CreateOrganizationButton />
    </div>
  );
};

export default Dashboard;
