import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";
import NewComp from "./NewComp";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function DynamicFromApp(props) {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Number of tickets is required"),
    // tickets: Yup.array().of(
    //   Yup.object().shape({
    //     name: Yup.string().required("Name is required"),
    //     email: Yup.string()
    //       .email("Email is Invalid")
    //       .required("Email is required"),
    //   })
    // ),
  });

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
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [inputList, setInputList] = useState(() => {
    // let date = data.dateOfBirth.split("-");
    // let newDate = `${date[2]}-${date[1]}-${date[0]}`;
    // data.dateOfBirth = newDate;

    let newDate = dateValue();
    // data.createdDate = newDate;
    // data.modifiedDate = newDate;
    // data.createdBy = `System`;
    // data.modifiedBy = `System`;

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

  //   async function fetchData() {
  //     // You can await here
  //     const result = await NewComp.getData();

  //     console.log("Hey its me", result);
  //     console.log("not me", result.data);
  //     setData(result.data);

  //     // ...
  //   }

  const handleInputChange = (e, index) => {
    let { name, value } = e.target;

    const newName = name.substring(0, name.length - 1);
    console.log(
      "Hey it's e. targe = ",
      e.target.value,
      "======",
      name.length,
      "&&&&&&&&&&&&&&&&&",
      newName
    );

    if (newName.localeCompare("dateOfBirth") === 0) {
      const date = value.split("-");
      const newDate = `${date[2]}-${date[1]}-${date[0]}`;
      value = newDate;
    }
    const list = [...inputList];
    list[index][newName] = value;
    setInputList(list);

    // const temp = inputList.map((x) => {
    //   // console.log("Hey its dynamic form component=", x);

    //   //  console.log("hey its dynamic date= ", date);

    //   //  console.log("hey its dynamic date after change = ", newDate);
    //   x.dateOfBirth = newDate;
    // });
    console.log("Hey its whole list =", inputList);

    //setInputList(temp);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = (i) => {
    // let newDate = `${date[2]}-${date[1]}-${date[0]}`;
    // data.dateOfBirth = newDate;

    // let date = new Date();
    // let mm = date.getMonth() + 1;
    // let dd = date.getDate();
    // if (dd < 10) {
    //   dd = "0" + dd;
    // }

    // if (mm < 10) {
    //   mm = "0" + mm;
    // }
    // let newDate = `${dd}-${mm}-${date.getFullYear()}`;
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
    // let date = data.dateOfBirth.split("-");
    // let newDate = `${date[2]}-${date[1]}-${date[0]}`;
    // data.dateOfBirth = newDate;

    // date = new Date();
    // let mm = date.getMonth() + 1;
    // let dd = date.getDate();
    // if (dd < 10) {
    //   dd = "0" + dd;
    // }

    // if (mm < 10) {
    //   mm = "0" + mm;
    // }
    // newDate = `${dd}-${mm}-${date.getFullYear()}`;
    // data.createdDate = newDate;
    // data.modifiedDate = newDate;
    // data.createdBy = `System`;
    // data.modifiedBy = `System`;
    // console.log(data);
    // console.log(date, "Hei  new date", newDate);

    async function save() {
      const temp = await NewComp.saveMultipleData(inputList);
      props.fetchdata();
    }
    save();
  };

  // console.log(watch("firstName")); // watch input value by passing the name of it
  return (
    <Form validated>
      {inputList.map((x, i) => {
        return (
          <Fragment key={i}>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <Form.Group controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="Enter Your First Name"
                required
                {...register("firstName" + i)}
                onChange={(e) => handleInputChange(e, i)}
              />
              <Form.Control.Feedback type="invalid">
                {console.log("Hey its error", errors.firstName?.[i].message)}
                {errors.firstName?.[i].message}
              </Form.Control.Feedback>
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

            {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}

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
