import React, {useState} from "react";


type CounterPropsType = {
	valueMin: number
	valueMax: number
}

export function Counter(props:CounterPropsType) {

	let [counter, setCounter] = useState(0)

	function onClickHandler() {
		setCounter(counter + 1)
	}

	function onClickResetHandler() {
		setCounter(props.valueMin)
	}

	return (

		<div>
			<div className={'style1'}>
				<div className={`style2  ${counter === props.valueMax ? 'styleRed' : ''}`}>
					{props.valueMin < 0 || props.valueMax < 0 || props.valueMin === props.valueMax
						? <p className={`red-text`}>Incorect value</p>
						: <h2>{counter}</h2>
					}


				</div>
				<div className={'style3'}>
					<button disabled={counter === props.valueMax} onClick={onClickHandler}>inc</button>
					<button disabled={counter === props.valueMin} onClick={onClickResetHandler}>reset</button>
				</div>
			</div>


		</div>
	);
}