import React, { Component } from 'react';
import Sidenav from '../components/Sidenav';
import RightNav from '../components/RightNav';
import FromRegis from '../components/FormRegis';
class Register extends Component {
  render() {

    return (
      <div>
        <Sidenav/>
        <RightNav/>
        <div className="FormInner">
          <FromRegis/>
        </div>
        
      </div>
    );
  }
}

export default Register;