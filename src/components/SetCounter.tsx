import React, {ChangeEvent, useState} from "react";




type SetCounterPropsType = {
	onChangeHandlerMax: (el: ChangeEvent<HTMLInputElement>) => void
	onChangeHandlerMin: (el: ChangeEvent<HTMLInputElement>) => void
	numMax: number
	numMin: number
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
			<div className={'style1'}>
				<div className={`style2-SetCounter`}>

					<input type="number" value={props.numMax} onChange={props.onChangeHandlerMax}/>
					<input type="number" value={props.numMin} onChange={props.onChangeHandlerMin}/>

				</div>
				<div className={'style3'}>
					<button>set</button>

				</div>
			</div>


		</div>
	);
}