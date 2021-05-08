// import React, { useState, useEffect } from "react";
// import NewComp from "./NewComp";
// import { Button, Form, Table } from "react-bootstrap";
// import HeaderComponent from "./HeaderComponent";

// function FunComp() {
//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const result = await NewComp.getData();
//       console.log(result);
//       console.log(result.data);
//       setdata(result.data);
//     }
//     fetchData();
//   }, []);

//   //  const details =
//   return (
//     <>
//       <HeaderComponent />
//       <Table responsive striped bordered hover variant="dark">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Roll Number</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Class</th>
//             <th>Section</th>
//             <th>Date Of Birth</th>
//             <th>Created By</th>
//             <th>Modified By</th>
//             <th>Created Date</th>
//             <th>Modified Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((arr) => (
//             <tr key={arr.rollNumber}>
//               <td>
//                 <Form.Check aria-label="option 1" />
//               </td>
//               <td>{arr.rollNumber}</td>
//               <td>{arr.firstName}</td>
//               <td>{arr.lastName}</td>
//               <td>{arr.studentClass}</td>
//               <td>{arr.studentSection}</td>
//               <td>{arr.dateOfBirth}</td>
//               <td>{arr.createdBy}</td>
//               <td>{arr.modifiedBy}</td>
//               <td>{arr.createdDate}</td>
//               <td>{arr.modifiedDate}</td>
//               <td>
//                 <Button variant="warning">Modify</Button>{" "}
//                 <Button variant="danger">Delete</Button>{" "}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Button variant="primary">Add New Student</Button>
//     </>
//   );
// }

// export default FunComp;
