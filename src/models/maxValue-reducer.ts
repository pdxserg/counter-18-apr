


type ActionsType=SetMaxTargetACType
type StateType = number
export const maxValueReducer = (state: StateType, action: ActionsType): StateType => {
	switch (action.type) {
		case 'SET-MAX-VALUE': {
			let copyState = state
			copyState = action.maxTarget
			return copyState
		}

		default: {
			return state
		}
	}

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
