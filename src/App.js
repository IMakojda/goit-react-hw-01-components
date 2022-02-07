import Profile from "components/Profile/profile"
import user from "./patch/user.json"
import StatisticList from "components/Statistics/statisticList"
import data from './patch/data.json'
import FriendsList from "components/FriendList/friendList"
import friends from "./patch/friends.json"
function App(){

  return (
    <div>
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />

      <StatisticList stats={data} title="Upload stats"/>
      <FriendsList items={friends}/>
    </div>  
  )
};

export default App
