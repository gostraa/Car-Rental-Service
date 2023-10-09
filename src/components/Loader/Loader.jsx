import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <RotatingTriangles
      visible={true}
      height="150"
      width="150"
      ariaLabel="rotating-triangels-loading"
      wrapperStyle={{}}
      wrapperClass="rotating-triangels-wrapper"
    />
  );
};

export default Loader;
