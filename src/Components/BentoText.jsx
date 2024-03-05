const BentoText = ({ style, shape, size, text }) => {
  const createMarkup = () => ({ __html: text })

  return (
    <div className={`BentoText ${size} ${style} ${shape}`} dangerouslySetInnerHTML={createMarkup()} />
  )
}

export default BentoText