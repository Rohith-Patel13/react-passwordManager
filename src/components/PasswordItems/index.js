import {Component} from 'react'

import './index.css'

class PasswordItems extends Component {
  render() {
    const {eachObject} = this.props
    const {websiteVal, usernameVal} = eachObject
    return (
      <li className="liContainer">
        <div className="passwordDetailsContainer">
          <div className="roundFirstIcon">
            <p>Y</p>
          </div>
          <div className="passwordDetails">
            <p>{websiteVal}</p>
            <p>{usernameVal}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="starsImage"
            />
          </div>
        </div>
        <button type="button" className="deleteButton">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            data-testid="delete"
            className="deleteImage"
          />
        </button>
      </li>
    )
  }
}

export default PasswordItems
