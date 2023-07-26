// import { useState } from 'react';
import CardLikes from './UI/CardLikes'
import CardDeleteBtn from './UI/CardDeleteBtn'

function Card(props) {
	// const [isLiked, toggleLike] = useState(props.userId)

	function handleCardImgClick() {
		props.handleCardClick({
			isOpened: true,
			postName: props.pubTitle,
			postLink: props.pubLink,
		})
	}

  return (
    <article className="publication">
			<img
				onClick={handleCardImgClick}
				className="publication__photo"
				src={props.pubLink}
				alt={props.pubTitle}
			/>
			<div className="publication__info">
				<h2 className="publication__title">{props.pubTitle}</h2>
				<CardLikes
					likeNumb={props.pubLikesNumb}
					isLiked={props.isLiked}
				/>
			</div>
			{props.isOwner && (<CardDeleteBtn />)}
		</article>
  )
}

export default Card