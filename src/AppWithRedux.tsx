import React, {ChangeEvent, useReducer, useState} from 'react';
import './App.css'
import {Counter} from "./Counter";
import {Setting} from "./components/Setting";
import {incrementAC, setMinValueAC, setNewMinValueAC, valueReducer} from "./models/value-reducer";
import {maxValueReducer, setMaxTargetAC} from "./models/maxValue-reducer";
import {minValueReducer, setMinTargetAC} from "./models/minValue-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";

export const AppWithRedux = () => {
	// const [value, dispatchValue] = useReducer(valueReducer,0)
	// const [maxValue, dispatchMaxValue] = useReducer(maxValueReducer, 0)
	// const [minValue, dispatchMinValue] = useReducer(minValueReducer, 0)

	const [showComponent, setShowComponent] = useState("A")

	const value = useSelector<AppRootStateType, number>(state => state.value)
	const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue)
	const minValue = useSelector<AppRootStateType, number>(state => state.minValue)

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


	const incHandler = () => {
		dispatch(incrementAC() )
	}

	const resetHandler = () => {
		dispatch(setMinValueAC(minValue))
	}

	const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
		const maxTarget = +e.currentTarget.value
		dispatch(setMaxTargetAC(maxTarget))
	}
	const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
		const minTarget = +e.currentTarget.value
		dispatch (setMinTargetAC(minTarget))
	}

	const setHandler = () => {
		dispatch(setNewMinValueAC(minValue))
		setShowComponent("A")
	}

	const settingtHandler = () => {
		setShowComponent("B")
	}


	return (


		<div className="App">
			{showComponent === 'A'
				? <Counter value={value}
				           incHandler={incHandler}
				           resetHandler={resetHandler}
				           settingtHandler={settingtHandler}
				           maxValue={maxValue}
				/>

				: <Setting
					changeMaxValue={changeMaxValue}
					changeMinValue={changeMinValue}
					maxValue={maxValue}
					minValue={minValue}
					setHandler={setHandler}

				/>
			}


		</div>
	);
};

