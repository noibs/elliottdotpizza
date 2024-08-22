'use client';
import React from 'react';
import styles from './nav.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/order', label: 'Order' },
    { href: '/about', label: 'About' },
  ];

  console.log(pathname);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.href} className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}>
            <Link
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;