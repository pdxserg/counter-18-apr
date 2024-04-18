import React, {useState} from 'react';

import './App.css';

function App() {

	let [a, setA] = useState(0)

	function onClickHandler() {a = a + 1; setA(a)}
	function onClickHandlerZero() {a = 0; setA(a)}


	return (

		<div className="App-header">
			<div className="c">
				<div className="a">
					<h2>{a}</h2>
				</div>
				<div className="b">
					<button disabled={a === 5} onClick={onClickHandler}>inc</button>
					<button disabled={a === 0} onClick={onClickHandlerZero}>reset</button>
				</div>
			</div>



		</div>
	);
}

export default App;
