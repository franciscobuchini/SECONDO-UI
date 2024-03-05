import BentoImage from './BentoImage'
import BentoText from './BentoText'
import BentoLink from './BentoLink'
import Button from '../Elements/Button'
import Form from '../Elements/Form'
import Switch from '../Elements/Switch'
import Checkbox from '../Elements/Checkbox'
import Select from '../Elements/Select'
import Label from '../Elements/Label'
import LogoComplete from '../Assets/LogoComplete.svg'
import BentoDemo from './BentoDemo'

const items = ['Spanish', 'English']

export default function BentoGrid({ style, shape }) {

  return (
    <div className='BentoGrid'>
      <BentoText style={style} shape={shape} size='b3x4' text="Introducing Secondo UI: Empowering React web developers with a user-friendly interface inspired by the efficient Bento Grids model. Born from the success of <a href='#'>Primero UI</a>, meaning 'first' in Spanish and rooted in my Argentine nationality, Secondo UI takes center stage. As the successor, 'Secondo' reflects my Italian heritage and commitment to excellence. Elevating performance and minimizing repetition, Secondo UI lets developers focus on creativity, not routine. Welcome to a seamless development experience where every detail is crafted with precision."/>
      <BentoDemo size='b1x8' style={style} shape={shape} component={Button} demoShape='Default' text='Button Example' />
      <BentoDemo size='b1x8' style={style} shape={shape} component={Button} demoShape='Brick' text='Button Example' />
      <BentoDemo size='b1x8' style={style} shape={shape} component={Button} demoShape='Rounded' text='Button Example' />
      <BentoDemo size='b1x12' style={style} shape={shape} component={Form} demoShape='Default' text='Form Example' />
      <BentoDemo size='b1x12' style={style} shape={shape} component={Form} demoShape='Brick' text='Form Example' />
      <BentoDemo size='b1x12' style={style} shape={shape} component={Form} demoShape='Rounded' text='Form Example' />
      <BentoDemo size='b2x4' style={style} shape={shape} component={Switch} demoShape='Default'/>
      <BentoDemo size='b2x4' style={style} shape={shape} component={Switch} demoShape='Brick'/>
      <BentoDemo size='b2x4' style={style} shape={shape} component={Switch} demoShape='Rounded'/>
      <BentoDemo size='b2x6' style={style} shape={shape} component={Checkbox} demoShape='Default' text='Checkbox Example' />
      <BentoDemo size='b2x6' style={style} shape={shape} component={Checkbox} demoShape='Brick' text='Checkbox Example' />
      <BentoDemo size='b2x6' style={style} shape={shape} component={Checkbox} demoShape='Rounded' text='Checkbox Example' />
      <BentoDemo size='b1x8' style={style} shape={shape} component={Select} demoShape='Default' text='Select Example' items={items}/>
      <BentoDemo size='b1x8' style={style} shape={shape} component={Select} demoShape='Brick' text='Select Example' items={items}/>
      <BentoDemo size='b1x8' style={style} shape={shape} component={Select} demoShape='Rounded' text='Select Example' items={items}/>
      <BentoDemo size='b2x6' style={style} shape={shape} component={Label} demoShape='Default' text='Label Example' />
      <BentoDemo size='b2x6' style={style} shape={shape} component={Label} demoShape='Brick' text='Label Example' />
      <BentoDemo size='b3x4' style={style} shape={shape} component={Label} demoShape='Rounded' text='Label Example' />
      <BentoImage size='b2x6' style={style} shape={shape} imageBack={LogoComplete}/> 
    </div>

  )
}