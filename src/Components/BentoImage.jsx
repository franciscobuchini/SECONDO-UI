const BentoImage = ({ size, style, shape, imageFront, imageBack, title }) => (

<div className={`Bento BentoImage ${size} ${style} ${shape}`}>
  {imageBack && <img className='imageBack' src={imageBack} />}
  {imageFront && <img className='imageFront' src={imageFront} />}
  <h2>{title}</h2>
</div>)

export default BentoImage