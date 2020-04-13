import React from 'react';


const UserCard = props => {
    return(
        <div className='card'>
          <img src={props.avatar} alt={props.name} />
          <h3>{props.name}</h3>
          <p>Location: {props.location}</p>
          <p>Followers: {props.followers}</p>  
        </div>
    )
}

export default UserCard;