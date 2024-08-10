import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import {Counter} from "./Counter";
import {Setting} from "./components/Setting";

export const App = () => {
	const [showComponent, setShowComponent] = useState("A")
	const [value, setValue] = useState(0)
	const [maxDown, setMaxDown] = useState(0)
	const [minDown, setMinDown] = useState(0)

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
	// 	localStorage.setItem("maxValue", JSON.stringify(maxDown))
	// 	// localStorage.setItem("minValue", JSON.stringify(minValue))
	// }, [maxDown]);
	// useEffect(() => {
	// 	localStorage.setItem("minValue", JSON.stringify(minDown))
	// }, [minDown]);


	const incHandler = () => {
		setValue(value + 1)
	}
	const resetHandler = () => {
		setValue(minDown)
	}

	const maxUp = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxDown(+e.currentTarget.value)
	}
	const minUp = (e: ChangeEvent<HTMLInputElement>) => {
		setMinDown(+e.currentTarget.value)
	}
	const setHandler = () => {
		setValue(minDown)
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
				           maxValue={maxDown}
				           minValue={minDown}
				/>

				: <Setting
					maxUp={maxUp}
					minUp={minUp}
					maxDown={maxDown}
					minDown={minDown}
					setHandler={setHandler}

				/>
			}


		</div>
	);
};

