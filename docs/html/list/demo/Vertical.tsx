import React from 'react';
import classnames from 'classnames';
import styles from './List.less';

function Ul() {
  return (
    <>
      <h3>水平</h3>
      <ul className={classnames(styles['list'], styles['list-horizontal'])}>
        <li className={classnames(styles['list-item'], styles['active'])}>
          Milk
        </li>
        <li className={styles['list-item']}>Bread</li>
        <li className={styles['list-item']}>Chocolate</li>
        <li className={styles['list-item']}>More chocolate</li>
      </ul>
    </>
  );
}

export default Ul;
