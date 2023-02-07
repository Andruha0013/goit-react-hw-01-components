import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendList=({friends})=>{
    console.log(friends);
    return (
        <ul className={css.friend_list}>
            {friends.map(friend=>
                <li className={css.item} key={friend.id}>
                    {friend.isOnline ? <span className={css.status}></span>: <span className={(css.status)+` `+(css.status__red)}></span>}
                
                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={css.name}>{friend.name}</p>
            </li>
            )}
        </ul>
    );
}

FriendList.propTypes={
    friends:    PropTypes.array,
}