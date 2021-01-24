import DetailsScreen from './Details';
import HomeScreen from './Main/Home';
import ReadScreen from './Main/Read';
import MainScreen from './Main/Main';
import AddChapterScreen from './Main/AddChapter';
import EditChapterScreen from './Main/EditChapter';
import CRUDChapterScreen from './Main/CRUDChapter';
import MangaListScreen from './Admin/MangaList';
import MangaNewScreen from './Admin/MangaNew';
import EditScreen from './Admin/Edit';
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
    name: 'EditChapter',
    component: EditChapterScreen,
    options: { headerShown: false },
  },
  {
    name: 'CRUDChapter',
    component: CRUDChapterScreen,
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
  {
    name: 'MangaList',
    component: MangaListScreen,
    options: { headerShown: false },
  },
  {
    name: 'MangaNew',
    component: MangaNewScreen,
    options: { headerShown: false },
  },
  {
    name: 'Edit',
    component: EditScreen,
    options: { headerShown: false },
  },
];