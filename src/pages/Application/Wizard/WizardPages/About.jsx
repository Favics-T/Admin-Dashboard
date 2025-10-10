import React, { useState } from "react";
import AboutInput from "../ui/AboutInput";
import AvatarUploader from "../ui/AvatarUpload";

export default function AboutSection({ onNext }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    postal: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState("");

  // --- handle change ---
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // --- handle avatar ---
  function handleAvatarChange(dataUrl) {
    setAvatar(dataUrl);
  }

  // --- improved handleSubmit logic ---
  function handleSubmit(e) {
    e.preventDefault();

    // Validate important fields
    if (!form.firstName.trim() || !form.email.trim()) {
      setError("Please fill required fields.");
      return;
    }

    setError("");

    
    if (typeof onNext === "function") {
      onNext({ ...form, avatar });
    }
  }

  return (
    <section aria-labelledby="about-heading" className="w-full">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-sm">
        <header className="mb-6">
          <h1
            id="about-heading"
            className="text-xl md:text-2xl font-semibold text-gray-900"
          >
            Let’s start with the basic information
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            A short paragraph here to explain why we need this info. All
            personal fields are required.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          
          <div className="md:col-span-1 flex items-start">
            <div className="w-full">
              <AvatarUploader
                name={`${form.firstName || "Profile name"}`}
                subtitle="Profile picture"
                avatar={avatar}
                onChange={handleAvatarChange}
              />
              <p className="mt-3 text-xs text-gray-500">
                Upload a clear headshot. PNG, JPG — Max 2MB.
              </p>
            </div>
          </div>

         
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AboutInput
                id="firstName"
                label="First name"
                required
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                autoComplete="given-name"
              />
              <AboutInput
                id="lastName"
                label="Last name"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                autoComplete="family-name"
              />
              <AboutInput
                id="email"
                label="Email address"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <AboutInput
                id="phone"
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 801 234 5678"
                autoComplete="tel"
              />
              <AboutInput
                id="city"
                label="City"
                value={form.city}
                onChange={handleChange}
                placeholder="Lagos, Nigeria"
                autoComplete="address-level2"
              />
              <AboutInput
                id="postal"
                label="Postal code"
                value={form.postal}
                onChange={handleChange}
                placeholder="100001"
                autoComplete="postal-code"
              />
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-end gap-3">
              {error && (
                <div className="flex-1 text-sm text-red-500">{error}</div>
              )}
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2 rounded-lg bg-[#6E39CB] text-white font-medium text-sm shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#6E39CB]/50 transition"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
