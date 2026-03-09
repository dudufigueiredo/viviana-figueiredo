"use client";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const isAdmin = usePathname().startsWith("/admin");
  if (isAdmin) return <>{children}</>;
  return (
    <>
      <Nav />
      <main className="pt-[73px]">{children}</main>
      <Footer />
    </>
  );
}
