import {Component} from 'react'

import InputContainerItems from '../InputContainerItems/index'

import PasswordItems from '../PasswordItems/index'

import './index.css'

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

class PasswordManager extends Component {
  state = {
    passwordCount: 0,
  }

  addBtnClicked = () => {
    this.setState(prevState => ({
      passwordCount: prevState.passwordCount + 1,
    }))
  }

  render() {
    const {passwordCount} = this.state
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
            {inputContainerItemsList.map(eachObject => (
              <InputContainerItems
                eachObject={eachObject}
                key={eachObject.id}
              />
            ))}
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
          <PasswordItems />
        </div>
      </div>
    )
  }
}

export default PasswordManager
