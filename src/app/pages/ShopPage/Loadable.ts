/**
 *
 * Asynchronously loads the component for ShopPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ShopPage = lazyLoad(
  () => import('./index'),
  module => module.ShopPage,
);
