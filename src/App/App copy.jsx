import './../Styles/Styles.css'
import './../Styles/Bento.css'

import Header from '../Components/Header'
import Card from '../Components/Card'
import BentoGrid from '../Components/BentoGrid'

import Space from '../Elements/Space'
import Button from '../Elements/Button'
import Dropdown from '../Elements/Dropdown'
import Select from '../Elements/Select'
import Checkbox from '../Elements/Checkbox'
import Label from '../Elements/Label'
import Form from '../Elements/Form'
import ColorSwitch from '../Elements/Switch'

const components = ['Button', 'Dropdown', 'Select', 'Checkbox', 'Label', 'Form', 'Switch']
const styles = ['Solid', 'Contained', 'Ghost', 'Outlined']
const shapes = ['Default', 'Brick', 'Rounded']
const items = ['Spanish', 'English', 'German', 'Danish', 'Portuguese', 'Italian']

const genCombination = () => {
  const gens = []
  for (const component of components) {
    for (const style of styles) {
      for (const shape of shapes) {
        gens.push({ component, style, shape })}}}
  return gens
}

export default function App() {
  const gens = genCombination()

  return (
    <>
      <Header />
      <BentoGrid />
      <section className='MainSection'>
        <section className='StyleSection'>
          {gens.map((gen, index) => (
            <section key={index} className='SubSection'>
              <Card size={gen.size} style={gen.style} shape={gen.shape} />
            </section>
          ))}
        </section>

        {gens.map((gen, index) => (
          <section key={index} className='SubSection'>
            <div className='NameSection'>{`${gen.size} ${gen.style} ${gen.shape}`}</div>
            <div className='StyleSection'>
              <Button size={gen.size} style={gen.style} shape={gen.shape} title='This is a button' />
              <Dropdown size={gen.size} style={gen.style} shape={gen.shape} title='This is a dropdown' items={items} />
              <Select size={gen.size} style={gen.style} shape={gen.shape} title='This is a selector' items={items} />
              <Checkbox size={gen.size} style={gen.style} shape={gen.shape} title='This is a checkbox' />
              <Label size={gen.size} style={gen.style} shape={gen.shape} title='This is a label' />
              <Form size={gen.size} style={gen.style} shape={gen.shape} title='This is an input' index={index} />
              <ColorSwitch size={gen.size} style={gen.style} shape={gen.shape} index={index} />
            </div>
          </section>
        ))}
      </section>
    </>
  )
}