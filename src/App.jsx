import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Erastour from "./pages/Erastour.jsx";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to update the user list
  const handleUpdateUserList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    // Define API URL
    const apiURL = "http://localhost:3000/api/users";

    axios
      .get(apiURL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage users={data} updateUserList={handleUpdateUserList} />
          }
        />
        <Route path="/erastour" element={<Erastour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
