import React from 'react';
import { connect } from 'react-redux';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Key from '@mui/icons-material/VpnKey';
// import Button from '@mui/material/Button';

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