import "./App.css";
import QuickAdd from "./Components/UserProfile/UserProfile.jsx";
import QuickView from "./Components/StatusBar/StatusBar.jsx";

function App() {
  return (
    <div id="page">
      <header>Header</header>
      <QuickAdd />
      <QuickView />
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
