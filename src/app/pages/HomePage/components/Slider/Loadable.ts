/**
 *
 * Asynchronously loads the component for Slider
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Slider = lazyLoad(
  () => import('./index'),
  module => module.Slider,
);
