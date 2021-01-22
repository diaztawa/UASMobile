import DetailsScreen from './Details';
import HomeScreen from './Main/Home';
import ReadScreen from './Main/Read';
import MainScreen from './Main/Main';
import AddChapterScreen from './Main/AddChapter';
import { CardStyleInterpolators } from '@react-navigation/stack';

export default [
  
  {
    name: 'Main',
    component: MainScreen,
    options: { headerShown: false },
  },
  {
    name: 'Home',
    component: HomeScreen,
    options: { headerShown: false },
  },
  {
    name: 'Read',
    component: ReadScreen,
    options: { headerShown: false },
  },
  {
    name: 'AddChapter',
    component: AddChapterScreen,
    options: { headerShown: false },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: { 
      headerShown: false,
      gestureEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    },
  },
];