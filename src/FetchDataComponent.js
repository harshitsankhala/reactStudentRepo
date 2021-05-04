import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";
import { Form } from "react-bootstrap";
import NewComp from "./NewComp";
import DeleteModalComponent from "./DeleteModalComponent";
import ModifyComponent from "./ModifyComponent";

function FetchDataComponent() {
  const [data, setData] = useState([]);
  let [checkData, setCheckData] = useState([]);

  let removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
      if (
        arr[i] &&
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };
  async function fetchData() {
    // You can await here
    const result = await NewComp.getData();

    console.log("Hey its me", result);
    console.log("not me", result.data);
    setData(result.data);

    // ...
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function handleDeleteClick(id) {
    const response = await NewComp.deleteData(id);
    fetchData();
  }

  async function handleMultipleDeleteClick() {
    const response = await NewComp.deleteMultipleData(checkData);
    fetchData();
  }
  function handleCheckboxChange(e, arr) {
    console.log("event targe=", e.target.checked);
    if (e.target.checked) {
      let temp = checkData;
      temp.push(arr);
      setCheckData(temp);
    } else {
      removeByAttr(checkData, "rollNumber", arr.rollNumber);
    }

    console.log("Hey it's data", checkData);
    // console.log("Hey its me the simple object=", arr);
    // console.log("its change checkbox =", e);
  }

  const details = data.map((arr) => (
    <tr key={arr.rollNumber}>
      <td>
        <Form.Check
          aria-label="option 1"
          onChange={(e) => {
            handleCheckboxChange(e, arr);
          }}
        />
      </td>
      <td>{arr.rollNumber}</td>
      <td>{arr.firstName}</td>
      <td>{arr.lastName}</td>
      <td>{arr.studentClass}</td>
      <td>{arr.studentSection}</td>
      <td>{arr.dateOfBirth}</td>
      <td>{arr.createdBy}</td>
      <td>{arr.modifiedBy}</td>
      <td>{arr.createdDate}</td>
      <td>{arr.modifiedDate}</td>
      <td>
        {/* <Button variant="warning">Modify</Button>{" "} */}
        {/* <ModalApp /> */}
        <ModifyComponent fetchdata={fetchData} data={arr} />
        <DeleteModalComponent
          deletedata={handleDeleteClick}
          rollnumber={arr.rollNumber}
          val={true}
        />
        {/* <Button
          variant="danger"
          onClick={() => {
            handleDeleteClick(arr.rollNumber);
          }}
        >
          Delete
        </Button>{" "} */}
      </td>
    </tr>
  ));
  return (
    <>
      <TableComponent data={details} fetchdata={fetchData} />
      <DeleteModalComponent
        deletedata={handleMultipleDeleteClick}
        val={false}
      />
      {/* <Button variant="danger" onClick={handleMultipleDeleteClick}>
        Delete
      </Button>{" "} */}
    </>
  );
}

export default FetchDataComponent;
