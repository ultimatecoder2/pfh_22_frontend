import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Alert, Form } from "react-bootstrap";
import FileDrop from "./FileDrop";
import { AiFillWarning } from "react-icons/ai";
import CodeBlockComp from "./utils/CodeBlockComp";
import { VscJson, VscGear } from "react-icons/vsc";
import { accessURL } from "../apis/backend_api";
import styles from "../assets/css/code_generator_page.css";

var data = {};
const jsonData = {
  text: "sample",
  sample: "text",
};

data.data = jsonData;
data.language = "json";

const CodeGeneratorPage = () => {
  const [fileName, setFileName] = useState();
  const [csvFile, setCsvFile] = useState();
  const [jsonFile, setJsonFile] = useState();
  const [jsonFileData, setJsonFileData] = useState();
  const [inputError, setInputError] = useState(false);

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleGenerate = () => {
    setInputError(false);
    if (fileName && fileName !== "" && csvFile && jsonFile) {
      const tempFile = new File([csvFile], fileName, {
        type: csvFile.type,
        lastModified: csvFile.lastModified,
      });

      // backend api
      // send tempFile

      let formData = new FormData();
      console.log("************************");
      console.log(csvFile);
      // formData.append('csv_file', csvFile);

      const reader = new FileReader(jsonFile);

      reader.onload = (evt) => {
        console.log(typeof evt.target.result);
        // view on page
        setJsonFileData(JSON.parse(evt.target.result));

        // send to backend
      };

      console.log("************************");
      console.log(formData);

      let token =
        "Token e7419dbda6e40062ea71bcb24d73cf2a63e873b57bc0e9c3f93f5bfcde1d1a1f";
      fetch(accessURL + "main/generator", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
          "Access-Control-Allow-Origin": "*",
        },
        mode: "same-origin",
      })
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            throw error;
          }
        )
        .then((response) => response.json())
        .then((response) => {
          // dispatch(addRawSighting(response));
          console.log(response);
        })
        .catch((error) => {
          console.log("post sightings", error.message);
        });
    } else {
      setInputError(true);
    }
  };

  return (
    <>
      <div className="code_generator">
        <h2 className="section_heading red_orange_gradient main_heading">Code Generator</h2>
        <Container className="code_generator__container_input">
          <Row>
            <Col lg="5" className="form_content_div">
              <FileDrop
                accepted_file_type="text/csv"
                setCurrentFile={setCsvFile}
                currentFile={csvFile}
                setFileName={setFileName}
              />
              <FileDrop
                accepted_file_type="application/json"
                setCurrentFile={setJsonFile}
                currentFile={csvFile}
                setFileName={setFileName}
              />
              <Form.Label className="file_form__label">
                Enter a Mapping Name
              </Form.Label>
              <Form.Control
                placeholder="Mapping Name"
                aria-label="Mapping Name"
                value={fileName}
                onChange={handleFileNameChange}
              />
            </Col>
            <Col lg="2">
            </Col>
            <Col lg="5" className="form_content_div">
              <div class="container">
                <div className="row">
                  <div className="col align-self-center" xs={12} md={8}>
                    <span className="form__icon">
                      <VscJson />
                    </span>
                    <span className="label__important">*</span> Generated Code
                    <div className="code_block">
                      <CodeBlockComp data={data} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="code_generator__generate-btn">
          <Col>
            <Button className="large_btn orange_red_gradiend_btn" onClick={handleGenerate}>
              <VscGear /> Generate
            </Button>
          </Col>
        </Row>
        {inputError && (
          <Row className="code_generator__generate-btn">
            <Col>
              <Alert variant={"warning"}>
                <AiFillWarning /> Please Enter Valid Input.
              </Alert>
            </Col>
          </Row>
        )}
        <hr />
      </div>
    </>
  );
};

export default CodeGeneratorPage;
