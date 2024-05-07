import React, {useState} from "react";

export const min_value = 0
export const max_value = 5

export function SetCounter() {
const [num,setNum] = useState(0)

	return (

		<div >
			<div className={'style1'}>
				<div className={`style2-SetCounter`}>

					<input type="number" value={num} />
					<input type="number" value={num}/>

				</div>
				<div className={'style3'}>
					<button >set</button>

				</div>
			</div>


		</div>
	);
}