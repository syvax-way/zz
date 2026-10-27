import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

function Header() {
  const { pull_oldim, pull_qoshdim, pul } = useContext(UserContext);
  const [summa, setSumma] = useState("");

  const qoshish = () => {
    if (summa) {
      pull_qoshdim(summa);
      setSumma("");
    }
  };

  const olish = () => {
    if (summa) {
      pull_oldim(summa);
      setSumma("");
    }
  };

  return (
    <div>
      <h1>Header</h1>

      <h2>Pul: {pul}</h2>

      <input
        type="number"
        value={summa}
        onChange={(e) => setSumma(e.target.value)}
        placeholder="Pul miqdori"
      />

      <button onClick={qoshish}>
        Pul qo'shish
      </button>

      <button onClick={olish}>
        Pul olish
      </button>
    </div>
  );
}

export default Header;