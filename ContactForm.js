import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://m3p7vdulga.execute-api.ap-south-1.amazonaws.com/prod"; // Replace with your API Gateway URL

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to API Gateway (Lambda)
      const res = await axios.post(`${API_BASE_URL}/submit`, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setResponseMsg(res.data.message || "Form submitted successfully!");
    } catch (error) {
      setResponseMsg("Error submitting form. Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
     
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
        <textarea name="message" placeholder="Message" onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
      </form>
      {responseMsg && <p>{responseMsg}</p>}
    </div>
  );
}
