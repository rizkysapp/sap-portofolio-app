"use client";

import React, { useState } from "react";
import Input from "./ui/Input";
import { toast } from "sonner";

const Form = () => {
  const initialFromData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFromData);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.message) return;

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    // const resData = await response.json();

    setFormData(initialFromData);
    if (response.status === 200) {
      toast.success("Message sent.");
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5  sm:mt-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:w-[55%]">
        <Input value={formData.name} onChange={handleChange} placeholder="Name" name="name" labelName="your name" type="text" />
        <Input value={formData.email} onChange={handleChange} placeholder="Email" name="email" labelName="your email" type="email" />
        <div>
          <label htmlFor="message" className="block ml-[2px] mb-1 text-base font-medium text-gray-700 capitalize ">
            Your message
          </label>
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            value={formData.message}
            rows={4}
            className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-300 border-gray-900  placeholder-gray-500 text-gray-800 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          />
        </div>
        <div>
          <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-800 sm:w-fit hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
