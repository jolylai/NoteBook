import React from 'react';
import classnames from 'classnames';
import styles from './List.less';

function List() {
  return (
    <div className={styles['list']}>
      <a className={classnames(styles['list-item'], styles['active'])}>
        <div className={styles['list-header']}>
          <h5>Header</h5>
          <small>3 hours ago</small>
        </div>
        <p className={styles['list-content']}>
          Cumque dolor ducimus quas dolores voluptas consequatur provident et.
        </p>
        <small>enim-tempore-occaecati</small>
      </a>
      <a className={classnames(styles['list-item'])}>
        <div className={styles['list-header']}>
          <h5>Header</h5>
          <small>3 hours ago</small>
        </div>
        <p className={styles['list-content']}>
          Cumque dolor ducimus quas dolores voluptas consequatur provident et.
        </p>
        <small>enim-tempore-occaecati</small>
      </a>
      <a className={classnames(styles['list-item'])}>
        <div className={styles['list-header']}>
          <h5>Header</h5>
          <small>3 hours ago</small>
        </div>
        <p className={styles['list-content']}>
          Cumque dolor ducimus quas dolores voluptas consequatur provident et.
        </p>
        <small>enim-tempore-occaecati</small>
      </a>
    </div>
  );
}

export default List;
