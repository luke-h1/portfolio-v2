import React, { FunctionComponent } from 'react';
import { NavIcon } from '@icons/NavIcon';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  Icon,
  // NavBtnLink,
} from './NavStyles';
import data from './data.json';

interface Iprops {
  toggle: any;
}


const NavBar: FunctionComponent<Iprops> = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo href="/">
            <a>
              <NavIcon />
            </a>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <Icon/>
          </MobileIcon>
          <NavMenu>
            {data.map((i) => (
              <NavItem key={i.id}>
                <NavLinks href={i.slug}>
                  <a>{i.name}</a>
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn />
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default NavBar;