import React from "react";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {
//           // if(val)

//           props.val && <FromApp fetchdata={props.fetchdata} />
//         }
//         {!props.val && <DynamicFromApp fetchdata={props.fetchdata} />}
//         {/* <NewDynamicForm /> */}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

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
