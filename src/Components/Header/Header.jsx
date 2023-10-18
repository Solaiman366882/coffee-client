import logo from '../../assets/images/more/logo1.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <img className='logo' src={logo} alt="" />
           <h1>Espresso Emporium</h1>
        </div>
    );
};

export default Header;