"use client";

import { useState } from "react";

export default function ContactBanner() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Submitted! Thank you for your interest.");
        setStatusType("success");
        setFormData({ full_name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatusMessage(`Error: ${errorData.error || "Submission failed"}`);
        setStatusType("error");
      }
    } catch (error) {
      setStatusMessage("Network error. Please try again.");
      setStatusType("error");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl pb-20 px-6">
      <h2 className="font-semibold pb-10 text-[22px] text-[#001C5A]">
        CONTACT US TODAY
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="FULL NAME*"
            required
            className="w-full p-4 bg-[#E9EDF4] rounded-lg text-[14px] text-[#001C5A]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL*"
            required
            className="w-full p-4 bg-[#E9EDF4] rounded-lg text-[14px] text-[#001C5A]"
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="MESSAGE*"
          required
          className="w-full p-4 bg-[#E9EDF4] rounded-lg text-[14px] text-[#001C5A] h-40"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-[300px] py-4 rounded-full transition text-[16px] font-semibold ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-white text-[#001C5A] border border-[#001C5A] hover:bg-[#001C5A] hover:text-white"
          }`}
        >
          SUBMIT
        </button>
        {statusMessage && (
          <p
            className={`text-center mt-4 ${
              statusType === "success" ? "text-gray-700" : "text-red-600"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
}
