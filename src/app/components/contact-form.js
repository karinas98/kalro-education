"use client";

import { useState, useEffect } from "react";

export default function ContactBanner() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load reCAPTCHA script only once
  useEffect(() => {
    const scriptId = "recaptcha-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://www.google.com/recaptcha/api.js?render=6Le0ItgqAAAAAKpUrmAweoPpkn8PBHV_2fjaviSD";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!window.grecaptcha) {
      setStatusMessage("reCAPTCHA failed to load. Please refresh the page.");
      setStatusType("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const recaptchaToken = await window.grecaptcha.execute(
        "6Le0ItgqAAAAAKpUrmAweoPpkn8PBHV_2fjaviSD",
        { action: "submit" }
      );

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      if (response.ok) {
        setStatusMessage("Submitted! Thank you for your interest.");
        setStatusType("success");
        setFormData({
          full_name: "",
          email: "",
          message: "",
        });
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
      <h2 className="font-semibold pb-10 text-[22px] text-[#001C5A] ">
        CONTACT US TODAY
      </h2>
      <div className="flex justify-left">
        <div className="w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="FULL NAME*"
                required
                className="w-full p-4 bg-[#E9EDF4] rounded-lg placeholder:text-grey text-[14px] text-[#001C5A] focus:outline-none focus:ring-1 focus:ring-[#001C5A]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL*"
                required
                className="w-full p-4 bg-[#E9EDF4] rounded-lg placeholder:text-grey text-[14px] text-[#001C5A] focus:outline-none focus:ring-1 focus:ring-[#001C5A]"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE*"
              required
              className="w-full p-4 rounded-lg bg-[#E9EDF4] text-[14px] text-[#001C5A] placeholder:text-grey focus:outline-none focus:ring-1 focus:ring-[#001C5A] h-40"
            ></textarea>

            <input
              type="hidden"
              name="g-recaptcha-response"
              id="g-recaptcha-response"
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
                className={
                  statusType === "success"
                    ? "text-gray-700 text-center mt-4"
                    : "text-[#001C5A] text-center mt-4"
                }
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
