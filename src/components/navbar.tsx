import React from 'react'
import MobileNav from '@/components/mobilenav'
import ThemeSwitch from '@/components/theme'
import Link from "next/link";

const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/products', title: 'Products' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
]
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between pt-4">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <img className="h-12" src="/logo.png" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-bold text-gray-900 dark:text-gray-100 sm:p-4  hover:bg-gray-500"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </nav>
  )
}

export default NavBar
