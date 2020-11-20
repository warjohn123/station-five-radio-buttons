import React from "react";
import { apiResult } from "./api-result";
import styles from "../form.module.scss";
import { Col, Row } from "antd";

function FormComponent() {
  const submit = () => {
    console.log("test");
  };
  console.log("api result", apiResult);
  return (
    <>
      <form onSubmit={submit}>
        {apiResult.menus.map((group, index) => (
          <div key={index} className={styles.GroupContainer}>
            {group.map((menu) => {
              return (
                <div key={menu.id} className={styles.RadioContainer}>
                  <input
                    type="radio"
                    name={index.toString()}
                    id={menu.id}
                    value={menu.value}
                  ></input>
                  <label style={{ marginLeft: 8 }}>{menu.value}</label>
                </div>
              );
            })}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormComponent;
