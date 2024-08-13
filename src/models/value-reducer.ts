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
		case "NEW-MIN-VALUE": {
			return {...state, value: action.minValue }
		}
		case "RESET": {
			return {...state, value: action.minValue }
		}
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
// AUTO TYPE!!!
type SetNewMinTargetACType = ReturnType<typeof setMinTargetAC>
export const setMinTargetAC  = (minTarget:number)  => {
	return {
		type: 'SET-MIN-VALUE',
		minTarget: minTarget
	} as const
}
type SetMaxTargetACType = {
	type: 'SET-MAX-VALUE'
	maxTarget:number
}
export const setMaxTargetAC = (maxTarget:number):SetMaxTargetACType  => {
	return {
		type: 'SET-MAX-VALUE',
		maxTarget
	} as const
}