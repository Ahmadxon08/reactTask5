import { Component } from "react";
import Person from "./components/person/Person";

import Modal from "./components/person/Modal";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      people: [],
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  addPerson = (newPerson) => {
    this.setState({ people: [...this.state.people, newPerson] });
  };

  render() {
    const { isModalOpen, people } = this.state;
    return (
      <div>
        <Person openModal={this.openModal} />
        <Modal isModalOpen={isModalOpen} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default App;
