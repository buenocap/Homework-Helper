import "./Homepage.css";
import StatusBar from "../Components/StatusBar/StatusBar.jsx";
import UserProfile from "../Components/UserProfile/UserProfile.jsx";
import CreateUser from "../Components/CreateUser/CreateUser.jsx";

export default function Homepage({ users }) {
  return (
    <div id="page">
      <header>
        <h1>Homework Helper</h1>
      </header>
      <StatusBar />
      <UserProfile />
      <main>
        <div>
          <CreateUser />
        </div>
        <div>
          <p>Users</p>
          {users.length > 0
            ? users.map((user) => <p>{user.name}</p>)
            : "No users to show"}
        </div>
      </main>
      <footer>
        <h5>Created by Pedro Bueno</h5>
      </footer>
    </div>
  );
}
