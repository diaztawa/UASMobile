import DashboardScreen from './Dashboard';
import MangaListScreen from './MangaList';
import MangaNewScreen from './MangaNew';
import EditScreen from './Edit';
import CRUDChapterScreen from '../Main/CRUDChapter';
import AddChapterScreen from '../Main/AddChapter';
import EditChapterScreen from '../Main/EditChapter';
import { CardStyleInterpolators } from '@react-navigation/stack';

export default [
  {
    name: 'Dashboard',
    component: DashboardScreen,
    options: { headerShown: false },
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
  {
    name: 'CRUDChapter',
    component: CRUDChapterScreen,
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
];