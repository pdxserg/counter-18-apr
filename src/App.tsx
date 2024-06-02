import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import {Counter} from "./Counter";
import {Setting} from "./components/Setting";

export const App = () => {

	const [value, setValue] = useState(0)
	const [maxValue, setMaxValue] = useState( 0)
	const [minValue, setMinValue] = useState(0)

	useEffect(() => {
		let maxValue = localStorage.getItem("maxValue")
		let minValue = localStorage.getItem("minValue")
		if (maxValue){
			let newMaxVal= JSON.parse(maxValue)
			setMaxValue(newMaxVal)
		}
		if (minValue){
			let newMinVal= JSON.parse(minValue)
			setMinValue(newMinVal)
		}

	}, []);
	useEffect(() => {
		localStorage.setItem("maxValue", JSON.stringify(maxValue))
		// localStorage.setItem("minValue", JSON.stringify(minValue))
	}, [maxValue]);
	useEffect(() => {
		localStorage.setItem("minValue", JSON.stringify(minValue))
	}, [minValue]);


	// useEffect(() => {
	// 	let valueAsString = localStorage.getItem('counterValue')
	// 	console.log('valueAsSring :',valueAsString)
	// 	if(valueAsString){
	// 		let newValue = JSON.parse(valueAsString)
	// 		setValue(newValue)
	// 		console.log(newValue)
	// 	}
	// }, []);
	//
	//
	// useEffect(()=>{
	// 	localStorage.setItem('counterValue', JSON.stringify(value))
	// },[value])


	// const setLocalHandler = () => {
	// 	localStorage.setItem('counterValue', JSON.stringify(counter))
	// }

	const incHandler = () => {
		setValue(value + 1)
	}
	const resetHandler=()=>{
		setValue(minValue)
	}

	const maxHendler = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxValue(+e.currentTarget.value)
	}
	const minHendler = (e: ChangeEvent<HTMLInputElement>) => {
		setMinValue(+e.currentTarget.value)
	}
	const setHandler=()=>{


		  setValue(minValue)
	}


	// const getLocalHandler = () => {
	// 	let valueAssString = localStorage.getItem('counterValue',)
	// 	if (valueAssString) {
	// 		let newValue = JSON.parse(valueAssString)
	// 		setValue(newValue)
	// 	}
	// }

	return (
		<div className="App">

			<Setting
				maxHendler={maxHendler}
				minHendler={minHendler}
				maxValue={maxValue}
				minValue={minValue}
				setHandler={setHandler}

			/>

			<Counter value={value}
			         incHandler={incHandler}
			         resetHandler={resetHandler}
			         maxValue={maxValue}
			         minValue={minValue}
			/>

		</div>
	);
};

