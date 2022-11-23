import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, Navbar, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
// import PublicNavList from '../navs/publicNav';
// import PrivateNavList from '../navs/privateNav';
// import ExpandNavList from '../navs/expandNavs'
import '../assets/css/header_footer.css'


class Header extends React.Component{

  constructor(props) {
    super(props);
    
  }


   
  render() { 
      return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav_bar_section">
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand>Website Name</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavItem>
                <Link to="/home" className="nav-link" >
                  <span className="NavBarLink fa fa-home fa-lg" /> Link1
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/home" className="nav-link" >
                  <span className="NavBarLink fa fa-home fa-lg" /> Link2
                </Link>
              </NavItem>
            </Nav>
            <Nav>
              <NavItem>
                <Link to="/login" className="nav-link" >
                  <span className="NavBarLink fa fa-home fa-lg" /> Login
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/login" className="nav-link" >
                  <span className="NavBarLink fa fa-home fa-lg" /> Signup
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      );
  };
}






const mapStateToProps = (state) => ({
  userid: state.auth.uid
});

const mapDispatchToProps = (dispatch,props)=>({
  // startLogout: ()=> dispatch(logout())
});


export default connect(mapStateToProps,mapDispatchToProps)(Header);