import PropTypes from 'prop-types';
import s from "./Friends.module.css"
const MyFriends = ({
    name,
    avatar,
    isOnline,
    
    }) => {
    return ( 
        <div className={s.friendsLi}>
            <span className={s.status} style={{
      
      backgroundColor: isOnline ? "#00e231" : "#ff0000",
   
    }}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </div> 
    )
}

MyFriends.propTypes = {
  
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
  
}
    
export default MyFriends;