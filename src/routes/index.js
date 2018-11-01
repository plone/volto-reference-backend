import actions from './actions/actions';
import breadcrumbs from './breadcrumbs/breadcrumbs';
import content from './content/content';
import login from './login/login';
import navigation from './navigation/navigation';
import types from './types/types';

export default [
  ...actions,
  ...breadcrumbs,
  ...login,
  ...navigation,
  ...types,
  ...content,
];
