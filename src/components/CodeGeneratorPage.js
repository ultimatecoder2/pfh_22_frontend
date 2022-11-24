import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import FileDrop from "./FileDrop";
import CodeBlockComp from "./utils/CodeBlockComp";

import styles from "../assets/css/code_generator_page.css";

const prop_data = {
  data: {
    text: "sd",
    js: "sdf",
  },
  language: "json",
};

const CodeGeneratorPage = () => {
  const [jsonFile, setJsonFile] = useState();
  const [csvFile, setCsvFile] = useState();

  useEffect(() => {
    console.log(csvFile, jsonFile);
  }, [csvFile, jsonFile]);

  return (
    <div className="code_generator">
      <h2>Code Generator</h2>
      <Container className="code_generator__container_input">
        <Row>
          <Col lg="6">
            <FileDrop
              accepted_file_type="application/json"
              setCurrentFile={setJsonFile}
              currentFile={jsonFile}
            />
          </Col>
          <Col lg="6">
            <FileDrop
              accepted_file_type="text/csv"
              setCurrentFile={setCsvFile}
              currentFile={csvFile}
            />
          </Col>
        </Row>
      </Container>
      <Row className="code_generator__generate-btn">
        <Col>
          <Button variant="dark">Generate</Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default CodeGeneratorPage;
