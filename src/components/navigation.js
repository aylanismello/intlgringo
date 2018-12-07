import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">intl gringo</Link>
      </li>
      {/* <li className={styles.navigationItem}>
        <Link to="/blog/">blog</Link>
      </li> */}
      <li className={styles.navigationItem}>
        <Link to="/">now in: 🇹🇭</Link>
      </li>
    </ul>
  </nav>
);
