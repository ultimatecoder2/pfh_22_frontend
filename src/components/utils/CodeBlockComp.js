import React,{Component} from 'react';
// import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CopyBlock, dracula } from "react-code-blocks";
import {Button} from 'react-bootstrap';
import '../../assets/css/code_block.css'
import {AiOutlineCopy} from 'react-icons/ai'

let handleJsonFormat = (data) =>{
    return(
    <>
        <div>
            <JSONPretty data = {data.data}
                theme = {JSONPrettyMon}
            />
        </div>

            <CopyToClipboard text = {JSON.stringify(data.data)}>
                <div className="form__btn">
                    <button className="large_btn orange_red_gradiend_btn">
                        <span className='code_block_icon'><AiOutlineCopy/></span>Copy              
                    </button>
                </div>
        </CopyToClipboard>
    </>
    )
}

let handleXMLFormat = (data) => {
    return(
        <>
        {/* <CopyBlock
            text = {JSON.stringify(props.data.data)}
            theme={dracula}
            showLineNumbers={true}
            codeBlock
        /> */}
        </>
    )
}

const CodeBlockComp = (props) => (
    <>

    <div className="new_component code_block_component">
        
        {(props.data.language=="json")?handleJsonFormat(props.data):handleXMLFormat(props.data)}
    </div>
    </>
  );

export default CodeBlockComp;