import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-stone-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
