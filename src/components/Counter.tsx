import React, {useState} from "react";
import {max_value, min_value} from "./SetCounter";


export function Counter() {

	let [counter, setCounter] = useState(min_value)

	function onClickHandler() {
		setCounter(counter + 1)
	}

	function onClickResetHandler() {
		setCounter(min_value)
	}

	return (

		<div >
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