import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import UserContext from "./components/UserContext";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("Default");

  return (
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
      <Header />
      <Outlet />
    </UserContext.Provider>
  );
}

export default App;
