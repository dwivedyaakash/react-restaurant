import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import UserContext from "./components/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [username, setUsername] = useState("Default");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
