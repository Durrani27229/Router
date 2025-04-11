import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We'll be in touch soon.`);
        // Reset form (optional)
        setFormData({ name: '', email: '', message: '' });
      };
  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: 'auto'  ,display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1>Contact Us</h1>
      <p>Have questions? We'd love to hear from you!</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </main>
  )
}

export default Contact
