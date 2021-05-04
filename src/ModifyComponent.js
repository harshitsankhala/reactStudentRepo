import React from "react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { Button } from "react-bootstrap";

function ModifyComponent(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="warning" onClick={() => setModalShow(true)}>
        Modify
      </Button>{" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        fetchdata={props.fetchdata}
        val={true}
        data={props.data}
      />
    </>
  );
}

export default ModifyComponent;
