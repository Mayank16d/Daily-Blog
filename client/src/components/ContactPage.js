import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission or API call here
    // Clear form data and show alert message
    setFormData({
      name: '',
      contactNo: '',
      email: '',
      message: '',
    });
    alert('We will contact you soon. Thank you!');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contactNo: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter your name"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="contactNo" style={styles.label}>
            Contact No:
          </label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={styles.textarea}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" style={styles.button}>
            Submit
          </button>
          <button type="button" onClick={handleReset} style={styles.button}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // minHeight: '100vh',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: '10px'
  },
};

export default ContactPage;
