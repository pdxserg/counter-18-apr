import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";


export const min_value = 0
export const max_value = 5


function App() {
return(
	<div className="App">
		<Counter/>
		<Counter/>
	</div>
)
}

export default App;
