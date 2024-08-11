import React, {useState} from 'react';
import './App.css'
import {setNewMinValueAC} from "./models/value-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {CounterWithRedux} from "./components/CounterWithRedux";
import {SettingWithRedux} from "./components/SettingWithRedux";

export const AppWithRedux = () => {
	// const [value, dispatchValue] = useReducer(valueReducer,0)
	// const [maxValue, dispatchMaxValue] = useReducer(maxValueReducer, 0)
	// const [minValue, dispatchMinValue] = useReducer(minValueReducer, 0)

	const [showComponent, setShowComponent] = useState("A")

	// const value = useSelector<AppRootStateType, number>(state => state.value)
	// const maxValueStore = useSelector<AppRootStateType, number>(state => state.maxValueStore)
	const minValueStore = useSelector<AppRootStateType, number>(state => state.minValueStore)

	const dispatch = useDispatch()


	//!!DONT REMOVE CODE BELOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//       DONT REMOVE CODE BELOW!
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// useEffect(() => {
	// 	let maxValue = localStorage.getItem("maxValue")
	// 	let minValue = localStorage.getItem("minValue")
	// 	if (maxValue) {
	// 		let newMaxVal = JSON.parse(maxValue)
	// 		setMaxDown(newMaxVal)
	// 	}
	// 	if (minValue) {
	// 		let newMinVal = JSON.parse(minValue)
	// 		setMinDown(newMinVal)
	// 	}
	//
	// }, []);
	// useEffect(() => {
	// 	localStorage.setItem("maxValue", JSON.stringify(maxValue))
	// 	// localStorage.setItem("minValue", JSON.stringify(minValue))
	// }, [maxValue]);
	// useEffect(() => {
	// 	localStorage.setItem("minValue", JSON.stringify(minValue))
	// }, [minValue]);


	// const incHandler = () => {
	// 	dispatch(incrementAC() )
	// }
	//
	// const resetHandler = () => {
	// 	dispatch(setMinValueAC(minValueStore))
	// }

	const setHandler = () => {
		dispatch(setNewMinValueAC(minValueStore))
		setShowComponent("A")
	}

	const settingtHandler = () => {
		setShowComponent("B")
	}


	return (


		<div className="App">
			{showComponent === 'A'
				? <CounterWithRedux
					// value={value}
					// incHandler={incHandler}
					// resetHandler={resetHandler}
					settingtHandler={settingtHandler}
					// maxValue={maxValueStore}
				/>

				: <SettingWithRedux
					// changeMaxValue={changeMaxValue}
					// changeMinValue={changeMinValue}
					// maxValue={maxValueStore}
					// minValue={minValueStore}
					setHandler={setHandler}

				/>
			}


		</div>
	);
};

