import MyFriends from "./friends";
import PropTypes from 'prop-types';
import s from "./Friends.module.css"

function FriendsList({ items }) {
  return (
    <div className={s.holder}>
      <ul className={s.friendList}>
        {items.map(item =>
            <li key={item.id} className={s.item}>
                <MyFriends
                name={item.name}
                avatar={item.avatar}
                isOnline={item.isOnline}
                />
        </li>)}
      </ul>  
    </div>  
  )
}
FriendsList.propTypes = {
   items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}
export default FriendsList;