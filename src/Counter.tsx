import React from "react";


type CounterPoropsType = {
	value: number
	incHandler: () => void
	resetHandler: () => void
	maxValue: number
	minValue:number
}

// const disableHandler=()=>{
// 	if(value)
// }
export const Counter = ({value, incHandler, resetHandler,minValue ,maxValue }: CounterPoropsType) => {
	return (
		<div>
			<div>
				<h1 className={value === maxValue ? "styleRed" : ""}>
					{value}
				</h1>

				<button onClick={incHandler}
				        disabled={value === maxValue}
				>inc
				</button>
				<button onClick={resetHandler}
				        disabled={value === 0}

				>reset
				</button>

				{/*<button onClick={setLocalHandler}>setLocal</button>*/}
				{/*<button onClick={getLocalHandler}>getLocal</button>*/}
			</div>
		</div>
	)
}