import Profile from "components/Profile/profile"
import user from "./patch/user.json"
import StatisticList from "components/Statistics/statisticList"
import data from './patch/data.json'
import FriendsList from "components/FriendList/friendList"
import friends from "./patch/friends.json"
import TransactionHistory from "components/TransactionHistory/transactionHistory"
import transactions from "./patch/transactions.json"

function App() {
  return (
    <div>
      <div className="profileHolder">
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
      </div>
      <StatisticList stats={data} title="Upload stats"/>
      <FriendsList items={friends} />
      <TransactionHistory items ={transactions}/>
    </div>   
  )
};

export default App
