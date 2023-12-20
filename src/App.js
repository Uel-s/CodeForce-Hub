import "./index.css"
import React, { useState } from "react";
import Employee from "./components/Employee";

function App() {
  const [role, setRole] = useState("Dev");
  const showEmployees = true;

  return (
    <div className="App bg-cyan-300	">
      {showEmployees ? (
        <>
          <input type="text" onChange={(e) => setRole(e.target.value)} />
          <Employee name="Sam" role="intern" />
          <Employee name="Daine" role={role} />
          <Employee name="Bien" />
        </>
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
}

export default App;
