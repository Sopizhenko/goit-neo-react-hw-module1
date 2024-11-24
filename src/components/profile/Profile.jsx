import css from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.card_profile_info}>
        <img
          className={css.avatar}
          src={image}
          alt="User avatar"
        />
        <p className={css.profilename}>{name}</p>
        <p className={css.tag}>{`@${tag}`}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {Object.entries(stats).map(([key, value]) => (
            <li key={key} className={css.stat}>
                <span>{key}</span>
                <span className={css.stat_count}>{value}</span>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
