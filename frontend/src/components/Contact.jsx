import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="px-7 h-screen grid justify-center items-center" onSubmit={handleSubmit}>
      <div>
        <div className="text-center text-3xl font-bold mb-4">Contact Me!</div>
        
        <input
          className="p-3 capitalize shadow-2xl glass w-full mb-4 placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
          type="text"
          placeholder="First Name"
          id="first-Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        
        <input
          className="p-3 shadow-2xl glass w-full mb-4 placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
            className="p-3 shadow-2xl   glass w-full mb-4 text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]"
            type="date"
            required
          />
        <textarea
          className="p-3 glass shadow-2xl w-full mb-4 placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5] resize-none"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        
        <button
          className="outline-none glass shadow-2xl w-full p-3 bg-[#ffffff42] hover:border-solid hover:border-[1px] hover:text-[#ffffff] font-bold"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Contact;
