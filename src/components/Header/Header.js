import React from 'react';
import styles from './Header.scss';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import {headerContents} from '../../data/dataStore';
import { NavLink, Link } from 'react-router-dom';


class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to={headerContents.navLink.home.link} className={styles.logo}>
              <Icon name= {headerContents.icon} />
            </Link>
            <nav>
              <NavLink exact to={headerContents.navLink.home.link}>{headerContents.navLink.home.text}</NavLink>
              <NavLink exact to={headerContents.navLink.info.link}>{headerContents.navLink.info.text}</NavLink>
              <NavLink exact to={headerContents.navLink.faq.link}>{headerContents.navLink.faq.text}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
  
export default Header;