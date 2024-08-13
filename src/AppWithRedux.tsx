import React, {useState} from 'react';
import './App.css'
import {CounterWithRedux} from "./components/CounterWithRedux";
import {SettingWithRedux} from "./components/SettingWithRedux";


export type ShowComponentType = "SettingOf" | "SettingOn"
export const AppWithRedux = () => {

	const [showComponent, setShowComponent] = useState<ShowComponentType>("SettingOf")

	const setHandler = (setting: ShowComponentType) => {
		if (showComponent === "SettingOf") {
			setShowComponent(setting)
		}
		setShowComponent(setting)
	}

	return (
		<div className="App">
			{showComponent === 'SettingOf'
				? <CounterWithRedux
					setHandler={setHandler}
				/>

				: <SettingWithRedux
					setHandler={setHandler}
				/>
			}
		</div>
	);
};










//!!DONT REMOVE CODE BELOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//       DONT REMOVE CODE BELOW!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// useEffect(() => {
// 	let maxValue = localStorage.getItem("maxValue")
// 	let minValue = localStorage.getItem("minValue")
// 	if (maxValue) {
// 		let newMaxVal = JSON.parse(maxValue)
// 		setMaxDown(newMaxVal)
// 	}
// 	if (minValue) {
// 		let newMinVal = JSON.parse(minValue)
// 		setMinDown(newMinVal)
// 	}
//
// }, []);
// useEffect(() => {
// 	localStorage.setItem("maxValue", JSON.stringify(maxValue))
// 	// localStorage.setItem("minValue", JSON.stringify(minValue))
// }, [maxValue]);
// useEffect(() => {
// 	localStorage.setItem("minValue", JSON.stringify(minValue))
// }, [minValue]);
