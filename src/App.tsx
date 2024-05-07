import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/SetCounter";



const min_value = 0
const max_value = 5
function App() {


return(
	<div className="App">
		<SetCounter/>
		<Counter
			valueMin={min_value}
			valueMax={max_value}
		/>
	</div>
)
}

export default App;
