import React, {useEffect, useState} from 'react';
import './App.css'
import {Counter} from "./Counter";

export const App = () => {

	const [value, setValue] = useState(0)

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



		</div>
	);
};

