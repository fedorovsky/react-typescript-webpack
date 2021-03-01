import * as React from 'react';
import * as Styled from './LazySlider.styled';

const Slider = React.lazy(() => import('../Slider'));

const LazySlider = () => {
  const [isVisibleSlider, setVisibleSlider] = React.useState(false);

  const toggleSlider = () => setVisibleSlider((s) => !s);

  return (
    <Styled.Wrapper>
      <button onClick={toggleSlider}>toggle slider</button>
      {isVisibleSlider && (
        <React.Suspense fallback={null}>
          <Slider />
        </React.Suspense>
      )}
    </Styled.Wrapper>
  );
};

export default LazySlider;
