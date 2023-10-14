import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

// import InputContainerItems from '../InputContainerItems/index'

import PasswordItems from '../PasswordItems/index'

import './index.css'
/*

const inputContainerItemsList = [
  {
    id: 1,
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png',
    altOfIcon: 'website',
    placeholderText: 'Enter Website',
    typeOfText: 'url',
  },
  {
    id: 2,
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png',
    altOfIcon: 'username',
    placeholderText: 'Enter Username',
    typeOfText: 'text',
  },
  {
    id: 3,
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png',
    altOfIcon: 'password',
    placeholderText: 'Enter Password',
    typeOfText: 'password',
  },
]

*/

class PasswordManager extends Component {
  state = {
    passwordCount: 0,
    websiteValue: '',
    usernameValue: '',
    passwordValue: '',
    passwordDetailsArray: [],
  }

  addBtnClicked = () => {
    const {websiteValue, usernameValue, passwordValue} = this.state
    const newPasswordDetailsObject = {
      id: uuidv4(),
      websiteVal: websiteValue,
      usernameVal: usernameValue,
      passwordVal: passwordValue,
    }
    this.setState(prevState => ({
      passwordCount: prevState.passwordCount + 1,
      passwordDetailsArray: [
        ...prevState.passwordDetailsArray,
        newPasswordDetailsObject,
      ],
      websiteValue: '',
      usernameValue: '',
      passwordValue: '',
    }))
  }

  websiteChanging = event => {
    this.setState({websiteValue: event.target.value})
  }

  usernameChanging = event => {
    this.setState({usernameValue: event.target.value})
  }

  passwordChanging = event => {
    this.setState({passwordValue: event.target.value})
  }

  render() {
    const {
      passwordCount,
      websiteValue,
      usernameValue,
      passwordValue,
      passwordDetailsArray,
    } = this.state
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="appLogoStyle"
        />
        <div className="passwordManagerContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="passwordManagerImageStyle"
          />
          <form className="formContainer">
            <h1 className="inputContainerHeading">Add New Password</h1>
            <div className="inputAreaContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="imgIconStyle"
              />
              <hr className="hrLine" />
              <input
                type="url"
                placeholder="Enter Website"
                className="inputStyling"
                value={websiteValue}
                onChange={this.websiteChanging}
              />
            </div>

            <div className="inputAreaContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="imgIconStyle"
              />
              <hr className="hrLine" />
              <input
                type="text"
                placeholder="Enter Username"
                className="inputStyling"
                value={usernameValue}
                onChange={this.usernameChanging}
              />
            </div>

            <div className="inputAreaContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="password"
                className="imgIconStyle"
              />
              <hr className="hrLine" />
              <input
                type="password"
                placeholder="Enter Password"
                className="inputStyling"
                value={passwordValue}
                onChange={this.passwordChanging}
              />
            </div>
            <button
              type="button"
              className="btnAddEl"
              onClick={this.addBtnClicked}
            >
              Add
            </button>
          </form>
        </div>
        <div className="lowerMainContainer">
          <div className="upperContainer">
            <div className="upperFirst">
              <p>Your Passwords</p>
              <div className="numContainer">
                <p>{passwordCount}</p>
              </div>
            </div>

            <div className="SearchInputAreaContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="imgIconStyle"
              />
              <hr className="verticalLine" />
              <input
                type="search"
                placeholder="Search"
                className="inputStyling"
              />
            </div>
          </div>
          <hr className="bigHrLine" />
          <form className="formLower">
            <input type="checkbox" id="checkboxId" className="checkboxStyle" />
            <label htmlFor="checkboxId">Show Passwords</label>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="noPasswordImage"
          />
          <h1>No Passwords</h1>
          {passwordDetailsArray.map(eachObject => (
            <PasswordItems eachObject={eachObject} key={eachObject.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default PasswordManager
