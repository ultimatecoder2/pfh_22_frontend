import React,{Component} from 'react';
// import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css';
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CopyBlock, dracula } from "react-code-blocks";
import {Button} from 'react-bootstrap';



const CodeBlockComp = (props) => (
    <>

    <div className="new_component">
        <div>
            <JSONPretty data = {props.data.data}
                theme = {JSONPrettyMon}
            />
        </div>
        <Button> Copy to clipboard</Button>

        {/* <CopyBlock
            text = {JSON.stringify(props.data.data)}
            theme={dracula}
            showLineNumbers={true}
            codeBlock
        /> */}
       
  
    </div>
    </>
  );

export default CodeBlockComp;