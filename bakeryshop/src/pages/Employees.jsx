import { useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import employeesFile from '../data/employees.json'

function Employees() {
  const [employees, setEmployees] = useState(employeesFile);
  const [message, setMessage] = useState("")
  const idRef = useRef();
  const emailRef = useRef();
  const first_nameRef = useRef();
  const last_nameRef = useRef();
  const avatarRef = useRef();


  // TODO: Load data from backend service

  // const addEmployee = () => {
  //   if (first_nameRef.current.value === "") {
  //     setMessage("Can't add empty text!");
  //   } else { 
  //     setMessage("Employee added! " + first_nameRef.current.value);
  //     employees.push({
  //       "id":idRef.current.value,
  //       "name":(first_nameRef.current.value + last_nameRef.current.value),
  //       "email":emailRef.current.value,
  //       "avatar":avatarRef.current.value,
  //     });
  //     first_nameRef.current.value = "";
  //   }
  const addEmployee = () => {
    if (first_nameRef.current.value === "") {
      setMessage("Can't add empty text!");
    } else { 
      setMessage("Employee added! " + first_nameRef.current.value);
      const newEmployee = {
        "id": idRef.current.value,
        "name": first_nameRef.current.value + last_nameRef.current.value,
        "email": emailRef.current.value,
        "avatar": avatarRef.current.value
      };
      setEmployees([...employees, newEmployee]);
      first_nameRef.current.value = "";
    }
    }
    // TODO: Add validations
    // TODO: Add an employee to the table
 

  const deleteEmployee = (index) => {
    // TODO: Delete an employee from the table
  }

  return (<div>
    {message}
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
          <tr>
            <th ref={idRef} scope="col">ID</th>
            <th scope="col">
              <div ref={first_nameRef}>First Name</div>
              <div ref={last_nameRef}>Last Name</div>
            </th>
            <th ref={emailRef} scope="col">Email</th>
            <th ref={avatarRef} scope="col">Avatar</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.first_name} {employee.last_name}</td>
              <td>{employee.email}</td>
              <td><img src={employee.avatar} alt="avatar" /></td>
              <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
            </tr>
          ))}
          <tr className="input-row">
            <td><input type="text" placeholder="ID" className="form-control" /></td>
            <td><input type="text" placeholder="Name" className="form-control"/></td>
            <td><input type="text" placeholder="Email" className="form-control"/></td>
            <td><input type="text" placeholder="Avatar" className="form-control" /></td>
            <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>

  </div>)
}

export default Employees;