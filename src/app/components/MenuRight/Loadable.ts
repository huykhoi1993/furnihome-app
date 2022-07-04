/**
 *
 * Asynchronously loads the component for MenuRight
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MenuRight = lazyLoad(
  () => import('./index'),
  module => module.MenuRight,
);
