import React, { Component } from 'react';
import { Button,Navbar,Nav,Form,FormControl,Table } from 'react-bootstrap';
import logo from './logo.svg';
class Student extends Component{

    render()
    {
        const arr = [
            {
                rollNumber : '1',
                firstName : 'Harshit',
                lastName : 'Sankhala',
                standard : 'II',
                section : 'A',
                firstName : 'Harshit',
                dob : '12-04-1999',
                createdBy : 'System',
                modifiedBy : 'No one',
                createdDate : '12-04-2021',
                modeifedDate : '12-04-2021',
            },
            {
               rollNumber : '2',
               firstName : 'Harshit',
               lastName : 'Sankhala',
               standard : 'II',
               section : 'A',
               firstName : 'Harshit',
               dob : '12-04-1999',
               createdBy : 'System',
               modifiedBy : 'No one',
               createdDate : '12-04-2021',
               modeifedDate : '12-04-2021',
           },
           {
               rollNumber : '3',
               firstName : 'Harshit',
               lastName : 'Sankhala',
               standard : 'II',
               section : 'A',
               firstName : 'Harshit',
               dob : '12-04-1999',
               createdBy : 'System',
               modifiedBy : 'No one',
               createdDate : '12-04-2021',
               modeifedDate : '12-04-2021',
           }
        ]
        const details = arr.map(arr =>(
        <tr key={arr.rollNumber}>
        <td><Form.Check aria-label="option 1" /></td>
        <td>{arr.rollNumber}</td>
        <td>{arr.firstName}</td>
        <td>{arr.lastName}</td>
        <td>{arr.standard}</td>
        <td>{arr.section}</td>
        <td>{arr.dob}</td>
        <td>{arr.createdBy}</td>
        <td>{arr.modifiedBy}</td>
        <td>{arr.createdDate}</td>
        <td>{arr.modeifedDate}</td>
        <td>
        <Button variant="warning">Modify</Button>{' '}
        <Button variant="danger">Delete</Button>{' '}
        </td>
        </tr>
       
        
        ))
        return(
            <>
                 <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"> 
                <img
                src={logo}
                width="30"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"/></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
                </Navbar>

    <Table responsive striped bordered hover variant="dark">
  <thead>
    <tr>
        <th>#</th>
      <th>Roll Number</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Class</th>
      <th>Section</th>
      <th>Date Of Birth</th>
      <th>Created By</th>
      <th>Modified By</th>
      <th>Created Date</th>
      <th>Modified Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {details}
  </tbody>
</Table>
<Button variant="primary">Add New Student</Button>
</>
        )
    }
}

export default Student;