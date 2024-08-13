import React from "react";
import {incrementAC, setMinValueAC, StateType} from "../models/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ShowComponentType} from "../AppWithRedux";
import Button from "./Button";


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
					<Button
						title={"inc"}
						className="button"
						onClick={incHandler}
						disabled={value === maxValue}
					/>
					<Button
						title={"reset"}
						className="button"
						onClick={resetHandler}
						disabled={value === 0}
					/>
					<Button
						title={"setting"}
						className="button"
						onClick={() => {setHandler("SettingOn")}}
					/>

				</div>
			</div>
		</div>

	)
}