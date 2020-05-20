import React from 'react';
import classnames from 'classnames';
import styles from './List.less';

function List() {
  return (
    <>
      <h3>垂直</h3>
      <ul className={styles['list']}>
        <li className={classnames(styles['list-item'], styles['active'])}>
          Milk
        </li>
        <li className={styles['list-item']}>Bread</li>
        <li className={styles['list-item']}>Chocolate</li>
        <li className={styles['list-item']}>More chocolate</li>
      </ul>

      <h3>垂直</h3>
      <div className={styles['list']}>
        <a className={classnames(styles['list-item'], styles['active'])}>
          Milk
        </a>
        <a className={styles['list-item']}>Bread</a>
        <a className={styles['list-item']}>Chocolate</a>
        <a className={styles['list-item']}>More chocolate</a>
      </div>
    </>
  );
}

export default List;
