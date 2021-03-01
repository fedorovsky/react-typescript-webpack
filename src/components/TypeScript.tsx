import * as React from 'react';
import LazySlider from './LazySlider';


const TypeScript = () => {
  return (
    <div>
      <div>TypeScript Component</div>
      <React.Suspense fallback={null}>
        <LazySlider />
      </React.Suspense>
    </div>
  );
};

export default TypeScript;
