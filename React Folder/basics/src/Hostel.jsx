
import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label>Password: </label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}
export default App;
