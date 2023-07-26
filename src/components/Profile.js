import defaultAvatarPath from '../images/profile-avatar.jpg';
import EditProfileBtn from './UI/EditProfileBtn';
import CardAddBtn from './UI/CardAddBtn';

function Profile(props) {
  return (
    <section className="profile">
      <div className="profile__info">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={props.profileAvatar} alt="Аватар" />
        </div>
        <div className="profile__description">
          <h1 className="profile__title">{props.profileName}</h1>
          <p className="profile__subtitle">{props.profileDescription}</p>
          <EditProfileBtn />
        </div>
      </div>
      <CardAddBtn />
    </section>
  )
}

export default Profile;