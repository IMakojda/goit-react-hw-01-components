import style from './Profile.module.css'
import PropTypes from 'prop-types';

const Profile = ({
    avatar,
    username,
    tag,
    location,
    stats
    }) => {
    return (
    <div className={style.profile}>
        <div className={style.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={style.user}
            />
            <p className={style.name}>{username}</p>
            <p className={style.tag}>{tag}</p>
            <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
            <li className={style.listItem}>
                <span className={style.label}>Followers</span>
                <span className={style.quantity}>{stats.followers}</span>
            </li>
            <li className={style.listItem}>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{stats.views}</span>
            </li>
            <li className={style.listItem}>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>);
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
  }),
};

export default Profile;