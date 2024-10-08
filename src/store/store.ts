import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "../models/counter-reducer";

const rootReducer = combineReducers({

	counter: counterReducer
})

export const store = createStore(rootReducer)

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store