import React, { useState } from 'react'

type Props = {
  id: string,
  type: string,
  text: string,
  setOpen: (open: boolean) => void,
}

const Input = ({ id, type, text, setOpen }: Props) => {
  const [value, setValue] = useState(text)
  // const props = type === 'button' ? 'onSubmit' : 'onChange'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return type === 'label'
    ? <label htmlFor={id} className="text-lg mr-4" >{`${text}: `}</label>
    : <>
      <input id={id} type={type} value={value} onChange={handleChange}
        onClick={() => setOpen(true)}
        className={type === 'button'
          ? `bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-md float-right mt-4 
            hover:cursor-pointer`
          : `mb-4 border shadow-sm 
            border-slate-300 rounded-md focus:outline-none 
            focus:border-sky-500 focus:ring-sky-500 p-1`}
      /><br />
    </>
}

export default Input
