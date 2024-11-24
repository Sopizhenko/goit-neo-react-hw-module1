import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friend_card}>
      <img src={avatar} alt={name} width="100" />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
