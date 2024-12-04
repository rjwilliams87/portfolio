import { Navigation } from "@/global/components";
import { NAVIGATION_ITEMS_WITH_BLOG } from "@/global/components/navigation/navigation.content";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation items={NAVIGATION_ITEMS_WITH_BLOG} />
      <div className="site-content-container mt-32 md:mt-48">{children}</div>
    </>
  );
}
