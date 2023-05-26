// reducer
import { ADD_SPARKLE, REMOVE_SPARKLE, State, Action } from '@redux'

const initialState = {
  sparkles: 1,
}

export const SparklesReducer = (state: State = initialState, action: Action): State => {
  const actions = {
    [ADD_SPARKLE]: () => ({ ...state, sparkles: state.sparkles + 1 }),
    [REMOVE_SPARKLE]: () => ({ ...state, sparkles: state.sparkles >= 1 ? state.sparkles - 1 : 0 }),
  }
  return actions[action.type]?.() || state
}
