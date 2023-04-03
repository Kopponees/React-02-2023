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

  const addEmployee = () => {
    if (first_nameRef.current.value === "") {
      setMessage("A employee with an empty first name cannot be added!");
      return;
    }
    if (last_nameRef.current.value === "") {
      setMessage("A employee with an empty last name cannot be added!");
      return;
    }
    if (idRef.current.value === "") {
      setMessage("A employee with an empty id cannot be added!");
      return;
    }
    if (emailRef.current.value === "") {
      setMessage("A employee with an empty email cannot be added!");
      return;
    }
    if (!emailRef.current.value.includes("@")) {
      setMessage("The email should include '@'!");
      return;
    }
    setEmployees((employees) => {
      return [
        ...employees,
        {
          "id": Number(idRef.current.value),
          "first_name": first_nameRef.current.value,
          "last_name": last_nameRef.current.value,
          "email": emailRef.current.value,
          "avatar": avatarRef.current.value,
        },
      ];
    });
    first_nameRef.current.value = "";
    last_nameRef.current.value = "";
    emailRef.current.value = "";
    avatarRef.current.value = "";
  // TODO: Add validations
  // TODO: Add an employee to the table
}

const deleteEmployee = (index) => {
  const updatedEmployees = [...employees];
  updatedEmployees.splice(index, 1);
  setEmployees(updatedEmployees);
}

// TODO: Delete an employee from the table


return (<div>
  {message}
  <div className="container">
    <h2 className="mb-4">Employees</h2>
    <Table className="table table-hover table-bordered table-sortable">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">
            <div >First Name</div>
            <div>Last Name</div>
          </th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.id}</td>
            <td>{employee.first_name} {employee.last_name}</td>
            <td>{employee.email}</td>
            <td><img src={employee.avatar} alt="avatar" className="avatar-img" /></td>
            <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
          </tr>
        ))}
        <tr className="input-row">
          <td><input type="number" ref={idRef} placeholder="ID" className="form-control" /></td>
          <td><input type="text" ref={first_nameRef} placeholder="First Name" className="form-control" />
            <input type="text" ref={last_nameRef} placeholder="Last Name" className="form-control" /></td>
          <td><input type="text" ref={emailRef} placeholder="Email" className="form-control" /></td>
          <td><input type="text" ref={avatarRef} placeholder="Avatar" className="form-control" /></td>
          <td><Button type="submit" variant="success" onClick={() => addEmployee()}>Add</Button></td>
        </tr>
      </tbody>
    </Table>
  </div>

</div>)
}

export default Employees;