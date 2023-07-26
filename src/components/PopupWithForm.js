import CloseBtn from './UI/CloseBtn.js';
import FormInput from './UI/FormInput.js';
import FormSubmitBtn from './UI/FormSubmitBtn.js';

function PopupWithForm(props) {
  return (
    <div id="popup-new-place" className="popup">
		<div className="popup__container">
      <CloseBtn />
			<h2 className="popup__title">{props.popupName}</h2>
			<form name="add-new-publication" className="popup__form" noValidate>
				<fieldset className="popup__edit-form-container">
          {props.inputsListParam.map((input, i) => (
            <label key={i} className="popup__form-field">
              <FormInput inputParam={input} />
              <span className="new-pub-name-error popup__input-error"></span>
            </label>
          ))}
          <FormSubmitBtn />
				</fieldset>
			</form>
		</div>
	</div>
  )
}

export default PopupWithForm