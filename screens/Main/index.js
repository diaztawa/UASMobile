import HomeScreen from './Home';
import UsersScreen from './Users';
import ReviewScreen from './Review';
import SearchScreen from "../../components/SearchScreen";
import DashboardScreen from '../Admin/Dashboard';
import { CardStyleInterpolators } from '@react-navigation/stack';

export default [
  {
    name: 'Home',
    icon: 'home',
    component: HomeScreen,
  },
  {
    name: 'Search',
    icon: 'search',
    component: SearchScreen,
  },
  {
    name: 'Dashboard',
    icon: 'address-book',
    component: DashboardScreen,
  },
  {
    name: 'Users',
    icon: 'users',
    component: UsersScreen,
    options: {
      headerShown: false,
      gestureEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    },
  },
];