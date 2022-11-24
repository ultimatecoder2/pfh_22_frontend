import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Alert, Form } from "react-bootstrap";
import FileDrop from "./FileDrop";
import { AiFillWarning } from "react-icons/ai";

import styles from "../assets/css/code_generator_page.css";

const prop_data = {
  data: {
    text: "sd",
    js: "sdf",
  },
  language: "json",
};

const CodeGeneratorPage = () => {
  const [fileName, setFileName] = useState();
  const [csvFile, setCsvFile] = useState();
  const [inputError, setInputError] = useState(false);

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleGenerate = () => {
    setInputError(false);
    if (fileName && fileName !== "" && csvFile) {
      const tempFile = new File([csvFile], fileName, {
        type: csvFile.type,
        lastModified: csvFile.lastModified,
      });

      // backend api
      // send tempFile
    } else {
      setInputError(true);
    }
  };

  return (
    <div className="code_generator">
      <h2>Code Generator</h2>
      <Container className="code_generator__container_input">
        <Row>
          <Col lg="12">
            <FileDrop
              accepted_file_type="text/csv"
              setCurrentFile={setCsvFile}
              currentFile={csvFile}
              setFileName={setFileName}
            />
          </Col>
          <Col lg="12">
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
        </Row>
      </Container>
      <Row className="code_generator__generate-btn">
        <Col>
          <Button onClick={handleGenerate} variant="dark">
            Generate
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
  );
};

export default CodeGeneratorPage;
