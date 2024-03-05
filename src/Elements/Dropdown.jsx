import { useState, useRef, useEffect } from 'react'

export default function Dropdown ({ size, style, shape, text, items }) {

  const [isActive, setIsActive] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
  const clickOut = (event) => { setIsActive(false) }
  document.addEventListener('mouseup', clickOut)

  return () => {document.removeEventListener('mousedown', clickOut)}}, [])

  return (
    <button className={`Dropdown ${size} ${style} ${shape}`} onClick={()=> setIsActive(!isActive)}> {text} ▾
    {isActive && (
      <div className={style} ref={dropdownRef}>
        {items.map((item, index) => (
          <a key={index} className={style}>
            {item}
          </a>
        ))}
      </div>
    )}
    </button>
  )
}