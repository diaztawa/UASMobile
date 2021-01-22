
import LoginScreen from './Login';
import RegisterScreen from './Register';
import DetailsScreen from './Details';
import HomeScreen from './Main/Home';
import MainScreen from './Main/Main';
import ReadScreen from './Main/Read';
import AddChapterScreen from './Main/AddChapter';
import EditChapterScreen from './Main/EditChapter';
import { CardStyleInterpolators } from '@react-navigation/stack';

export default [
  {
    name: 'EditChapter',
    component: EditChapterScreen,
    options: { headerShown: false },
  },
  {
    name: 'Register',
    component: RegisterScreen,
    options: { headerShown: false },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: { headerShown: false },
  }
];