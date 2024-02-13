import React, { useId } from 'react'

const Label = ({text,className}) => {
    const id = useId
  return (
    <label htmlFor={id} className={className}>
        {text}
    </label>
  )
}

export default Label
