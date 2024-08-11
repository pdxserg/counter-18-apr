import React, {ChangeEvent} from 'react';
import {setMaxTargetAC} from "../models/maxValue-reducer";
import {setMinTargetAC} from "../models/minValue-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";

type SettingPropsType = {
	// maxValue: number
	// minValue: number
	// changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
	// changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
	setHandler: () => void
}
export const SettingWithRedux = ({setHandler}: SettingPropsType) => {

	const maxValueStore = useSelector<AppRootStateType, number>(state => state.maxValueStore)
	const minValueStore = useSelector<AppRootStateType, number>(state => state.minValueStore)
	const dispatch = useDispatch()
	const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
		const maxTarget = +e.currentTarget.value
		dispatch(setMaxTargetAC(maxTarget))
	}
	const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
		const minTarget = +e.currentTarget.value
		dispatch(setMinTargetAC(minTarget))
	}
	return (
		<div className="style1">
			<div>
				max value:
				<input type="number"
				       value={maxValueStore}
				       onChange={changeMaxValue}
				/>
			</div>
			<div>
				min value:
				<input type="number"
				       value={minValueStore}
				       onChange={changeMinValue}
				/>
			</div>
			<div className="button-container">
				<button
					className="button"
					onClick={setHandler}
					disabled={maxValueStore === minValueStore || minValueStore < 0 || maxValueStore < 0 || maxValueStore < minValueStore}
				>set
				</button>
			</div>

		</div>
	);
}

