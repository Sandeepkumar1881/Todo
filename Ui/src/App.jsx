import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import axios from "axios";

function App() {
  const baseURL = "http://localhost:3000";

  const [getRequest, setgetRequest] = useState([]);
  const [input, setInput] = useState("");

  // Fetch Requests from Backend
  useEffect(() => {
    axios
      .get(`${baseURL}/requests`)
      .then((res) => {
        console.log("API Response:", res.data);
        if (Array.isArray(res.data)) {
          setgetRequest(res.data); 
        } else {
          console.error("Unexpected API response format:", res.data);
        }
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);
  

  // Create New Request
  const createRequest = () => {
    if (!input.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    axios
      .post(`${baseURL}/requests`, { title: input, description: "Default description" }) 
      .then((res) => {
        console.log("Task added:", res.data);
        setgetRequest([...getRequest, res.data]); 
        setInput(""); 
      })
      .catch((err) => console.error("Error adding task:", err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">Your Own Todo App</h1>
        <div className="input_holder">
          <input
            type="text"
            placeholder="Add your Task Here!"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
          />
          <button onClick={createRequest}>Add</button>
        </div>
      </div>
    </main>
  );
}

export default App;
