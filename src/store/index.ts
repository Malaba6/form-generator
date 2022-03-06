import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"


import reducer from '../store/reducers';

export const store: Store<FormState, FormAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

export default store
