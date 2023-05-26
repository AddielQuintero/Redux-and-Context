// action
export const ADD_SPARKLE = 'ADD_SPARKLES'
export const REMOVE_SPARKLE = 'REMOVE_SPARKLE'

export interface State {
  sparkles: number
}

export type Action = 
| { type: 'ADD_SPARKLES' } 
| { type: 'REMOVE_SPARKLE' }
