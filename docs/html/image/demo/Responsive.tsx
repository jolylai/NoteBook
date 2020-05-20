import React from 'react';
import classnames from 'classnames';
import styles from './List.less';

function List() {
  return (
    <img
      src="https://htmlreference.io/images/sunset-360.jpg"
      alt="Picture of a Ha Long Bay sunset"
      srcSet="https://htmlreference.io/images/sunset-360.jpg 360w,
          https://htmlreference.io/images/sunset-720.jpg 720w,
          https://htmlreference.io/images/sunset-1440.jpg 1440w>"
      sizes="(min-width: 800px) 720px, 360px"
    />
  );
}

export default List;
