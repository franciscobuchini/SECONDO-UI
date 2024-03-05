import Label from '../Elements/Label.JSX'

const BentoLink = ({ size, style, shape, imageBack, title, labels }) => (

<div className={`Bento BentoLink ${size} ${style} ${shape}`}>
  {imageBack && <img className='imageBack' src={imageBack} />}
  <h2>{title}</h2>
  <div className='LabelsRow'>
    {labels &&
      labels.map((label, index) => (
        <Label
          key={index}
          size='Small'
          style='Outlined'
          shape='Rounded'
          text={label.text}
        />
      ))}
  </div>
  
</div>)

export default BentoLink