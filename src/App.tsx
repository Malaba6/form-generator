import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { isEqual } from "lodash"

import './style.css';
import Header from './Header';
import Input from './Input';
import Notify from './Notify';
import { updateForm } from "./store/actionCreators"

export default function App() {
  const [open, setOpen] = useState(false)
  const [isUnsaved, setIsUnsaved] = useState(false)
  const forms: Form[] = useSelector(
    (state: FormState) => state.forms,
    shallowEqual
  )
  
  const [form, setForm] = useState<Form>(forms[0])


  const dispatch: Dispatch<any> = useDispatch()

  const saveForm = useCallback(
    (form: Form) => {
      dispatch(updateForm(form))
      setIsUnsaved(false)
      setOpen(true)
    },
    [dispatch])

  const hanldeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveForm(form)
  }

  return <div data-testid="app">
    <form data-testid="form-wrapper"
      onSubmit={hanldeSubmit}
      className='border border-gray-200 
      px-8 pb-16 mt-8 md:w-1/2 lg:w-1/3 m-auto'>
      {forms.map(({ header, id, form }) => 
        <div key={id}>
          <Header header={header} />
          {form.map(({ text, type, id }) =>
            <Input key={id}
              text={text} type={type} id={id}
              forms={forms}
              header={header}
              open={open}
              setIsUnsaved={setIsUnsaved}
              isUnsaved={isUnsaved}
              setForm={setForm} />
          )}
        </div>
      )}
    </form>
    <Notify {...{ open, setOpen }} />
  </div>;
}
