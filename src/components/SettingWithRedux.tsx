import React, {ChangeEvent} from 'react';
import {setMaxTargetAC} from "../models/maxValue-reducer";
import {setMinTargetAC} from "../models/minValue-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import s from './settings.module.css'
import {ShowComponentType} from "../AppWithRedux";
import {setNewMinValueAC, StateType} from "../models/value-reducer";


type SettingPropsType = {
	setHandler: (setting: ShowComponentType) => void
}
export const SettingWithRedux = ({setHandler}: SettingPropsType) => {
	const {value, minValue, maxValue} = useSelector<AppRootStateType, StateType>(state => state.counter)


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


	// const error = maxValueStore === minValueStore || minValueStore < 0 || maxValueStore < 0 || maxValueStore < minValueStore

	// const inputClassName = `${s.input} ${error ? s.error : ''}`

	return (
		<div className="style1">
			<div>
				max value:
				<input type="number"
				       value={maxValue }
				       onChange={changeMaxValue}
				       // className={inputClassName}
				/>
			</div>
			<div>
				min value:
				<input type="number"
				       value={minValue }
				       onChange={changeMinValue}
				/>
			</div>
			<div className="button-container">
				<button
					className="button"
					onClick={()=>{setHandler('SettingOf')}}
					// disabled={error}
				>set
				</button>
			</div>

		</div>
	);
}

