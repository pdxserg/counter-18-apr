import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ShowComponentType} from "../AppWithRedux";
import {setMaxTargetAC, setMinTargetAC, setNewMinValueAC, StateType} from "../models/counter-reducer";
import s from "./settings.module.css"


type SettingPropsType = {
	setHandler: (setting: ShowComponentType) => void
}
export const SettingWithRedux = ({setHandler}: SettingPropsType) => {
	const {minValue, maxValue} = useSelector<AppRootStateType, StateType>(state => state.counter)


	const dispatch = useDispatch()
	const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
		const maxTarget = +e.currentTarget.value
		dispatch(setMaxTargetAC(maxTarget))
	}
	const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
		const minTarget = +e.currentTarget.value
		dispatch(setMinTargetAC(minTarget))
		dispatch(setNewMinValueAC(minTarget))
	}


	const error = maxValue === minValue
	const errorForMin = minValue < 0|| maxValue < minValue
	const errorForMax = maxValue < 0 || maxValue < minValue


	const inputClassName = `${error || errorForMin ? s.error : ''}`

	return (
		<div className="style1">
			<div className={inputClassName}>
				{errorForMax ? <span>vrong value:</span> : <span>max value:</span>}
				<input type="number"
				       value={maxValue}
				       onChange={changeMaxValue}
				       className={inputClassName}
				/>
			</div>
			<div className={inputClassName}>
				{errorForMin ? <span>vrong value:</span> : <span>min value:</span>}
				<input type="number"
				       value={minValue}
				       onChange={changeMinValue}
				       className={inputClassName}
				/>
			</div>
			<div className="button-container">
				<button
					className="button"
					onClick={() => {setHandler('SettingOf')}}
					disabled={error}
				>set
				</button>
			</div>

		</div>
	);
}

