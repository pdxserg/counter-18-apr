import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/SetCounter";




function App() {
	const [numMax, setNumMax] = useState<number>(5)
	const [numMin, setNumMin] = useState<number>(0)

	const onChangeHandlerMax = (el: ChangeEvent<HTMLInputElement>) => {
		setNumMax(Number(el.currentTarget.value))
	}
	const onChangeHandlerMin = (el: ChangeEvent<HTMLInputElement>) => {
		setNumMin(Number(el.currentTarget.value))
	}


	return (
		<div className="App">
			<SetCounter
				onChangeHandlerMax={onChangeHandlerMax}
				onChangeHandlerMin={onChangeHandlerMin}
				numMax={numMax}
				numMin={numMin}
			/>
			<Counter
				valueMin={numMin}
				valueMax={numMax}
			/>
		</div>
	)
}

export default App;
