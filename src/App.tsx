import React, {ChangeEvent, useEffect, useReducer, useState} from 'react';
import './App.css'

import {Setting} from "./components/Setting";
import {incrementAC, valueReducer} from "./models/value-reducer";
import {Counter} from "./components/Counter";

export const App = () => {
	const [showComponent, setShowComponent] = useState("A")
	 const [value, setValue] = useState(0)
	const [maxValue, setMaxValue] = useState(0)
	const [minValue, setMinValue] = useState(0)

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
		setValue(value + 1)
	}
	const resetHandler = () => {
		 setValue(minValue)
	}

	const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxValue(+e.currentTarget.value)
	}
	const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
		setMinValue(+e.currentTarget.value)
	}

	const setHandler = () => {
		setValue(minValue)
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

