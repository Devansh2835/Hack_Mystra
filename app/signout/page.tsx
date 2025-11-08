// app/sign-out/page.tsx
'use client';

import { useClerk } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignOutPage() {
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    signOut(() => router.push('/'));
  }, [signOut, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-purple-200">Signing out...</p>
    </div>
  );
}