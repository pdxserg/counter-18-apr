import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/SetCounter";


function App() {
	const [showComponent, setShowComponent] = useState('A')
	const [numMax, setNumMax] = useState<number>(5)
	const [numMin, setNumMin] = useState<number>(0)
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		let valueAsStringMax = localStorage.getItem('max')
		if (valueAsStringMax) {
			setNumMax(JSON.parse(valueAsStringMax))
		}
		let valueAsStringMin = localStorage.getItem('min')
		if (valueAsStringMin) {
			setNumMin(JSON.parse(valueAsStringMin))
		}
	}, []);


	const onChangeHandlerMax = (el: ChangeEvent<HTMLInputElement>) => {
		setNumMax(Number(el.currentTarget.value))
	}
	const onChangeHandlerMin = (el: ChangeEvent<HTMLInputElement>) => {
		const valueMin = Number(el.currentTarget.value)
		//!! const valueMin = +el.currentTarget.value
		setNumMin(valueMin)
	}
	const lokalStorageHandler = () => {
		localStorage.setItem('max', JSON.stringify(numMax))
		localStorage.setItem('min', JSON.stringify(numMin))
		setCounter(numMin)
		setShowComponent("A")

	}
	const componentHandler = () => {
setShowComponent("B")
	}

	return (
		<div className="App">
			{showComponent === "A"
				?<Counter
					setCounter={setCounter}
					counter={counter}
					valueMin={numMin}
					valueMax={numMax}
					componentHandler={componentHandler}
				/>
				:<SetCounter
					onChangeHandlerMax={onChangeHandlerMax}
					onChangeHandlerMin={onChangeHandlerMin}
					numMax={numMax}
					numMin={numMin}
					lokalStorageHandler={lokalStorageHandler}
				/>
			}


		</div>
	)
}

export default App;
