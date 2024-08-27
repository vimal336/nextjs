"use client";
import React from 'react';
import "./globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
