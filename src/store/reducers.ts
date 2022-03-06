import * as actionTypes from "./actionTypes"

const forms = JSON.parse(localStorage.getItem("forms") || "[]")
export const initialState: FormState = {
  forms: (forms.length && forms) || [
    {
      header: 'Name',
      id: 'header-name',
      form: [
        {
          text: 'First Name',
          type: 'label',
          id: 'label-1',
        },
        {
          text: 'John',
          type: 'input',
          id: 'input-1',
        },
        {
          text: 'Last Name',
          type: 'label',
          id: 'label-2',
        },
        {
          text: 'Joe',
          type: 'input',
          id: 'input-2',
        },
      ]
      
    },
    {
      header: 'Address',
      id: 'header-adress',
      form: [
        {
          text: 'Street 1',
          type: 'label',
          id: 'label-3',
        },
        {
          text: 'My Street',
          type: 'input',
          id: 'input-3',
        },
        {
          text: 'Zip',
          type: 'label',
          id: 'label-4',
        },
        {
          text: '90210',
          type: 'input',
          id: 'input-4',
        },
        {
          text: 'Update Profile',
          type: 'submit',
          id: 'update-profile',
        },
      ],
    }, 
  ],
}

const reducer = (state = initialState, action: FormAction): FormState => {
  switch (action.type) {
    case actionTypes.ADD_FORM:
      return {
        ...state,
        forms: [...state.forms, action.payload],
      }
    case actionTypes.UPDATE_FORM:
      return {
        ...state,
        forms: state.forms.map(form => {
          if (form.id === action.payload.id) {
            return action.payload
          }
          return form
        }),
      }
    default:
      return state
  }
}

export default reducer
