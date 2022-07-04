/**
 *
 * Asynchronously loads the component for Heading
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Heading = lazyLoad(
  () => import('./index'),
  module => module.Heading,
);
