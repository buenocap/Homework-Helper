import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Erastour from "./pages/Erastour.jsx";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:5080/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage users={users} />} />
        <Route path="/erastour" element={<Erastour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
