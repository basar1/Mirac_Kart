import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        İçeriğe geç
      </a>
      <SiteHeader />
      <main id="icerik" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
