import PropTypes from 'prop-types';

const MyFriends = ({
    name,
    avatar,
    isOnline,
    
    }) => {
    return ( 
        <div>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </div> 
    )
}

MyFriends.propTypes = {
  
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
  
}
    
export default MyFriends;