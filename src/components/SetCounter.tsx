import React, {ChangeEvent, useState} from "react";

export const min_value = 0
export const max_value = 5

export function SetCounter() {
const [numMax,setNumMax] = useState<number>(0)
const [numMin,setNumMin] = useState<number>(0)

	const onChangeHandlerMax =(el:ChangeEvent<HTMLInputElement>)=>{
		setNumMax(Number(el.currentTarget.value))
	}
	const onChangeHandlerMin =(el:ChangeEvent<HTMLInputElement>)=>{
		setNumMin(Number(el.currentTarget.value))
	}




	return (

		<div >
			<div className={'style1'}>
				<div className={`style2-SetCounter`}>

					<input type="number" value={numMax} onChange={onChangeHandlerMax} />
					<input type="number" value={numMin} onChange={onChangeHandlerMin}/>

				</div>
				<div className={'style3'}>
					<button >set</button>

				</div>
			</div>


		</div>
	);
}