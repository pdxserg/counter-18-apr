


type ActionsType=SetNewMinTargetACType
type StateType = number
const initialState: StateType= 0
export const minValueReducer = (state=initialState, action: ActionsType): StateType => {
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

// AUTO TYPE!!!
type SetNewMinTargetACType = ReturnType<typeof setMinTargetAC>


export const setMinTargetAC  = (minTarget:number)  => {
	return {
		type: 'SET-MIN-VALUE',
		minTarget: minTarget
	} as const
}
