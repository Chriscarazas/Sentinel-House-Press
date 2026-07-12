import type { ReactNode } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Grain } from "@/components/ui/Grain";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-press-black">
      <Grain />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
