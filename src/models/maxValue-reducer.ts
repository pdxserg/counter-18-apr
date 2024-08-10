 


type ActionsType=ww
type StateType = number
export const maxValueReducer = (state: StateType, action: ActionsType): StateType => {
	switch (action.type) {
		case "WW": {
			const copyState = state

			return copyState
		}

		default: {
			return state
		}
	}

}

type ww = {
	type: 'WW'
}
export const www = ():ww  => {
	return {
		type: 'WW'
	} as const
}
