import React from "react";
import {incrementAC, setMinValueAC, StateType} from "../models/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ShowComponentType} from "../AppWithRedux";


type CounterPoropsType = {
	setHandler: (setting: ShowComponentType) => void
}


export const CounterWithRedux = ({setHandler}: CounterPoropsType) => {
	const {value, minValue, maxValue} = useSelector<AppRootStateType, StateType>(state => state.counter)


	const dispatch = useDispatch()
	const incHandler = () => {
		dispatch(incrementAC())
	}
	const resetHandler = () => {
		dispatch(setMinValueAC(minValue))
	}

	return (
		<div>
			<div className="style1">
				<div>
					<h1 className={value === maxValue ? "styleRed" : ""}>
						{value}
					</h1>
				</div>

				<div className="button-container">

					<button onClick={incHandler}
					        disabled={value === maxValue}
					        className="button"
					>
						inc
					</button>

					<button onClick={resetHandler}
					        disabled={value === 0}
					        className="button"
					>
						reset
					</button>

					<button onClick={() => {
						setHandler("SettingOn")
					}}
					        className="button"
					>
						setting
					</button>
				</div>
			</div>
		</div>

	)
}