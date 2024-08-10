


type ActionsType=SetNewMinTargetACType
type StateType = number
export const minValueReducer = (state: StateType, action: ActionsType): StateType => {
	switch (action.type) {
		case 'SET-MIN-VALUE': {
			let copyState = state
			copyState = action.minTarget
			return copyState
		}
		
		default: {
			return state
		}
	}
}

type SetNewMinTargetACType = {
	type: 'SET-MIN-VALUE'
	minTarget:number
}
export const setMinTargetAC = (minTarget:number):SetNewMinTargetACType  => {
	return {
		type: 'SET-MIN-VALUE',
		minTarget: minTarget
	} as const
}
