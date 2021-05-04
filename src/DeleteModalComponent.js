import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function DeleteModalComponent(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You sure you want to delete ?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              if (props.val) {
                props.deletedata(props.rollnumber);
              } else {
                props.deletedata();
              }
              handleClose();
            }}
          >
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModalComponent;
