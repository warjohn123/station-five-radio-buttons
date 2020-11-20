import React from "react";
import { Card, Row } from "antd";
import styles from "./form.module.scss";
import FormComponent from "./components/form.component";

function FormPage() {
  return (
    <Row justify="center" align="middle" className={styles.FormPage}>
      <div style={{ textAlign: "center" }}>
        <Card className={styles.FormCard} bodyStyle={{ padding: 0 }}>
          <div className={styles.FormContainer}>
            <FormComponent></FormComponent>
          </div>
        </Card>
      </div>
    </Row>
  );
}

export default FormPage;
