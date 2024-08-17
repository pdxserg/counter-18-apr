type IncrementACType = {
	type: 'INCREASE'
}
type SetNewMinValueACType = {
	type: 'INITIAL-VALUE'
	value: number
}
type SetMinValueACType = {
	type: 'RESET',
	minValue: number
}
// AUTO TYPE!!!
type SetNewMinTargetACType = ReturnType<typeof setMinTargetAC>

type SetMaxTargetACType = {
	type: 'SET-MAX-VALUE'
	maxTarget:number
}
type ActionsType = IncrementACType | SetNewMinValueACType | SetMinValueACType|SetNewMinTargetACType|SetMaxTargetACType
export type StateType = {
	value: number
	minValue:number
	maxValue:number
}

const initialState: StateType = {
	value: 0,
	minValue:0,
	maxValue:5
}
export const counterReducer = (state = initialState, action: ActionsType): StateType => {
	switch (action.type) {
		case "INCREASE": {
			return {...state, value: state.value+1}
		}
		case   'INITIAL-VALUE': {
			return {...state, value: action.value }
		}
		// case "RESET": {
		// 	return {...state, value: action.minValue }
		// }
		case 'SET-MIN-VALUE': {
			return {...state, minValue: action.minTarget }
		}
		case 'SET-MAX-VALUE': {
			return {...state, maxValue: action.maxTarget }
		}
		default: {
			return state
		}
	}
}


export const incrementAC = (): IncrementACType => {
	return {
		type: 'INCREASE',
	} as const
}

export const setInitialValueAC = (value: number): SetNewMinValueACType => {
	return {
		type: 'INITIAL-VALUE',
		value
	} as const
}

export const setMinTargetAC  = (minTarget:number)  => {
	return {
		type: 'SET-MIN-VALUE',
		minTarget: minTarget
	} as const
}

export const setMaxTargetAC = (maxTarget:number):SetMaxTargetACType  => {
	return {
		type: 'SET-MAX-VALUE',
		maxTarget
	} as const
}