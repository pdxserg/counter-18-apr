import React, {ChangeEvent, useState} from "react";




type SetCounterPropsType = {
	onChangeHandlerMax: (el: ChangeEvent<HTMLInputElement>) => void
	onChangeHandlerMin: (el: ChangeEvent<HTMLInputElement>) => void
	numMax: number
	numMin: number
	lokalStorageHandler:()=>void
}

export function SetCounter(props: SetCounterPropsType) {
// const [numMax,setNumMax] = useState<number>(0)
// const [numMin,setNumMin] = useState<number>(0)
//
// 	const onChangeHandlerMax =(el:ChangeEvent<HTMLInputElement>)=>{
// 		setNumMax(Number(el.currentTarget.value))
// 	}
// 	const onChangeHandlerMin =(el:ChangeEvent<HTMLInputElement>)=>{
// 		setNumMin(Number(el.currentTarget.value))
// 	}


	return (

		<div>
			<div className={`style1`}>
				<div className={`style2-SetCounter`}>
					<label htmlFor="max">max value</label>

					<input
						id="max"
						className={props.numMax < 0 || props.numMax === props.numMin ? `red` : ''}
						type="number" value={props.numMax} onChange={props.onChangeHandlerMax}

					/>
					<br/>
					<label htmlFor="min">min value </label>
					<input
						id="min"
						className={props.numMin < 0 || props.numMax === props.numMin ? `red` : ''}
						type="number" value={props.numMin} onChange={props.onChangeHandlerMin}
					/>

				</div>
				<div className={'style3'}>
					<button disabled={props.numMax < 0 || props.numMin < 0 || props.numMax === props.numMin}
					onClick={props.lokalStorageHandler}>set</button>

				</div>
			</div>


		</div>
	);
}