"use client"
import React from 'react'
import { useUser as getUser } from '@clerk/nextjs';

const page = () => {
const { user } = getUser();
  return (
    <div>Users
    {user ? (
      <h1>Welcome, {user.firstName}</h1>
    ) : (
      <h1>No user found</h1>
    )}
    </div>
  )
}

export default page