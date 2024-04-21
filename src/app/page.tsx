"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardComponent from './components/DashboardComponent';

function Home() {
  const router = useRouter();

  return (
    <DashboardComponent/>
  );
}

export default Home;
