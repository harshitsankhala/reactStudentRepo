import React from "react";
import { Table } from "react-bootstrap";
import ModalApp from "./FormModalComponent";
import "./table.css";

function TableComponent(props) {
  return (
    <>
      <Table responsive striped bordered hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Roll Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Date Of Birth</th>
            <th>Created By</th>
            <th>Modified By</th>
            <th>Created Date</th>
            <th>Modified Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{props.data}</tbody>
      </Table>
      <ModalApp fetchData={props.fetchdata} />
    </>
  );
}

export default TableComponent;
