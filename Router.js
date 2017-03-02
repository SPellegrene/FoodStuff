import { createRouter } from '@exponent/ex-navigation';
import HomePage from './HomePage';
import FoodDetail from './FoodDetail';
import ScanPage from './ScanPage';

const Router = createRouter(() => ({
  home: () => HomePage,
  food: () => FoodDetail,
  scan: () => ScanPage
}));

export default Router;
