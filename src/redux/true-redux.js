import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./reducers/dialogs-reducer";
import { profileReducer } from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
});

const store = createStore(reducers);

export default store;