import React from 'react';


export class FormsPage extends React.Component{

  state={
    messageopen:false,
    messageInfo: {},
    gender:'male'
  }

giveSuccessMessage=(message)=>{
let newmsg = {
  message,
  key:new Date().getTime()
};

this.setState({
messageopen:true,
messageInfo:newmsg

});

};

onSubmit = ()=>{

  this.giveSuccessMessage('send successfully ');

  //this.props.startAddLogin(user);
  
 // this.props.history.push('/');

};
 handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ messageopen: false });
  };

  handleGenderChange = (event)=>{

       this.setState({ gender: event.target.value });
  };

render(){

   const { message, key } = this.state.messageInfo;


  return (
     <div className="contact-page-wrapper">



       </div>
  );
}


}




export default FormsPage;
