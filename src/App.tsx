import React, {useState} from 'react';

import './App.css';

function App() {

	let [a, setA] = useState(0)

	function onClickHandler() {
		a = a + 1;
		setA(a)
	}

	function onClickHandlerZero() {
		a = 0;
		setA(a)
	}

	const style1 = {
		border: "1px solid #1df8dd",
		padding: "10px 10px",
		borderRadius: "5px"
	}
	const style2 = {
		height: "60px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "5px",
		backgroundColor: "#1df8dd",
		color: a === 5 ? "red" : "black"
	}
	const style3 = {
		marginTop: "10px",
		maxWidth: "400px",
		border: "1px solid #1df8dd",
		padding: "5px 10px",
		borderRadius: "5px"
	}
	const y = false
	const z = true



	return (

		<div className="App-header">
			<div style={style1}>
				<div style={style2}>
					<h2>{a}</h2>
				</div>
				<div style={style3}>
					<button disabled={a === 5} onClick={onClickHandler}>inc</button>
					<button disabled={a === 0} onClick={onClickHandlerZero}>reset</button>
				</div>
			</div>


		</div>
	);
}

export default App;
