import "./index.css";
import React, { useState } from "react";
import Employee from "./components/Employee";
import {v4 as uuidv4} from "uuid" 

function App() {
  const [role, setRole] = useState("Junior dev");
  const [employees, setEmployees] = useState([
    { name: "Chris", role: "Frontend Developer", img: "image1.jpeg" },
    { name: "Eninem", role: "Backend Developer", img: "image2.jpeg" },
    { name: "Anne", role: "Junior Dev", img: "image3.jpeg" },
    { name: "Doja", role: "DevOps", img: "image4.jpeg" },
    { name: "Eva", role: "UI/UX Designer", img: "image5.jpeg" },
    { name: "Ndumba", role: "Software Architect", img: "image6.jpeg" },
    { name: "Griffin", role: "QA Enginner", img: "image7.jpeg" },
    { name: "Hank", role: "Database Administrator", img: "image8.jpeg" },
    { name: "Lee", role: "Mobile App Dev", img: "image9.jpeg" },
    { name: "Jack", role: "Cloud Enginner", img: "image10.jpeg" },
    { name: "Krators", role: "Security Analyst", img: "image11.jpeg" },
    { name: "Leo", role: "Machine Learning Engineer", img: "image12.jpeg" },
    { name: "Octavia", role: "Data Scientist", img: "image13.jpeg" },
    { name: "Nathan", role: "Embedded Systems Engineer", img: "image14.jpeg" },
    { name: "Trin", role: "Software Engineer in Test", img: "image15.jpeg" },
  ]);
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input type="text" onChange={(e) => setRole(e.target.value)} />

          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4);
              return (
                <Employee
                key = {uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
              />
              );
              
            })}
          </div>
        </>
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
}

export default App;
