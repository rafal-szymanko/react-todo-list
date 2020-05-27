import React from 'react';
import styles from './Header.scss';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import { NavLink, Link } from 'react-router-dom';


class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name='atom' />
            </Link>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
              <NavLink exact to='/faq'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
  
export default Header;