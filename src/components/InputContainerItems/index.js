import './index.css'

const InputContainerItems = props => {
  const {eachObject} = props
  const {iconUrl, altOfIcon, placeholderText, typeOfText} = eachObject

  return (
    <div className="inputAreaContainer">
      <img src={iconUrl} alt={altOfIcon} className="imgIconStyle" />
      <hr className="hrLine" />
      <input
        type={typeOfText}
        placeholder={placeholderText}
        className="inputStyling"
      />
    </div>
  )
}

export default InputContainerItems
