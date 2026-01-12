'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Linkedin, Github } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
}

export default function Header() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Columbus Coffee Guide', path: '/coffee' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg border-b border-dark-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Navigation Links */}
          <div className="flex space-x-1 sm:space-x-2">
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
          
          {/* Right Side - Custom Flaticon Icons */}
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
      </nav>
    </header>
  );
}