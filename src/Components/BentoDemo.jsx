const BentoDemo = ({ size, style, shape, component, demoShape, text, items }) => {
  const DynamicComponent = component;

  return (
    <div className={`Bento BentoDemo ${size} ${style} ${shape}`}>
      <DynamicComponent size='Medium' style='Solid' shape={demoShape} text={text} items={items}/>
      <DynamicComponent size='Medium' style='Contained' shape={demoShape} text={text} items={items}/>
      <DynamicComponent size='Medium' style='Ghost' shape={demoShape} text={text} items={items}/>
      <DynamicComponent size='Medium' style='Outlined' shape={demoShape} text={text} items={items}/>
    </div>
  );
}

export default BentoDemo;