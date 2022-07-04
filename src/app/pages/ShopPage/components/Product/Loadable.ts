/**
 *
 * Asynchronously loads the component for Product
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Product = lazyLoad(
  () => import('./index'),
  module => module.Product,
);
