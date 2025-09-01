import Link from "next/link";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="fixed inset-x-0 top-0 bg-white border-b z-10">
          <nav className="py-3 max-w-7xl mx-auto px-4">
            <div>
              <Link href="/" className="text-lg font-bold select-none">
                Pixelo
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
