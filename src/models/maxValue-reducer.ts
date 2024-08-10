


type ActionsType=SetMaxTargetACType
type StateType = number
const initialState: StateType= 10
export const maxValueReducer = (state=initialState, action: ActionsType): StateType => {
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
