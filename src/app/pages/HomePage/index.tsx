import * as React from 'react';
import { Banner } from './components/Banner/Loadable';
import { Slider } from './components/Slider/Loadable';

export function HomePage() {
  return (
    <>
      {/* home section starts  */}
      <Slider />
      {/* home section ends */}

      {/* banner section starts  */}
      <Banner />
      {/* banner section ends */}
    </>
  );
}
