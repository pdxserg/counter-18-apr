import React, {ChangeEvent, useState} from 'react';

type SettingPropsType = {}
export const Setting = ({}: SettingPropsType) => {
	const [maxValue, setMaxValue] = useState(0)
	const [minValue, setMinValue] = useState(0)
	const maxHendler = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxValue(+e.currentTarget.value)
	}
	const minHendler = (e: ChangeEvent<HTMLInputElement>) => {
		setMinValue(+e.currentTarget.value)
	}
	return (
		<div>
			<div>
				max value:
				<input type="number"
				       value={maxValue}
				       onChange={maxHendler}
				/>
			</div>
			<div>
				min value:
				<input type="number"
				       value={minValue}
				       onChange={minHendler}
				/>
			</div>


			<button>set</button>
		</div>
	);
}

