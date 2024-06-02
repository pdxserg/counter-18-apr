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
			<div className="style1">
				<div >
					<h1 className={value === maxValue ? "styleRed" : ""}>
						{value}
					</h1>
				</div>

				<div className="button-container">
					<button onClick={incHandler}
					        disabled={value === maxValue}
					        className="button"
					>inc

					</button>
					<button onClick={resetHandler}
					        disabled={value === 0}
					        className="button"

					>reset
					</button>
				</div>


				{/*<button onClick={setLocalHandler}>setLocal</button>*/}
				{/*<button onClick={getLocalHandler}>getLocal</button>*/}
			</div>
		</div>
	)
}