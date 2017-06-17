// Los middlewares se ejecutan entre q se lanza una accion y se ejecuta
import {
	createStore,
	applyMiddleware
} from 'redux'
// redux-logger Permite tener un log en la consaola de desarrollador
import logger from 'redux-logger'
import {
	composeWithDevTools
} from 'redux-devtools-extension'

import rootReducer from '../reducers'

const enhancer = composeWithDevTools(
	applyMiddleware(logger())
)

export default function configureStore(initialState) {
	return createStore(rootReducer, initialState, enhancer)
}