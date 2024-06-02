import React from "react";


type CounterPoropsType={
	value: number
	incHandler:()=>void
	resetHandler:()=>void
}
export const Counter = ({value, incHandler,resetHandler}:CounterPoropsType) => {
	return (
		<div>
			<div>
				<h1> {value}  </h1>

				<button onClick={incHandler}>inc</button>
				<button onClick={resetHandler}>inc</button>

				{/*<button onClick={setLocalHandler}>setLocal</button>*/}
				{/*<button onClick={getLocalHandler}>getLocal</button>*/}
			</div>
		</div>
	)
}