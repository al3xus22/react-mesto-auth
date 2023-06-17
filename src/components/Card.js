import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const card = props.card;
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__button-like ${isLiked && 'element__button-like_active'}`
  );

  function handleClick() {
    props.onCardClick(card);
  }

  function handleLikeClick() {
    props.onCardLike(card);
  }

  function handleDeleteClick() {
    props.onCardDeleteClick(card._id);
  }

  return (
      <li className="element">
        {isOwn && <button className='element__trash' onClick={handleDeleteClick}/>}
        <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick}/>
        <div className="element__content">
          <h2 className="element__name">{props.card.name}</h2>
          <div className="element__like-container">
            <button onClick={handleLikeClick} className={cardLikeButtonClassName} type="button"></button>
            <p className="element__likes">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
  )
}

export default Card;