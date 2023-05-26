// store
import { legacy_createStore as createStore } from 'redux'
import { SparklesReducer } from '@redux'

const store = createStore(SparklesReducer)

export { store }
