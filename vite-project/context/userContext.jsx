import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [name, setName] = useState("Ali");
  const [pul, setPul] = useState(1000);

  const pull_qoshdim = (miqdor) => {
    setPul((state) => state + Number(miqdor));
  };

  const pull_oldim = (miqdor) => {
    setPul((state) => state - Number(miqdor));
  };

  return (
    <UserContext.Provider
      value={{name, setName, pul, setPul, pull_oldim, pull_qoshdim,}}>
      {children}
    </UserContext.Provider>
  );
}