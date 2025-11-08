'use client';

import { useState } from 'react';
import AuthModal from '@/components/auth-form';
import StarryBackground from '@/components/star-background';
export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <StarryBackground />

      <main
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <AuthModal showPassword={showPassword} setShowPassword={setShowPassword} />
      </main>
    </div>
  );
}
