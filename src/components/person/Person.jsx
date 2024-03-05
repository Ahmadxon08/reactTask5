import { Component } from "react";
import "./Person.scss";
import PersonList from "../personList/PersonList";
const close = "./assets/close.png";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedPerson: [],
      search: "",
      isModalOpen: false,
      person: {
        firstName: "",
        lastName: "",
        phone: "",
        gender: "",
      },

      people: [
        {
          id: 1,
          firstName: "Jeck",
          lastName: "Smith",
          phone: "121334",
          gender: "male",
        },
        {
          id: 2,
          firstName: "John",
          lastName: "Doe",
          phone: "123-456-7890",
          gender: "male",
        },
      ],
    };
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleSeachChanged = (e) => {
    const text = e.target.value;
    this.setState({ search: text });
    this.setState({
      searchedPerson: this.state.people.filter(
        (person) =>
          person.firstName
            .toLocaleLowerCase()
            .includes(text.toLocaleLowerCase()) ||
          person.lastName
            .toLocaleLowerCase()
            .includes(text.toLocaleLowerCase()) ||
          person.phone.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      ),
    });
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      person: {
        ...prevState.person,
        id: this.state.people.length + 1,
        [id]: value,
      },
    }));
  };

  handleCancel = () => {
    this.setState({
      person: {
        firstName: "",
        lastName: "",
        phone: "",
        gender: "",
      },
      isModalOpen: false,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const { person } = this.state;
    this.setState({ people: [...this.state.people, person] });
    this.handleCancel();
  };

  handleDelete = (id) => {
    this.setState({ people: this.state.people.filter((el) => el.id !== id) });
  };

  // handleEdit = (person) => {
  //   this.person = person.find((person) => person === person.id);
  //   this.setState({ person: this.person });
  // };

  render() {
    const { isModalOpen, person, search } = this.state;

    return (
      <div>
        <div className="container">
          <div className="func">
            <input
              className="search"
              onChange={this.handleSeachChanged}
              type="search"
              id="search"
              value={search}
              placeholder="Enter whatever you want...."
            />
            <select name="select" id="select">
              <option value="All">All person</option>
              <option value="All">All person</option>
              <option value="All">All person</option>
              <option value="All">All person</option>
            </select>
            <button id="openModal" onClick={this.openModal}>
              Add +
            </button>
          </div>
        </div>
        <PersonList
          people={this.state.people}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <div className="head">
                <h1>Personal information</h1>
                <button onClick={this.closeModal} id="closeModal">
                  <img src={close} alt="close" />
                </button>
              </div>
              <div className="line"></div>
              <form>
                <div className="form-group">
                  <label>FirstName</label>
                  <input
                    type="text"
                    id="firstName"
                    value={person.firstName}
                    onChange={this.handleChange}
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label>LastName</label>
                  <input
                    type="text"
                    value={person.lastName}
                    onChange={this.handleChange}
                    id="lastName"
                    placeholder="Enter Age"
                  />
                </div>
                <div className="form-group">
                  <label>Phone number</label>
                  <input
                    type="number"
                    id="phone"
                    onChange={this.handleChange}
                    value={person.phone}
                    placeholder="Enter number"
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    className="form-control"
                    id="gender"
                    value={person.gender}
                    onChange={this.handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="line"></div>

                <div className="form-btn">
                  <button className="btn1" onClick={this.handleCancel}>
                    Cancel
                  </button>
                  <button className="btn2" onClick={this.handleAdd}>
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Person;
