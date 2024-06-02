import React from "react";
// import s from "../App.css"

type CounterPropsType = {
	valueMin: number
	valueMax: number
	counter: number
	setCounter: (el:number)=>void
	componentHandler:()=>void
}

export function Counter(props:CounterPropsType) {



	function onClickHandler() {
		props.setCounter(props.counter + 1)
	}

	function onClickResetHandler() {
		props.setCounter(props.valueMin)
	}
// const styleRed= s.style2+(props.counter === props.valueMax ? ' '+s.styleRed : '')
	return (

		<div>
			<div className={'component'}>
				<div
					// className={styleRed}>
					className={`style2-counter  ${props.counter === props.valueMax ? 'styleRed' : ''}`}>


					{props.valueMin < 0 || props.valueMax < 0 || props.valueMin === props.valueMax
						? <p className={`red-text`}>Incorect value</p>
						: <h2>{props.counter}</h2>
					}


				</div>
				<div className={'styleButton'}>
					<button disabled={props.counter === props.valueMax} onClick={onClickHandler}>inc</button>
					<button disabled={props.counter === props.valueMin} onClick={onClickResetHandler}>reset</button>
					<button  onClick={props.componentHandler}>setting</button>
				</div>
			</div>


		</div>
	);
}