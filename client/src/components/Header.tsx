import { NavLink } from 'react-router-dom'
import logoImage from "../assets/logoImage.png"

function Header() {
  return (
    <>
    <header className="header-containe bg-[#FFF7ED] py-10 px-8 sticky z-20">
      <div className="container flex items-center justify-between">
        <NavLink className="logo w-36 object-cover" to='/'><img src={logoImage} alt="" /></NavLink>
        <nav className='flex gap-2.5'>
            <NavLink 
              className='hover:underline hover:font-medium' 
              to="/about" 
              style={({isActive}) => isActive ? {textDecoration: "underline"}: {}}
            >About</NavLink>
            <NavLink 
              className='hover:underline hover:font-medium' 
              to="/vans"
              style={({isActive}) => isActive ? { textDecoration: "underline"} : {}}
            >Vans</NavLink>
        </nav>
      </div>
    </header>        
    </>
  )
}


export default Header

