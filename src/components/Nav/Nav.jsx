import './Nav.css';
import {ReactComponent as Logo} from "./polylog-logo.svg";
import Button from '../Button/Button';

export default function Nav () {

  return (
    <section className='nav-top'>
      <div className='nav-top-left'>
        <Logo />
        <div className='nav-top-menu-item-left'>Team</div>
        <div className='nav-top-menu-item-left'>Coming Soon!</div>
      </div>

      <div className='nav-top-right'>
        <div className='nav-top-menu-item-right'>Login</div>
        <div className='nav-top-menu-item-right'>
          <Button variant='nav-bar'>SIGN UP</Button>
        </div>
      </div>
    </section>
  )
}
