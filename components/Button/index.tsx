'use client';
import Link from 'next/link';
import React from 'react';
import styles from './button.module.scss';

export default function Button({
  link,
  text,
  color,
  icon,
}: {
  link: string;
  text: string;
  color: string;
  icon?: string;
}) {
  return (
    <Link href={link}>
      <button className={styles.button} style={{ backgroundColor: color }}>
        {text}
        {icon && <i className={icon}></i>}
      </button>
    </Link>
  );
}
