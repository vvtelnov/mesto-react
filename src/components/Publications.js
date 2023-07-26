// import { useState, useEffect } from 'react';
import Card from './Card.js';

function Publications(props) {
  // const [openPostData, setOpenedPostData] = useState({name: 'hghghg'})

  // useEffect( () => {
  //   console.log(openPostData)
  // })


  function isPostLiked(pubLikes) {
		return Boolean(pubLikes.find(elem => elem._id === props.userId))
	}

  function isPostOwner(postOwnerId) {
    return Boolean(postOwnerId === props.userId)
  }

  const emitCardImgClickEvent = (cardData) => {
    props.onCardImgClickEvent(cardData);
  }

  return (
    <section className="publications">
      {props.cards.map((card, i) => (
        <div key={card._id}>
          <Card
            handleCardClick={emitCardImgClickEvent}
            pubTitle={card.name}
            pubLink={card.link}
            pubLikesNumb={card.likes.length}
            pubLikes={card.likes}
            isLiked={isPostLiked(card.likes)}
            isOwner={isPostOwner(card.owner._id)}
          />
        </div>
      ))}
		</section>
  )
}

export default Publications;