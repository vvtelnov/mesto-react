// «Редактировать профиль»
const popupEditProfileInputs = [
  {
    name: 'profile-title',
    required: true,
    minLength: 2,
    maxLength: 40,
    placeholder: 'Ваше имя',
    idName: 'profile-title-input',
    type: 'text',
    className: 'popup__text-input-form',
    value: '',
  },
  {
    name: 'profile-subtitle',
    required: true,
    minLength: 2,
    maxLength: 200,
    placeholder: 'Ваша професия',
    idName: 'profile-subtitle-input',
    type: 'text',
    className: 'popup__text-input-form',
    value: '',
  },
];

// «Новое место»
const popupNewPlaceInputs = [
  {
    name: 'publication-name',
    required: true,
    minLength: 2,
    maxLength: 30,
    placeholder: 'Название',
    idName: 'new-pub-name',
    type: 'text',
    value: '',
    className: 'popup__text-input-form',
  },
  {
    name: 'publication-img-link',
    required: true,
    placeholder: 'Ссылка на картинку',
    idName: 'new-pub-link',
    type: 'url',
    value: '',
    className: 'popup__text-input-form',
  },
]

// «Обновить аватар»
const popupEditAvatarInputs = [
  {
    name: 'avatar-img-link',
    required: true,
    placeholder: 'Ссылка на аватар',
    idName: 'avatar-link',
    type: 'url',
    value: '',
    className: 'popup__text-input-form',
  },
]

// «Вы уверены?»
const popupConfirmDeleteInputs = [

]

export {
  popupEditProfileInputs,
  popupNewPlaceInputs,
  popupEditAvatarInputs,
  popupConfirmDeleteInputs,
}
