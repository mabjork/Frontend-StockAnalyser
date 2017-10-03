import { combineReducers } from "redux"

import equity from "./equityReducer"
import user from "./userReducer"

export default combineReducers(
  {
    equity,
    user,
  }
)
