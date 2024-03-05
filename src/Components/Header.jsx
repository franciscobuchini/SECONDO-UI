import Logo from './../Assets/Logo.svg'
export default function Header () {
  return (
    <div className='Header'>
      <div className='ImageTitle'>
        <img src={Logo}/>
      </div>
      <p>Created by <a>Francisco Buchini</a></p> 
    </div>
  )
}