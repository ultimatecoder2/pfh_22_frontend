import React from 'react';
import { connect } from 'react-redux';

export class LoginPage extends React.Component{

OnClickLogin = ()=>{


  this.props.startLogin('1284565ertr');
  
  this.props.history.push('/home');

};

render(){
  return (
    <div className="login-page-class">
      <h1>Login page</h1>
  </div>
  );
}


}




const mapDispatchToProps = (dispatch)=>({

});


export default connect(undefined,mapDispatchToProps)(LoginPage);