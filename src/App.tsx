import React, {useState} from 'react';

import './App.css';

function App() {

	let [a, setA] = useState(0)

	function onClickHandler() {
		a = a + 1;
		setA(a)
	}

	function onClickResetHandler() {
		a = 0;
		setA(a)
	}



		//color: a === 5 ? "red" : "black",
		//fontSize: a === 5 ? "1.5rem" : "1rem"




	return (

		<div className="App-header">
			<div className={'c'}>
				<div className={'a'}>
					<h2>{a}</h2>
				</div>
				<div className={'b'}>
					<button disabled={a === 5} onClick={onClickHandler}>inc</button>
					<button disabled={a === 0} onClick={onClickResetHandler}>reset</button>
				</div>
			</div>


		</div>
	);
}

export default App;
