import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { DefaultContext, initialState, AppChildrenProps } from '@types'
import { SparklesReducer } from '@reducer'

const AppContext = createContext(DefaultContext)

const AppProvider = ({ children }: AppChildrenProps) => {
  const [state, dispatch] = useReducer(SparklesReducer, initialState)

  const app = {
    state,
    dispatch,
  }

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>
}

const useApp = () => {
  const app = useContext(AppContext)
  return app
}

export { AppProvider, useApp }
