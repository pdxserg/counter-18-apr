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

	const style1 = {
		width: "120px",
		border: "1px solid #1df8dd",
		padding: "5px 5px",
		borderRadius: "5px"
	}
	const style2 = {
		height: "70px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "5px",
		backgroundColor: "#1df8dd",
		color: a === 5 ? "red" : "black",
		fontSize: a === 5 ? "1.5rem" : "1rem"
	}
	const style3 = {
		marginTop: "10px",
		maxWidth: "400px",
		border: "1px solid #1df8dd",
		padding: "5px 10px",
		borderRadius: "5px"
	}


	return (

		<div className="App-header">
			<div style={style1}>
				<div style={style2}>
					<h2>{a}</h2>
				</div>
				<div style={style3}>
					<button disabled={a === 5} onClick={onClickHandler}>inc</button>
					<button disabled={a === 0} onClick={onClickResetHandler}>reset</button>
				</div>
			</div>


		</div>
	);
}

export default App;
