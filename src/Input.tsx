import React, { useState } from 'react'

type Props = {
  id: string,
  type: string,
  text: string,
  forms: Form[],
  header: string,
  open: boolean,
  setIsUnsaved: Function,
  isUnsaved: boolean,
  setForm: (form: Form | any) => void,
}

const Input = ({
  id, type, text, forms, header, setForm, open,
  setIsUnsaved, isUnsaved
}: Props) => {
  const [value, setValue] = useState(text)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsUnsaved(true)
    const form = forms.find(form => form.header === header)
    const input = form?.form.find(input => input.id === id)

    setValue(e.currentTarget.value)

    const newInput = { ...input, text: e.currentTarget.value }

    const newForm = {
      ...form,
      form: form?.form.map(input => input.id === id ? newInput : input)
    }
 
    setForm(newForm)
  }

  return type === 'label'
    ? <label htmlFor={id} className="text-lg mr-4" >{`${text}: `}</label>
    : <>
      <input id={id} type={type} value={value} onChange={handleChange}
        disabled={type === 'submit' && !isUnsaved}
        className={type === 'submit'
          ? `bg-blue-500 disabled:bg-blue-200 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-md float-right mt-4 
            hover:cursor-pointer`
          : `mb-4 border shadow-sm 
            border-slate-300 rounded-md focus:outline-none 
            focus:border-sky-500 focus:ring-sky-500 p-1`}
      /><br />
    </>
}

export default Input
