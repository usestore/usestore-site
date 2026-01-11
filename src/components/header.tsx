"use client";

import { useState, useRef, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

interface HeaderProps {
  hideAuthLinks?: boolean;
}

export default function Header({ hideAuthLinks }: HeaderProps = {}) {
  const { data: session } = authClient.useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const user = session?.user;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/">
            <img src="/logo.svg" alt="usestore" className="h-6" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/products" className="text-muted-foreground hover:text-foreground">
              Products
            </a>
            <a href="/categories" className="text-muted-foreground hover:text-foreground">
              Categories
            </a>
            <a href="/collections" className="text-muted-foreground hover:text-foreground">
              Collections
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a href="/cart" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </a>
          {!user ? (
            <a href="/auth/sign-in" className="hidden sm:block text-muted-foreground hover:text-foreground">
              Sign in
            </a>
          ) : (
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                aria-label="User menu"
              >
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "User"}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                )}
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border border-input rounded-md shadow-lg py-1 z-50">
                  <a
                    href="/account"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Account Settings
                  </a>
                  <a
                    href="/orders"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Orders
                  </a>
                  <a
                    href="/wishlist"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Wishlist
                  </a>
                  <a
                    href="/recently-viewed"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Recently Viewed
                  </a>
                  <div className="border-t border-input my-1"></div>
                  <button
                    onClick={async () => {
                      await authClient.signOut();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
