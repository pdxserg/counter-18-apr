import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "../models/value-reducer";

const rootReducer = combineReducers({

	counter: counterReducer
	// value: valueReducer,
	// maxValueStore: maxValueReducer,
	// minValueStore: minValueReducer
})

export const store = createStore(rootReducer)

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store