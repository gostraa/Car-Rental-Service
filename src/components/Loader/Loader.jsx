import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';

const Loader = () => {
  const loaderStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000000000,
  };

  return (
    <div style={loaderStyle}>
      <RotatingTriangles
        visible={true}
        height={150}
        width={150}
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
};

export default Loader;
