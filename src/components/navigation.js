import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';

export default ({ place }) => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">intl gringo</Link>
      </li>
      {/* <li className={styles.navigationItem}>
        <Link to="/blog/">blog</Link>
      </li> */}
      <li className={styles.navigationItem}>
        <Link to="/">now in: {place.country.flag} {place.country.name}</Link>
      </li>
    </ul>
  </nav>
);
