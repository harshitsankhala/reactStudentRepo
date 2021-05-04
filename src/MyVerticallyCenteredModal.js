import React from "react";
import { Modal, Button } from "react-bootstrap";
import FromApp from "./FormComponent";
import DynamicFromApp from "./DynamicFormModalComponent";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.val && <FromApp fetchdata={props.fetchdata} data={props.data} />}
        {!props.val && <DynamicFromApp fetchdata={props.fetchdata} />}
        {/* <NewDynamicForm /> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
