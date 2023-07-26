import deleteBtnImagePath from '../../images/delete-icon.svg'

function CardDeleteBtn(props) {
  return (
    <button
      type="button"
      className="publication__delete-button"
    >
      <img src={deleteBtnImagePath} alt="Удалить" />
    </button>
  )
}

export default CardDeleteBtn;
