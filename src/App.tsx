import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Input from './Input';
import Notify from './Notify';

export default function App() {
  const [open, setOpen] = useState(false)
  const data = [
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
      ],
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
          type: 'button',
          id: 'update-profile',
        },
      ],
    },
  ];

  return <div className="">
    <div data-testid="form-wrapper" className='border border-gray-200  px-8 pb-16 mt-8
      md:w-1/2 lg:w-1/3 m-auto'>
      {data.map(({ header, id, form }) => 
        <div key={id}>
          <Header header={header} />
          {form.map(({ text, type, id }) =>
            <Input key={id} text={text} type={type} id={id} setOpen={setOpen} />
          )}
        </div>
      )}
    </div>
    <Notify {...{ open, setOpen }} />
  </div>;
}
