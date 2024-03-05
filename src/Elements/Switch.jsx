import React, { useState } from 'react'

export default function Switch({ size, style, shape }) {
  const [isChecked, setIsChecked] = useState(false)
  const Check = () => {setIsChecked(!isChecked)}

  return (
    <div className={`Switch ${size} ${style} ${shape}`}>
      <label> <input type='checkbox' checked={isChecked} onChange={Check} /> Answer: </label> <b> {isChecked ? ' Yes' : ' No'} </b>
    </div>
  )
}