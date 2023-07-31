import { useState } from 'react';
import Profile from './Profile.js';
import Publications from './Publications.js';
import PopupWithForm from './PopupWithForm.js';
import PopupBigImg from './ImagePopup.js';
// параметры инпутов форм
import {
  popupEditProfileInputs, popupNewPlaceInputs, popupEditAvatarInputs, popupConfirmDeleteInputs,
} from '../utils/inputsParam.js';
import { api } from '../utils/Api.js';


// api.getCards().then( res => {
//   console.log(res)
// }
// )
// console.log(api.getCards())

// let cards = await api.getCards()
// console.log(cards)
const initialUserInfo = await api.getUserInfoFromDB();
const initialPub = await api.getCards();

function Main(props) {
  const userId = initialUserInfo._id;
  const [userName, setUserName] = useState(initialUserInfo.name);
  const [userDescription, setUserDescription] = useState(initialUserInfo.about);
  const [userAvatar, setUserAvatar] = useState(initialUserInfo.avatar);
  const [isBigImgPopupOpened, toggleBigImgPopup] = useState(false)
  // console.log(userName)
  // console.log(userDescription)
  // console.log(userAvatar)
  // console.log(userId)
  
  const emitOpenBigImgPopup = (cardData) => {
    props.onCardImgClickEvent(cardData);
  }

  return (
    <main>
      <Profile
        profileName={userName}
        profileDescription={userDescription}
        profileAvatar={userAvatar}
      />
      <Publications
        onCardImgClickEvent={emitOpenBigImgPopup}
        cards={initialPub}
        userId={userId}
      />
      <PopupWithForm  inputsListParam={popupNewPlaceInputs} popupName={'Новое место'}/>

    </main>
  )
}

export default Main;