import { useState } from "react";

function CardLikes(props) {
  const [isLiked, toggleLike] = useState(props.isLiked);

  return (
    <div className="publication__like-container">
      {isLiked
      ? (<button type="button" className="publication__like-button publication__like-button_active"></button>)
      : (<button type="button" className="publication__like-button"></button>)}
      <p className="publication__like-counter">{props.likeNumb}</p>
    </div>
  )
}

export default CardLikes;