import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import Select from 'react-select'
import { Link } from 'react-router-dom';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsGearFill } from 'react-icons/bs';
import { VscJson } from 'react-icons/vsc';
import FileDrop from './FileDrop';
import CodeBlockComp from './utils/CodeBlockComp';
import '../assets/css/code_executor.css';
import { toast } from "react-toastify";
import {codeExecuterAPI} from '../actions/index';

const options = [
    { value: 'SBI_ADHAR_1', label: 'SBI_ADHAR_1' },
    { value: 'PNB_INCOME_1', label: 'PNB_INCOME_1' },
    { value: 'ICICI_BIRTH_2', label: 'ICICI_BIRTH_2' },
];

var data = {};
const jsonData = {
    text: "sd",
    js: "sdf"
}

data.data = jsonData;
data.language = "json"

class CodeExecutor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedMapping: "",
            inputFile: null,
            inputFileJson: null,
            outputData:"",
            errors: {
                selectedMapping: "",
                inputFile: ""
            }
        }
    }

    componentDidMount() {

    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    validateForm = (data) => {
        const { selectedMapping, inputFile } = data;
        let selectedMappingError = "", inputFileError = "", error = false;

        if (!selectedMapping) {
            selectedMappingError = "Choose a Mapping Type";
            error = true;
        }
        else if (!inputFile) {
            inputFileError = "Choose an Input File";
            error = true;
        }

        this.setState(prevState => ({
            errors: {
                selectedMapping: selectedMappingError,
                inputFile: inputFileError
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

    handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = this.validateForm(this.state);

        const reader = new FileReader(this.state.inputFile);
        reader.onload = async(evt) => {

            this.setState({
                inputFileJson: {
                    data: JSON.parse(evt.target.result),
                    language: "json"
                }
            }, async() => {
                // send to backend
                const data = {
                    mapping_id:this.state.selectedMapping.value,
                    source_json:this.state.inputFileJson.data,
                    token:this.props.auth.token
                }
                await this.props.codeExecuterAPI(data);
                if(this.props.codeExecuterData.message){
                    toast.success("Code generated successfully.")
                    this.setState({
                        outputData:{
                            data,
                            language:"json"
                        }
                    })
                }else if(this.props.codeExecuteData.error){
                    toast.error("Failed to execute code");
                }
            });


        };
        if (this.state.inputFile) {
            reader.readAsText(this.state.inputFile);
        }
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section_heading red_orange_gradient main_heading">Code Executor</h3>
                    </div>
                </div>
                <div className='row main_content'>
                    <Col xs={11} md={4} className="form_content_div login_form_div">
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="form_field_div">
                                <Form.Label><span className="form__icon"><AiOutlineUnorderedList /></span><span className="label__important">*</span> Choose Mapping</Form.Label>
                                <Select
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                                <div className="invalid__feedback">{this.state.errors.selectedMapping}</div>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="form_field_div">
                                <Form.Label><span className="form__icon"><VscJson /></span><span className="label__important">*</span> Input JSON File</Form.Label>
                                <FileDrop
                                    accepted_file_type="application/json"
                                    setCurrentFile={this.setInputFile}
                                    currentFile={this.state.inputFile}
                                    setFileName

                                />
                                <div className="invalid__feedback">{this.state.errors.inputFile}</div>
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
                        <span className="form__icon"><VscJson /></span><span className="label__important">*</span> Input JSON
                        <div className='code_block'>
                            <CodeBlockComp data={this.state.inputFileJson ? this.state.inputFileJson : data} />
                        </div>
                    </Col>
                    <Col xs={11} md={3} className="form_content_div login_form_div">
                        <span className="form__icon"><VscJson /></span><span className="label__important">*</span> Converted JSON
                        <div className='code_block'>
                            {this.state.outputData? <CodeBlockComp data={this.state.outputData}/> : <CodeBlockComp data={data} />}
                        </div>
                    </Col>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    return({
        ...ownProps,
        auth:state.auth,
        codeExecuterData: state.codeExecutor
    })
  
  }

export default connect(mapStateToProps, {codeExecuterAPI})(CodeExecutor);