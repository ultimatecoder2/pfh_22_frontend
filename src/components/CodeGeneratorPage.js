import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FileDrop from "./FileDrop";

import styles from "../assets/css/code_generator_page.css";

const CodeGeneratorPage = () => {
  const [jsonFile, setJsonFile] = useState();
  const [csvFile, setCsvFile] = useState();

  useEffect(() => {
    console.log(csvFile, jsonFile);
  }, [csvFile, jsonFile]);

  return (
    <div className="code_generator">
      <Container className="code_generator__container">
        <FileDrop
          accepted_file_type="application/json"
          setCurrentFile={setJsonFile}
          currentFile={jsonFile}
        />
        <FileDrop
          accepted_file_type="text/csv"
          setCurrentFile={setCsvFile}
          currentFile={csvFile}
        />
      </Container>
    </div>
  );
};

export default CodeGeneratorPage;
