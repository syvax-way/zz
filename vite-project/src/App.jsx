import React from "react";
import { UserProvider } from "../context/userContext";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div>
      <UserProvider>
        <Header />
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
