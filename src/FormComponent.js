import React from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";
import NewComp from "./NewComp";

function FromApp(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //   async function fetchData() {
  //     // You can await here
  //     const result = await NewComp.getData();

  //     console.log("Hey its me", result);
  //     console.log("not me", result.data);
  //     setData(result.data);

  //     // ...
  //   }

  const onSubmit = (data) => {
    let date = data.dateOfBirth.split("-");
    let newDate = `${date[2]}-${date[1]}-${date[0]}`;
    data.dateOfBirth = newDate;

    date = new Date();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    newDate = `${dd}-${mm}-${date.getFullYear()}`;
    data.createdDate = props.data.createdDate;
    data.modifiedDate = newDate;
    data.createdBy = `System`;
    data.modifiedBy = `System`;
    console.log(data);
    console.log(date, "Hei  new date", newDate);

    async function save() {
      const temp = await NewComp.updateData(data);
      props.fetchdata();
    }
    save();
  };

  console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <Form validated onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formGridRollNumber">
        <Form.Label>Roll Number</Form.Label>
        <Form.Control
          required
          defaultValue={props.data.rollNumber}
          readOnly
          {...register("rollNumber")}
        />
      </Form.Group>
      <Form.Group controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          placeholder="Enter Your First Name"
          required
          defaultValue={props.data.firstName}
          {...register("firstName")}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your First Name
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          placeholder="Enter Your Last Name"
          required
          defaultValue={props.data.lastName}
          {...register("lastName", { required: true })}
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
            defaultValue={props.data.dateOfBirth}
            {...register("dateOfBirth", { required: true })}
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
            defaultValue={props.data.studentClass}
            {...register("studentClass", { required: true })}
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
            defaultValue={props.data.studentSection}
            {...register("studentSection", { required: true })}
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FromApp;
