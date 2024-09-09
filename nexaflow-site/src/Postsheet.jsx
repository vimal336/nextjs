import { useState } from "react";

const Postsheet = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: ""
  });

  const [submitMessage, setSubmitMessage] = useState(""); // State for submit message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://api.nexaflow.xyz/api/googleSheets/66de9e68c4843fadfbfb59be", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "x-api-key": "~IxP2nxD3iyH0"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitMessage("Form submitted successfully!"); // Success message
      } else {
        const result = await response.json();
        setSubmitMessage(`Error: ${result.message || "Form submission failed"}`); // Display error message
      }
    } catch (error) {
      setSubmitMessage(`Error: ${error.message || "Form submission failed"}`); // Display error message
    }
  };

  return (
    <div>
      <h2>Submit Data to API</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitMessage && <p>{submitMessage}</p>} 
    </div>
  );
};

export default Postsheet;
