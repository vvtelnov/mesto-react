import closeBtnPath from '../../images/close-icon.svg';

function CloseBtn(props) {

  function buttonPressHandler() {
    // if trigerBaseEvent is passed as a prop to call the funct.
    if (props.trigerBaseEvent) {
      props.trigerBaseEvent();
    }
  }

  return (
    <button
      type="button"
      className="popup__close-button"
      onClick={buttonPressHandler}
    >
      <img
        className="popup__img-close-button"
        src={closeBtnPath}
        alt="Х"
      />
    </button>
  )
}

export default CloseBtn;