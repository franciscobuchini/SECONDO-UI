const Label = ({ size, style, shape, text }) => (
  <div className={`Label ${size} ${style} ${shape}`}> {text} </div>
)
export default Label