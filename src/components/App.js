
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const Auth = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={(event) => setIsAuthenticated(event.target.checked)}
        />
        I am not a robot
      </label>
      <p>{isAuthenticated ? "You are authenticated." : "You are not authenticated."}</p>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Auth />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
