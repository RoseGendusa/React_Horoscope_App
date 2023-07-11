import './Navbar.scss';
import LogoImg from '../../helper/logo.png';
import Search from '../Search/Search';

const Navbar = ({filter}) => {

const links = ['Horoscopes', 'Daily', 'Tarots', 'Articles', 'Contact']
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={LogoImg} alt="app brand icon" />
        </div>
        <Search filter={filter}/>
        <div className="link">
          {links.map((link, index)=><a href="#" key={index}>{link}</a>)}
        </div>
    </nav>
  )
}

export default Navbar