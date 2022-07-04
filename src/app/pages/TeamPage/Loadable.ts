/**
 *
 * Asynchronously loads the component for TeamPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TeamPage = lazyLoad(
  () => import('./index'),
  module => module.TeamPage,
);
