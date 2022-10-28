import React from "react";
//import UserTable from "../components/UserTable";
import Datepicker from "./Datepicker";

export default function SearchAtm(props) {
  return (
    <>
      <div>{props.passedId.id}</div>
      <Datepicker />
    </>
  );
}
