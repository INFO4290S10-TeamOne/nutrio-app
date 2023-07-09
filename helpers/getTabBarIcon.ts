import {
  faHome,
  faBook,
  faBalanceScale,
  faBullseye,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

export const getTabBarIcon = (routeName: string) => {
  switch (routeName) {
    case 'HomeStack':
      return faHome;
    case 'RecipesStack':
      return faBook;
    case 'Scale':
      return faBalanceScale;
    case 'Goals':
      return faBullseye;
    case 'Settings':
      return faCog;
    default:
      return faHome;
  }
};
