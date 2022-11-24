import React,{Component} from 'react';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CodeBlock, dracula, monokai } from "react-code-blocks";
import '../../assets/css/code_block.css'
import {AiOutlineCopy} from 'react-icons/ai'
import {toast} from 'react-toastify';

const data = {
    data: `# Hello world in Python 2
    print "Hello World"
    
    # Hello world in Python 3
    print("Hello World")'`,
    language: "python"

}
let copyHandler = () => {
    toast.success("Copied to Clipboard")
}

let handleJsonFormat = (data) =>{
    return(
    <>
    
        <div className="code_block_div">
            <JSONPretty data = {data.data}
                theme = {JSONPrettyMon}
            />
        </div>
        <div>
            <CopyToClipboard text = {data.data}>
                <div className="form__btn">
                    <button className="large_btn orange_red_gradiend_btn">
                        <span className='code_block_icon'><AiOutlineCopy/></span> Copy          
                    </button>
                </div>
            </CopyToClipboard>
        </div>
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

let handlePythonComponent = (data) => {
    console.log(data);
    return(
        <>
        <div className="code_block_div">
            <CodeBlock
                text = {data.data}
                theme={monokai}
                showLineNumbers={true}
                language="python"
                codeBlock
            />
        </div>
        <div>
            <CopyToClipboard text = {data.data}>
                <div className="form__btn">
                    <button className="large_btn orange_red_gradiend_btn" onClick={copyHandler}>
                        <span className='code_block_icon'><AiOutlineCopy/></span>Copy              
                    </button>
                </div>
            </CopyToClipboard>
        </div>
        </>
    )

}

const CodeBlockComp = (props) => (
    <>
    <div className="new_component code_block_component">
        
        {(props.data.language=="json")?handleJsonFormat(props.data):handlePythonComponent(props.data)}
    </div>
    </>
  );

export default CodeBlockComp;