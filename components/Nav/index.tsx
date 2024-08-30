"use client";
import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className={styles.header}>
      <Link href="/">
        <h1 className={styles.title}>Elliott&rsquo;s</h1>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} className={styles.navLink}>
              <li
                className={`${styles.navItem} ${
                  pathname === item.href ? styles.active : ""
                }`}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
