'use client';

import { useEffect } from 'react';

// Relative redirect — works regardless of basePath or deployment subdirectory.
// The <meta> gets hoisted to <head> by React 19 as a no-JS fallback.
export default function RootPage() {
  useEffect(() => {
    window.location.replace('en/');
  }, []);
  return <meta httpEquiv="refresh" content="0; url=en/" />;
}
