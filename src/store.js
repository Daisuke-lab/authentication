import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers/index'

const initialState = []
const middelware = [thunk]
const store = createStore(
    reducer,
    //initialState,
    composeWithDevTools(applyMiddleware(...middelware))
)

export default store