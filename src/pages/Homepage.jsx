import "./Homepage.css";
import StatusBar from "../Components/StatusBar/StatusBar.jsx";
import UserProfile from "../Components/UserProfile/UserProfile.jsx";
import CreateUser from "../Components/CreateUser/CreateUser.jsx";

export default function Homepage({ users, updateUserList }) {
  const individualData = users.map((user) => {
    return (
      <div key={user._id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.password}</p>
        <hr />
      </div>
    );
  });

  return (
    <div id="page">
      <header>
        <h1>Homework Helper</h1>
      </header>
      <StatusBar />
      <UserProfile />
      <main>
        <div id="main-content">
          <h1>Welcome</h1>
          <CreateUser updateUserList={updateUserList} />
          <br />
          {individualData}
        </div>
      </main>
      <footer>
        <h5>Created by Pedro Bueno</h5>
      </footer>
    </div>
  );
}
