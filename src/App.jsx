import { useState } from "react";
import getRandomPassword from "./getRandomPassword";

function App() {
  const [password, setPassword] = useState("");

  function handleNewPassword() {
    setPassword(getRandomPassword());
  }

  return (
    <>
      <h2>Random Password Generator</h2>
      <div className="inputBox">
        <input
          type="text"
          placeholder="Create Password"
          id="password"
          readOnly
          value={password}
        />
      </div>
      <div id="btn" onClick={handleNewPassword}>
        Generate Password
      </div>
    </>
  );
}

export default App;
