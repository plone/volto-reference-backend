/**
 * Global routes.
 * @module routes
 */

import actions from './actions/actions';
import breadcrumbs from './breadcrumbs/breadcrumbs';
import content from './content/content';
import login from './login/login';
import navigation from './navigation/navigation';
import search from './search/search';
import types from './types/types';

export default [
  ...actions,
  ...breadcrumbs,
  ...login,
  ...navigation,
  ...search,
  ...types,
  ...content,
];
