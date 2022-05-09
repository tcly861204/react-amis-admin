import { createStore } from 'ice';
import home from '@/models/home';
import app from '@/models/app';

const store = createStore({ home, app });

export default store;
