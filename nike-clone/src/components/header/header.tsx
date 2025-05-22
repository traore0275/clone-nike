"use client";

import { TopNav } from "./top-nav";
import { MainNav } from "./main-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <TopNav />
      <MainNav />
    </header>
  );
}
