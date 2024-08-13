type ActionsType = IncrementACType | SetNewMinValueACType | SetMinValueACType
export type StateType = {
	value: number
	minValue:number
	maxValue:number
}

const initialState: StateType = {
	value: 1,
	minValue:1,
	maxValue:10
}
export const counterReducer = (state = initialState, action: ActionsType): StateType => {
	switch (action.type) {
		case "INCREASE": {
			return {...state, value: state.value+1}
		}
		case "NEW-MIN-VALUE": {
			return {...state, value: action.minValue }
		}
		case "RESET": {
			return {...state, value: action.minValue }
		}
		default: {
			return state
		}
	}
}

type IncrementACType = {
	type: 'INCREASE'
}
export const incrementAC = (): IncrementACType => {
	return {
		type: 'INCREASE',
	} as const
}

type SetNewMinValueACType = {
	type: 'NEW-MIN-VALUE',
	minValue: number
}
export const setNewMinValueAC = (minValue: number): SetNewMinValueACType => {
	return {
		type: 'NEW-MIN-VALUE',
		minValue
	} as const
}

type SetMinValueACType = {
	type: 'RESET',
	minValue: number
}
export const setMinValueAC = (minValue: number): SetMinValueACType => {
	return {
		type: 'RESET',
		minValue
	} as const
}