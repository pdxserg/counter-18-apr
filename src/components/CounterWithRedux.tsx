import React from "react";
import {incrementAC, setInitialValueAC} from "../models/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ShowComponentType} from "../AppWithRedux";
import Button from "./Button";


type CounterPoropsType = {
	setHandler: (setting: ShowComponentType) => void
}


export const CounterWithRedux = ({setHandler}: CounterPoropsType) => {
	const value = useSelector<AppRootStateType, number>(state => state.counter.value)
	const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
	const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)


	const dispatch = useDispatch()
	const incrementHandler = () => {
		dispatch(incrementAC())
	}
	const resetHandler = () => {
		dispatch(setInitialValueAC(minValue))
	}

	const redNumber = value === maxValue ? "styleRed" : ""

	return (
			<div className="container">
				<div>
					<h1 className={redNumber}>
						{value}
					</h1>
				</div>

				<div className="button-container">
					<Button
						title={"inc"}
						className="button"
						onClick={incrementHandler}
						disabled={value === maxValue}
					/>
					<Button
						title={"reset"}
						className="button"
						onClick={resetHandler}
						disabled={value === minValue}
					/>
					<Button
						title={"setting"}
						className="button"
						onClick={() => {
							setHandler("SettingOn")
						}}
					/>

				</div>
			</div>
	)
}