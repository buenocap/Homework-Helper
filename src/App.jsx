import "./App.css";

import QuickAdd from "./Components/UserProfile/UserProfile.jsx";
import StatusBar from "./Components/StatusBar/StatusBar.jsx";

function App() {
  return (
    <div id="page">
      <header>
        <h1>Homework Helper</h1>>
      </header>
      <QuickAdd />
      <StatusBar />
      <main></main>
      <footer>
        <h3>Created by Pedro Bueno</h3>
      </footer>
    </div>
  );
}

export default App;
