import React, {useEffect, useState} from 'react';
import './App.css'

export const App = () => {

	const [counter, setCounter] = useState(0)


	useEffect(()=>{
			let valueAssString = localStorage.getItem('counterValue',)
			if (valueAssString) {
				let newValue = JSON.parse(valueAssString)
				setCounter(newValue)
			}
	},[])

	useEffect(()=>{
		localStorage.setItem('counterValue', JSON.stringify(counter))
	},[counter])

	// const setLocalHandler = () => {
	// 	localStorage.setItem('counterValue', JSON.stringify(counter))
	// }

	const incHandler = () => {
		setCounter(counter + 1)
	}

	// const getLocalHandler = () => {
	// 	let valueAssString = localStorage.getItem('counterValue',)
	// 	if (valueAssString) {
	// 		let newValue = JSON.parse(valueAssString)
	// 		setCounter(newValue)
	// 	}
	// }

	return (
		<div className="App">
			<div>
				<h1> {counter}  </h1>

				<button onClick={incHandler}>inc</button>
				{/*<button onClick={setLocalHandler}>setLocal</button>*/}
				{/*<button onClick={getLocalHandler}>getLocal</button>*/}
			</div>


		</div>
	);
};

