import {Component} from 'react'

import './index.css'

const initialState = {
  firstNameBlur: false,
  LastNameBlur: false,
  firstName: '',
  lastName: '',
  registrationSuccess: false,
}

class RegistrationForm extends Component {
  state = initialState

  firstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  firstNameBlurFunc = () => {
    this.setState({firstNameBlur: true})
  }

  firstNameVerify = () => {
    const {firstNameBlur, firstName} = this.state

    if (firstNameBlur === true && firstName === '') {
      return <p className="text-danger">*Required</p>
    }
    return null
  }

  lastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  lastNameBlurFunc = () => {
    this.setState({LastNameBlur: true})
  }

  lastNameVerify = () => {
    const {LastNameBlur, lastName} = this.state

    if (LastNameBlur === true && lastName === '') {
      return <p className="text-danger">*Required</p>
    }
    return null
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' || lastName === '') {
      this.setState({firstNameBlur: true, LastNameBlur: true})
    } else {
      this.setState({registrationSuccess: true})
    }
  }

  renderForm = () => {
    const {firstName, lastName} = this.state
    return (
      <form className="shadow p-4 cart" onSubmit={this.submitForm}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">FIRST NAME</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="First name"
            onChange={this.firstNameChange}
            onBlur={this.firstNameBlurFunc}
            value={firstName}
          />
          {this.firstNameVerify()}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">LAST NAME</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Last name"
            onChange={this.lastNameChange}
            onBlur={this.lastNameBlurFunc}
            value={lastName}
          />
          {this.lastNameVerify()}
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    )
  }

  restartPage = () => {
    this.setState(initialState)
  }

  renderSuccesPage = () => (
    <div className="shadow p-4 cart">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
      </div>
      <p>Submitted Successfully</p>
      <button
        onClick={this.restartPage}
        type="button"
        className="btn btn-warning btn-block"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {registrationSuccess} = this.state
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <h1 className="text-warning font-weight-bold">Registration</h1>
        {registrationSuccess ? this.renderSuccesPage() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
