import AppBar from "components/appBar.js/appBar"
import Navigation from "./components/naviagation/navigation"
import Profile from "components/Profile/profile"
import user from "./patch/user.json"
import Statistics from "components/Statistics/statistics"
import data from './patch/data.json'

const navLink = [
  {href:"profile"},
  {href:"friendList"},
  {href:"statistic"},
  {href:"transaction"},
]
function App(){
//   return <AppBar>
//     {{
//       navigation: <Navigation links={navLink}/>
//   }}
// </AppBar>
  return (
   
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />,
    
    <Statistics title="Upload stats" stats={data} />
  )
};

export default App
