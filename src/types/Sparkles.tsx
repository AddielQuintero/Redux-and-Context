// action
export const ADD_SPARKLE = 'ADD_SPARKLES'
export const REMOVE_SPARKLE = 'REMOVE_SPARKLE'

export type Action = { type: 'ADD_SPARKLES' } | { type: 'REMOVE_SPARKLE' }

export interface State {
  sparkles: number
}

export const initialState = {
  sparkles: 1,
}

export const DefaultContext = {
  state: initialState as State,
  dispatch: (() => {}) as React.Dispatch<Action>,
}

export interface AppChildrenProps {
  children: React.ReactNode
}
