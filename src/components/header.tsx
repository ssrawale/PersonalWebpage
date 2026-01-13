'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Linkedin, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  name: string;
  path: string;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Coffee Map', path: '/coffee' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg border-b border-dark-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 text-base font-medium transition-colors ${
                  pathname === item.path
                    ? 'text-accent-blue border-b-2 border-accent-blue'
                    : 'text-text-secondary hover:text-text-primary hover:border-b-2 hover:border-dark-border'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button - Shown only on mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-text-primary hover:text-accent-blue transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          
          {/* Social Icons - Always visible */}
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com/in/shreyarawale"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <img src="/icons/linkedin.png" alt="LinkedIn" className="w-7 h-7 object-contain" />
            </a>

            <a
              href="https://github.com/ssrawale"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="GitHub"
            >
              <img src="/icons/github.png" alt="GitHub" className="w-8 h-8 object-contain" />
            </a>
          </div>
        </div>

        {/* Mobile Menu - Slides down when open */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-dark-border">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-base font-medium transition-colors ${
                    pathname === item.path
                      ? 'text-accent-blue bg-dark-charcoal'
                      : 'text-text-secondary hover:text-text-primary hover:bg-dark-charcoal'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}