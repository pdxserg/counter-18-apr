import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import {Counter} from "./Counter";
import {Setting} from "./components/Setting";

export const App = () => {

	const [value, setValue] = useState(0)
	const [maxValue, setMaxValue] = useState(0)
	const [minValue, setMinValue] = useState(0)

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
		setValue(0)
	}

	const maxHendler = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxValue(+e.currentTarget.value)
	}
	const minHendler = (e: ChangeEvent<HTMLInputElement>) => {
		setMinValue(+e.currentTarget.value)
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
			<Counter value={value}
			         incHandler={incHandler}
			         resetHandler={resetHandler}
			/>
			<Setting
				maxHendler={maxHendler}
				minHendler={minHendler}
				maxValue={maxValue}
				minValue={minValue}

			/>



		</div>
	);
};

