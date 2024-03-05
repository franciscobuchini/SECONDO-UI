const Checkbox = ({ size, style, shape, text }) => (
  <div className={`Checkbox ${size} ${style} ${shape}`}>
    <label> <input type='checkbox'/> {text} </label>
  </div>
)
export default Checkbox