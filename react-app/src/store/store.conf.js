import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slise"


const store = configureStore({
  reducer:{
    carReducer
  }
})

export default store