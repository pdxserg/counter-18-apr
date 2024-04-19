import React, {useState} from 'react';
import './App.css';


const min_value = 0
const max_value = 5


function App() {

	let [counter, setCounter] = useState(min_value)

	function onClickHandler() {
		setCounter(counter + 1)
	}

	function onClickResetHandler() {
		setCounter(min_value)
	}

	return (

		<div className="App">
			<div className={'style1'}>
				<div className={`style2  ${counter === max_value ? 'styleRed' : ''}`}>
					<h2>{counter}</h2>
				</div>
				<div className={'style3'}>
					<button disabled={counter === max_value} onClick={onClickHandler}>inc</button>
					<button disabled={counter === min_value} onClick={onClickResetHandler}>reset</button>
				</div>
			</div>


		</div>
	);
}

export default App;
