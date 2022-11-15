import './style.scss';

const Header = () => {
  return (
    <div className="HeaderContent">
        <div className="BoxIcontent">
            <img className='IconImage' src="Astro.png" alt="No Found" />
        </div>
        <div className="NavContent">
            <a href="#SobreMi" className='NavItem Principal'>Sobre mi</a>
            <a href="" className='NavItem'>Proyectos</a>
            <a href="" className='NavItem'>Hobbies</a>
            <a href="#Contacto" className='NavItem'>Contacto</a>
        </div>
    </div>
  )
}

export default Header