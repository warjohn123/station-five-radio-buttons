import React, { useState } from "react";
import { apiResult } from "./api-result";
import styles from "../form.module.scss";
import { Col, Row } from "antd";

function FormComponent() {
  const [menuState, setMenuState] = useState<any>({});

  const submit = () => {
    console.log("test");
  };

  const changeValue = (index: number, id: string) => {
    if (index == 0) {
      setMenuState({
        [index]: id,
      });
    } else {
      setMenuState({
        ...menuState,
        [index]: id,
      });
    }
  };

  const checkDisabled = (index: number, id: string): boolean => {
    if (index == 0) {
      return false;
    }

    console.log("test", apiResult.rules[menuState[index - 1]]);
    console.log("id", id);

    if (
      apiResult.rules[menuState[index - 1]] &&
      apiResult.rules[menuState[index - 1]].length
    ) {
      if (apiResult.rules[menuState[index - 1]].includes(parseInt(id))) {
        console.log("im disabled");
        return true;
      } else {
        console.log("im enabled");
        return false;
      }
    } else {
      return true;
    }
    //   if()
  };

  console.log("menu state", menuState);
  return (
    <>
      <form onSubmit={submit}>
        {apiResult.menus.map((group: any, index: any) => (
          <div key={index} className={styles.GroupContainer}>
            {group.map((menu: any) => {
              return (
                <div key={menu.id} className={styles.RadioContainer}>
                  <input
                    type="radio"
                    disabled={checkDisabled(index, menu.id)}
                    onChange={() => changeValue(index, menu.id)}
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

        <button type="submit" disabled={!menuState[2]}>
          Submit
        </button>
      </form>
    </>
  );
}

export default FormComponent;
