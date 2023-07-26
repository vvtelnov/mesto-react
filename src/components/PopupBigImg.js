import { useEffect } from 'react';
import CloseBtn from "./UI/CloseBtn"

function PopupBigImg(props) {

  useEffect(() => {
    const handleCloseByEscPress = evt => {
      if (evt.key === 'Escape') {
        props.onClosePopupBigImg()
      }
    }
    
    window.addEventListener('keydown', handleCloseByEscPress);

    return () => window.removeEventListener('keydown', handleCloseByEscPress);
  })

  function hanldleCloseByClick(evt) {
    if (evt.target === evt.currentTarget) {
      props.onClosePopupBigImg()
    }
    console.log(evt.target)
  }

  function handleCloseByBtnPress() {
    props.onClosePopupBigImg();
  }

  return (
    <div
      onClick={hanldleCloseByClick}
      id="popup-big-img"
      className="popup popup_opened popup_zoom-img"
    >
      <div className="popup__zoom-container">
        <CloseBtn trigerBaseEvent={handleCloseByBtnPress} />
        <img
          className="popup__image"
          src={props.link}
          alt={`Не идалось загрузить изображение (${props.title})`}
        />
        <h2>{props.title}</h2>
      </div>
    </div>
  )
}

export default PopupBigImg