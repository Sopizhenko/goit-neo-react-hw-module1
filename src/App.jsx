import "./App.css";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Profile from "./components/profile/Profile";
import FriendList from "./components/friendlist/FriendList";
import TransactionHistory from "./components/transactionhistory/TransactionHistory";

function App() {
  return (
    <>
      <h2>Social Profile</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr />
      <h2>Friends</h2>
      <FriendList friends={friends} />
      <hr />
      <h2>Transactions</h2>
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
