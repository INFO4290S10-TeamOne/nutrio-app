import { getTabBarIcon } from '../getTabBarIcon';
import {
  faHome,
  faBook,
  faBalanceScale,
  faBullseye,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

describe('getTabBarIcon', () => {
  it('returns faHome when routeName is Home', () => {
    expect(getTabBarIcon('HomeStack')).toEqual(faHome);
  });

  it('returns faBook when routeName is Recipes', () => {
    expect(getTabBarIcon('RecipesStack')).toEqual(faBook);
  });

  it('returns faBalanceScale when routeName is Scale', () => {
    expect(getTabBarIcon('Scale')).toEqual(faBalanceScale);
  });

  it('returns faBullseye when routeName is Goals', () => {
    expect(getTabBarIcon('Goals')).toEqual(faBullseye);
  });

  it('returns faCog when routeName is Settings', () => {
    expect(getTabBarIcon('Settings')).toEqual(faCog);
  });

  it('returns faHome when routeName is anything else', () => {
    expect(getTabBarIcon('')).toEqual(faHome);
  });
});
