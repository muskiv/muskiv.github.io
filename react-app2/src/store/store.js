import { configureStore } from '@reduxjs/toolkit';

import carReduser from './slice/car.slice';
import userReducer from './slice/user.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReduser
  }
})


export { store };