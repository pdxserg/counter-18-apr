import React from "react";



type CounterPoropsType={
	value: number
	incHandler:()=>void
	resetHandler:()=>void
}

// const disableHandler=()=>{
// 	if(value)
// }
export const Counter = ({value, incHandler,resetHandler}:CounterPoropsType) => {
	return (
		<div>
			<div>
				<h1 className={value === 5? "styleRed": ""}> {value}  </h1>

				<button onClick={incHandler}
				        disabled={value === 5}
				>inc</button>
				<button onClick={resetHandler}
				        disabled={value === 0}

				>reset</button>

				{/*<button onClick={setLocalHandler}>setLocal</button>*/}
				{/*<button onClick={getLocalHandler}>getLocal</button>*/}
			</div>
		</div>
	)
}