import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ShowComponentType} from "../AppWithRedux";
import {setInitialValueAC, setMaxTargetAC, setMinTargetAC,} from "../models/counter-reducer";
import s from "./settings.module.css"
import Button from "./Button";


type SettingPropsType = {
	setHandler: (setting: ShowComponentType) => void
}
export const SettingWithRedux = ({setHandler}: SettingPropsType) => {
	const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
	const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)


	const dispatch = useDispatch()
	const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
		const maxTarget = +e.currentTarget.value
		dispatch(setMaxTargetAC(maxTarget))
	}
	const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
		const minTarget = +e.currentTarget.value
		dispatch(setMinTargetAC(minTarget))
		dispatch(setInitialValueAC(minTarget))
	}



	const error = maxValue <= minValue ||minValue < 0||maxValue < 0


	const inputClassName = `${error  ? s.error : ''}`

	return (
		<div className="container">
			<div className={inputClassName}>
				{error ? <span>Wrong value:</span> : <span>max value:</span>}
				<input type="number"
				       value={maxValue}
				       onChange={changeMaxValue}
				       className={inputClassName}
				/>
			</div>
			<div className={inputClassName}>
				{error? <span>Wrong value:</span> : <span>min value:</span>}
				<input type="number"
				       value={minValue}
				       onChange={changeMinValue}
				       className={inputClassName}
				/>
			</div>
			<div className="button-container">
				<Button
					title={"set"}
					className="button"
					onClick={() => {setHandler('SettingOf')}}
					disabled={error}
				/>
			</div>

		</div>
	);
}

