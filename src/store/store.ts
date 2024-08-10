import {combineReducers, legacy_createStore as createStore} from "redux";
import {valueReducer} from "../models/value-reducer";
import {maxValueReducer} from "../models/maxValue-reducer";
import {minValueReducer} from "../models/minValue-reducer";

const rootReducer = combineReducers({
	value: valueReducer,
	maxValue: maxValueReducer,
	minValue: minValueReducer
})

export const store = createStore(rootReducer)

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store