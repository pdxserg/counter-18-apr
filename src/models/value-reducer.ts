import {Simulate} from "react-dom/test-utils";


type ActionsType = IncrementACType | SetNewMinValueACType | SetMinValueACType
type StateType = number
export const valueReducer = (state: StateType, action: ActionsType): StateType => {
	switch (action.type) {
		case "INCREASE": {
			const copyState = state

			return copyState + 1
		}
		case "NEW-MIN-VALUE": {
			let copyState = state
			copyState = action.minValue
			return copyState
		}
		case "RESET":{
			let copyState = state
			copyState = action.minValue
			return copyState
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
export const setMinValueAC = (minValue: number) => {
	return {
		type: 'RESET',
		minValue
	} as const
}