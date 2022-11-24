import React, {Component} from 'react';
import {Container, Row, Col, Image, Form} from 'react-bootstrap';
import Select from 'react-select'
import {Link} from 'react-router-dom';
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import {BsGearFill} from 'react-icons/bs';
import {VscJson} from 'react-icons/vsc';
import FileDrop from './FileDrop';
import '../assets/css/code_executor.css';

const options = [
    { value: 'SBI_ADHAR_1', label: 'SBI_ADHAR_1' },
    { value: 'PNB_INCOME_1', label: 'PNB_INCOME_1' },
    { value: 'ICICI_BIRTH_2', label: 'ICICI_BIRTH_2' },
  ];

class CodeExecutor extends Component {

    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:"",
            selectedMapping: "",
            inputFile: null,
            errors:{
                email:"",
                password:"",
                selectedMapping:"",
                inputFile:""
            }
        }
    }

    componentDidMount(){

    }

    handleInputChange=(event)=>{
        const target = event.target;
        const name = target.name;
        this.setState({
          [name]: event.target.value
        });
    }
    validateForm = (data)=>{
        const {email, password, selectedMapping} = data;
        let emailError="",passwordError="", selectedMappingError="", error=false;

        if(!selectedMapping){
            selectedMappingError = "Choose a Mapping Type";
            error = true;
        }
        else if(!email){
            emailError = "Email is required";
            error = true;            
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
        {
            emailError = "Email address is Invalid";
            error= true;
        }
        if(!password.trim())
        {
            passwordError="Password is required"
            error= true;
        }
        else if(password.length<6)
        {
            passwordError="Password must be 6 or more characters long"
            error= true;
        }
        
        this.setState(prevState => ({
            errors:{
                email:emailError,
                password: passwordError,
                selectedMapping: selectedMappingError
            }
        }))
        
        return !error;
    }

    handleChange = (selectedMapping) => {
        this.setState({ selectedMapping }, () =>
          console.log(`Option selected:`, this.state.selectedMapping)
        );
    };

    setInputFile = (inputFile) => {
        this.setState({
            inputFile
        })
        console.log(inputFile)
    }

    handleSubmit = async(event)=> {
        event.preventDefault();
        const isValid = this.validateForm(this.state);
        if(isValid){
            const {email,password} = this.state;
        }
    }

    render(){
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section_heading red_orange_gradient main_heading">Code Executor</h3>
                    </div>
                </div>
                <div className='row'>
                    <Col xs={11} md={4} className="form_content_div login_form_div">
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="form_field_div">
                                <Form.Label><span className="form__icon"><AiOutlineUnorderedList/></span><span className="label__important">*</span> Choose Mapping</Form.Label>
                                <Select
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                                <div className="invalid__feedback">{this.state.errors.selectedMapping}</div>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="form_field_div">
                                <Form.Label><span className="form__icon"><VscJson/></span><span className="label__important">*</span> Input JSON File</Form.Label>
                                <FileDrop 
                                    accepted_file_type="application/json"
                                    setCurrentFile={this.setInputFile}
                                    currentFile={this.state.inputFile}
                                    
                                /> 
                                {/* <input name="password" className="form-control" type="password" value={this.state.password} placeholder="Password must be at least 6 characters" onChange={this.handleInputChange} /> */}
                            </Form.Group>
                            <div className="form__btn">
                                <button className="large_btn orange_red_gradiend_btn" type="submit" onClick={this.handleSubmit}>
                                    <BsGearFill /> Execute
                                </button>
                            </div>
                        </Form>
                    </Col>
                    <Col xs={11} md={3} className="form_content_div login_form_div">
                        <span className="form__icon"><VscJson/></span><span className="label__important">*</span> Input JSON
                    </Col>
                    <Col xs={11} md={3} className="form_content_div login_form_div">
                        <span className="form__icon"><VscJson/></span><span className="label__important">*</span> Converted JSON
                    </Col>
                </div>
            </div>
        )
    }
}

export default CodeExecutor;