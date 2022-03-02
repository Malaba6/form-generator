import React from 'react'

export type Props = {
  header: string
}


const Header = ({ header }: Props) => {
  return (
    <div id="header" className="font-bold text-[2em] my-4">
      <h1>{header}</h1>
    </div>
  )
}

export default Header
