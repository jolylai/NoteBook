import React from 'react';

function List() {
  return (
    <picture>
      <source
        srcSet="https://htmlreference.io/images/sunset-360.jpg"
        media="(min-width: 360px)"
      />
      <source
        srcSet="https://htmlreference.io/images/sunset-720.jpg"
        media="(min-width: 720px)"
      />
      <source
        srcSet="https://htmlreference.io/images/sunset-1440.jpg"
        media="(min-width: 1440px)"
      />

      <img src="https://htmlreference.io/images/sunset-360.jpg" />
    </picture>
  );
}

export default List;
