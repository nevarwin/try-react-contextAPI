import { useState } from "react";

import "./App.css";
import { MyContext } from "./myContext";
import MyComponent from "./myComponent";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;
