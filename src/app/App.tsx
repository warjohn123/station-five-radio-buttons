import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import FormPage from "./pages/radio-button-form/form";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <FormPage></FormPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
