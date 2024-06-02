import React, {ChangeEvent, useState} from 'react';

type SettingPropsType = {
	maxValue:number
	minValue: number
	maxHendler:(e: ChangeEvent<HTMLInputElement>)=>void
	minHendler:(e: ChangeEvent<HTMLInputElement>)=>void
}
export const Setting = ({minHendler,minValue ,maxValue ,maxHendler}: SettingPropsType) => {

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
			<button
			disabled={maxValue === minValue || minValue < 0 || maxValue <0}
			>set</button>
		</div>
	);
}

