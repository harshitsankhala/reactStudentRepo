import React from "react";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

function ModalApp(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} val={false}>
        Add New Student
      </Button>{" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        fetchdata={props.fetchdata}
      />
    </>
  );
}

export default ModalApp;
