export default function Form ({ size, style, shape, text, type, index }) {
  return (
    <div className={`Form ${size} ${style} ${shape}`}>
      <label htmlFor={index}></label>
      <input id={index} type={type} placeholder={text}></input>
    </div>
  )
}