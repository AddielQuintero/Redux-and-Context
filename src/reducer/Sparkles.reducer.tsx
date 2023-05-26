// reducer
import { ADD_SPARKLE, REMOVE_SPARKLE, State, Action } from '@types'


export const SparklesReducer = (state: State , action: Action): State => {
  const actions = {
    [ADD_SPARKLE]: () => ({ ...state, sparkles: state.sparkles + 1 }),
    [REMOVE_SPARKLE]: () => ({ ...state, sparkles: state.sparkles >= 1 ? state.sparkles - 1 : 0 }),
  }
  return actions[action.type]?.() || state
}
