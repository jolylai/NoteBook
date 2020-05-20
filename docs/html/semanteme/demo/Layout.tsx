import React from 'react';
import styles from './Layout.less';

function Layout() {
  console.log('styles ', styles['layout']);
  return (
    <div className={styles['layout']}>
      <section>
        <header>Header</header>
        <main>Content</main>
        <footer>Footer</footer>
      </section>
    </div>
  );
}

export default Layout;
