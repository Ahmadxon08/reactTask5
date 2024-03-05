/* eslint-disable react/prop-types */
import { Component } from "react";
import "./PersonList.scss";

class PersonList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addPerson = (newPerson) => {
    this.setState((prevState) => ({
      people: [
        ...prevState.people,
        { ...newPerson, id: prevState.people.length + 1 },
      ],
    }));
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th className="id">#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.people.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.phone}</td>
                <td>{person.gender}</td>
                <td>
                  <button
                    className="btn1"
                    onClick={() => this.props.handleEdit(person)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn2 "
                    onClick={() => this.props.handleDelete(person.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PersonList;
