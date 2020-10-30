import './Nav.css';
import {ReactComponent as Logo} from "./polylog-logo.svg";
import Button from '../Button/Button';

export default function Nav () {

  return (
    <section className='nav-top'>
      <div className='nav-top-left'>
        <a href='#'><Logo /></a>
        <div className='nav-top-menu-item-left'><a href='#'>team</a></div>
        <div className='nav-top-menu-item-left'><a href='#'>coming soon!</a></div>
      </div>

      <div className='nav-top-right'>
        <div className='nav-top-menu-item-right'><a href='#'>login</a></div>
        <div className='nav-top-menu-item-right'>
          <Button variant='nav-bar'>SIGN UP</Button>
        </div>
      </div>
    </section>
  )
}
