import React, { useState, useRef, useEffect } from 'react'

export default function Select ({ size, style, shape, text, items }) {
  const [isActive, setIsActive] = useState(false)
  const [selectedItem, setSelectedItem] = useState(text)
  const SelectRef = useRef(null)

  useEffect(() => {
    const clickOut = (event) => {
      if (SelectRef.current && !SelectRef.current.contains(event.target)) {
        setIsActive(false)
      }
    }
  
    document.addEventListener('mousedown', clickOut)
    return () => {
      document.removeEventListener('mousedown', clickOut)
    }
  }, [])

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setIsActive(false)
  }

  return (
    <button className={`Select ${size} ${style} ${shape}`} onClick={() => setIsActive(!isActive)}>
      {selectedItem} ▾
      {isActive && (
        <div className={style} ref={SelectRef}>
          {items.map((item, index) => (
            <a key={index} className={style} onClick={() => handleItemClick(item)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </button>
  )
}