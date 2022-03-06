import * as actionTypes from "./actionTypes"
import { initialState } from "./reducers"

export function addForm(form: Form) {
  const action: FormAction = {
    type: actionTypes.ADD_FORM,
    payload: form,
  }

  return simulateHttpRequest(action)
}

export function getForms() {
  const forms = JSON.parse(localStorage.getItem("forms") || "[]")
    || initialState.forms
  
  const action: FormAction = {
    type: actionTypes.GET_FORMS,
    payload: forms,
  }
  return simulateHttpRequest(action)
}

export function updateForm(form: Form) {
  const action: FormAction = {
    type: actionTypes.UPDATE_FORM,
    payload: form,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: FormAction) {
  const forms = JSON.parse(localStorage.getItem("forms") || "[]")

  const newForms = forms.map((form: { id: string }) => {
    if (form.id === action.payload.id) {
      return action.payload
    }
    return form
  })

  localStorage.setItem("forms", JSON.stringify(newForms))

  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
