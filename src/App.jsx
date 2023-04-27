import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TextField } from "@channakyasoft/text-field";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <TextField.Root>
        {(id) => (
          <>
            <TextField.Label htmlFor={id}>Name</TextField.Label>
            <TextField.Input id={id} />
          </>
        )}
      </TextField.Root>
    </>
  );
}

export default App;
