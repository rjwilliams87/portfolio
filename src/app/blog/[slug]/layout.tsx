export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="site-content-container mt-32 pb-8">{children}</div>;
}
