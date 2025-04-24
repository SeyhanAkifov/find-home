'use client';
import dynamic from 'next/dynamic';

const DynamicMain = dynamic(() => import('../../components/Main'), { ssr: true });
const DynamicDetails = dynamic(() => import('../../components/Details'), { ssr: true });
const DynamicLogin = dynamic(() => import('../../components/Login'), { ssr: true });
const DynamicRegister = dynamic(() => import('../../components/Register'), { ssr: true });
const DynamicMyProperties = dynamic(() => import('../../components/MyProperties'), { ssr: true });

export function ClientOnly({ component }: { component: 'main' | 'details' | 'login' | 'register' | 'myProperties' }) {
  return (
    <>
    {component === 'main' && <DynamicMain />}
      {component === 'details' && <DynamicDetails />}
      {component === 'login' && <DynamicLogin />}
      {component === 'register' && <DynamicRegister />}
      {component === 'myProperties' && <DynamicMyProperties />}
       </>
  );
}