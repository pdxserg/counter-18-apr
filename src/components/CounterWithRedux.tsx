import React from "react";
import {incrementAC, setMinValueAC} from "../models/value-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ShowComponentType} from "../AppWithRedux";


type CounterPoropsType = {
	setHandler: (setting: ShowComponentType) => void
}


export const CounterWithRedux = ({ setHandler  }: CounterPoropsType) => {
	const value = useSelector<AppRootStateType, number>(state => state.value)
	const maxValueStore = useSelector<AppRootStateType, number>(state => state.maxValueStore)
	const minValueStore = useSelector<AppRootStateType, number>(state => state.minValueStore)

	const dispatch = useDispatch()
	const incHandler = () => {
		dispatch(incrementAC() )
	}
	const resetHandler = () => {
		dispatch(setMinValueAC(minValueStore))
	}

	return (
		<div>
			<div className="style1">
				<div >
					<h1 className={value === maxValueStore ? "styleRed" : ""}>
						{value}
					</h1>
				</div>

				<div className="button-container">

					<button onClick={incHandler}
					        disabled={value === maxValueStore}
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

					<button onClick={()=>{setHandler("SettingOn")}}
					        className="button"
					>
						setting
					</button>
				</div>
			</div>
		</div>
	)
}