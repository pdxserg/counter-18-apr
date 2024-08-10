


type ActionsType = IncrementACType
type StateType = number
export const valueReducer = (state: StateType, action: ActionsType) => {
	switch (action.type) {
		case "INCREASE":{
			const copyState = state
			return copyState
		}
			default: {
				return state
			}
	}

}

type IncrementACType ={
	type: 'INCREASE'
	value:number
}
export const incrementAC = (value: number):IncrementACType => {
	return {
		type: 'INCREASE',
		value
	} as const
}