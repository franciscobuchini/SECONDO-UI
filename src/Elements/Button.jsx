const Button = ({ size, style, shape, text }) => {
  return (
  <button className={`Button ${size} ${style} ${shape}`}> {text} </button>
  )
}
export default Button