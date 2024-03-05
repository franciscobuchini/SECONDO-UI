import './../Styles/Styles.css'
import './../Styles/Bento.css'
import Header from '../Components/Header'
import BentoGrid from '../Components/BentoGrid'

export default function App() {

  return (
    <>
      <Header />
      <BentoGrid style='Outlined' shape='Rounded'/>
    </>
  )
}