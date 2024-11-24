import css from "./FriendList.module.css";
import FriendListItem from "../friendlistitem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.friend_list_item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
