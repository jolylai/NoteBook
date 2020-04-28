import React from 'react';
import styles from './Demo1.less';

function Demo1() {
  return (
    <div className={styles['box-set']}>
      <figure className={styles['box']}>Box 1</figure>
      <figure className={styles['box']}>Box 2</figure>
      <figure className={styles['box']}>Box 3</figure>
    </div>
  );
}

export default Demo1;
