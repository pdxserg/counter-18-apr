import React, {ChangeEvent, useReducer, useState} from 'react';
import './App.css'
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting";
import {incrementAC, setMinValueAC, setNewMinValueAC, valueReducer} from "./models/value-reducer";
import {maxValueReducer, setMaxTargetAC} from "./models/maxValue-reducer";
import {minValueReducer, setMinTargetAC} from "./models/minValue-reducer";

export const AppWithReduser = () => {
	const [value, dispatchValue] = useReducer(valueReducer,0)
	const [maxValue, dispatchMaxValue] = useReducer(maxValueReducer, 0)
	const [minValue, dispatchMinValue] = useReducer(minValueReducer, 0)

	const [showComponent, setShowComponent] = useState("A")

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
		dispatchValue(incrementAC() )
	}

	const resetHandler = () => {
		dispatchValue(setMinValueAC(minValue))
	}

	const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
		const maxTarget = +e.currentTarget.value
		dispatchMaxValue(setMaxTargetAC(maxTarget))
	}
	const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
		const minTarget = +e.currentTarget.value
		dispatchMinValue(setMinTargetAC(minTarget))
	}

	const setHandler = () => {
		 dispatchValue(setNewMinValueAC(minValue))
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

