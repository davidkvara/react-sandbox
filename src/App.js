import React from "react";
import s from "./app.module.css";

export default () => (
  <h1 className={s.title}>
    <span className={s.brckt}>{"<"}</span>
    ReactSandbox <span className={s.brckt}>{"/>"}</span>
  </h1>
);
