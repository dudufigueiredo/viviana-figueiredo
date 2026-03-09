"use client";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return <>{children}</>;
  return (
    <>
      <Nav />
      <main key={pathname} className="pt-[73px] page-transition">
        {children}
      </main>
      <Footer />
    </>
  );
}
