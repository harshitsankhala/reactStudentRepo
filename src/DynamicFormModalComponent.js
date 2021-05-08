import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";
import NewComp from "./NewComp";

function DynamicFromApp(props) {
  const dateValue = () => {
    let date = new Date();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    return `${dd}-${mm}-${date.getFullYear()}`;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [inputList, setInputList] = useState(() => {
    let newDate = dateValue();

    return [
      {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        studentClass: "LKG",
        studentSection: "a",
        createdDate: newDate,
        modifiedDate: newDate,
        createdBy: `System`,
        modifiedBy: `System`,
      },
    ];
  });

  const handleInputChange = (e, index) => {
    let { name, value } = e.target;

    const newName = name.substring(0, name.length - 1);

    if (newName.localeCompare("dateOfBirth") === 0) {
      const date = value.split("-");
      const newDate = `${date[2]}-${date[1]}-${date[0]}`;
      value = newDate;
    }
    const list = [...inputList];
    list[index][newName] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = (i) => {
    let newDate = dateValue();

    setInputList([
      ...inputList,
      {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        studentClass: "LKG",
        studentSection: "a",
        createdDate: newDate,
        modifiedDate: newDate,
        createdBy: `System`,
        modifiedBy: `System`,
      },
    ]);
  };
  const onSubmitFunction = () => {
    async function save() {
      const temp = await NewComp.saveMultipleData(inputList);
      props.fetchdata();
    }
    save();
  };

  return (
    <Form validated>
      {inputList.map((x, i) => {
        return (
          <Fragment key={i}>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="Enter Your First Name"
                required
                {...register("firstName" + i)}
                onChange={(e) => handleInputChange(e, i)}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Enter Your Last Name"
                required
                {...register("lastName" + i, { required: true })}
                onChange={(e) => handleInputChange(e, i)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Last Name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridDateOfBirth">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control
                  type="date"
                  required
                  {...register("dateOfBirth" + i, { required: true })}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <Form.Control.Feedback type="invalid">
                  Please select date for your Date Of Birth
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStudentClass">
                <Form.Label>Class</Form.Label>
                <Form.Control
                  as="select"
                  required
                  {...register("studentClass" + i, { required: true })}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option value="LKG">LKG</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a option
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStudentSection">
                <Form.Label>Section</Form.Label>
                <Form.Control
                  as="select"
                  required
                  {...register("studentSection" + i, { required: true })}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                  <option value="d">d</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a option
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <>
              {inputList.length !== 1 && (
                <Button variant="danger" onClick={() => handleRemoveClick(i)}>
                  Remove
                </Button>
              )}{" "}
              {inputList.length - 1 === i && (
                <Button onClick={() => handleAddClick(i)}>Add</Button>
              )}
            </>
          </Fragment>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}{" "}
      <Button variant="primary" type="submit" onClick={onSubmitFunction}>
        Submit All
      </Button>
    </Form>
  );
}

export default DynamicFromApp;
