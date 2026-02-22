import React from 'react';

const Vector = () => {
  return (
    <div class="line-wrapper">
      <svg width="100%" height="1300" viewBox="0 0 800 200" fill="none">
        <path d="
      M 30 20
      v 30
      a 20 20 0 0 0 20 20
      h 700
      a 20 20 0 0 1 20 20
      v 2
      a 20 20 0 0 1 -20 20
      H 50
      a 20 20 0 0 0 -20 20
      v 50
      a 20 20 0 0 0 20 20
      h 700
      a 20 20 0 0 1 20 20
      v 2
      a 20 20 0 0 1 -20 20
      H 50
      a 20 20 0 0 0 -20 20
      v 50
      a 20 20 0 0 0 20 20
      h 700
      a 20 20 0 0 1 20 20
      v 30

    "
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          fill="none"
        />

        <circle cx="30" cy="20" r="6" fill="white" />

        <circle cx="770" cy="380" r="6" fill="white" />
      </svg>
    </div>

  );
};

export default Vector;
