import './header.css';
import HeaderContent from './headerContent/HeaderContent';

function Header() {
  return (
    <>
        <div className='header'>
            <img src='../src/assets/img/bank-tree.webp' className='header-banner'alt='A plant in a pot of coins'/>
            <HeaderContent/>
        </div>
    </>
  )
}

export default Header