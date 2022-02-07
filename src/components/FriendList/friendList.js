import MyFriends from "./friends";
import PropTypes from 'prop-types';
function FriendsList({items}) {
    return (
      <ul className="friend-list">
        {items.map(item =>
            <li key={item.id} className="item">
                <MyFriends
                name={item.name}
                avatar={item.avatar}
                isOnline={item.isOnline}
                />
        </li>)}
      </ul>  
    )
}
FriendsList.propTypes = {
   items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}
export default FriendsList;