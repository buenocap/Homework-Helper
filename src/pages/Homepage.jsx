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
        <div id="main-content"></div>
      </main>
      <footer>
        <h5>Created by Pedro Bueno</h5>
      </footer>
    </div>
  );
}
