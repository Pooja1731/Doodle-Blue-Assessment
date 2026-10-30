import { useState } from "react";
import { addBillingAddress } from "./api/BillingApi.js";
import Button from "./common components/Button.jsx";
import FormInput from "./common components/FormInput.jsx";
import Dropdown from "./common components/Dropdown.jsx";

import "./BillingAddress.css";

function BillingAddress() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    securityCode: "",
    country: "",
    city: "",
    address: "",
    agree: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setError("");
    setSuccess("");
  }

  const countryOptions = [
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "UK", label: "United Kingdom" },
  ];

  const cityOptions = [
    { value: "Chennai", label: "Chennai" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
  ];

  

async function handleSubmit(e) {
  e.preventDefault();

  // Name Validation
  if (!formData.name.trim()) {
    setError("Please enter your name.");
    return;
  }

  // Email Validation
  if (!formData.email.trim()) {
    setError("Please enter your email address.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    setError("Please enter a valid email address.");
    return;
  }

  // Phone Validation
  if (!formData.phone.trim()) {
    setError("Please enter your phone number.");
    return;
  }

  if (!/^\d{10}$/.test(formData.phone)) {
    setError("Phone number must contain exactly 10 digits.");
    return;
  }

  // Security Code Validation
  if (!formData.securityCode.trim()) {
    setError("Please enter your security code.");
    return;
  }

  if (!/^\d{3,6}$/.test(formData.securityCode)) {
    setError("Security Code must contain 3 to 6 digits.");
    return;
  }

  // Country Validation
  if (!formData.country) {
    setError("Please select your country.");
    return;
  }

  // City Validation
  if (!formData.city) {
    setError("Please select your city.");
    return;
  }

  // Address Validation
  if (!formData.address.trim()) {
    setError("Please enter your full address.");
    return;
  }

  // Billing Policy Validation
  if (!formData.agree) {
    setError("Please agree to the Billing Policy.");
    return;
  }

  try {
    setError("");
    setSuccess("");

    const data = await addBillingAddress({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      city: formData.city,
      address: formData.address,
      agree: formData.agree,
    });

    setSuccess("Billing details saved successfully!");

    console.log("Saved Billing Details:", data);

  } catch (error) {
    setError(error.message);
  }
}

  return (
    <div className="billing-page">
      <form className="billing-card" onSubmit={handleSubmit}>
        <h2>Billing Address</h2>

        <FormInput
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter 10-digit phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Security Code"
          name="securityCode"
          type="password"
          placeholder="Enter security code"
          value={formData.securityCode}
          onChange={handleChange}
          required
        />

        <div className="billing-location">
          <Dropdown
            placeholder="Select a country"
            options={countryOptions}
            value={formData.country}
            onChange={(e) =>
              setFormData({
                ...formData,
                country: e.target.value,
                city: "",
    })
  }
/>

          <Dropdown
            placeholder="Select a city"
            options={cityOptions}
            value={formData.city}
            onChange={(e) =>
            setFormData({
              ...formData,
              city: e.target.value,
    })
  }
/>
        </div>

        <label className="address-label" htmlFor="address">
          Full Address
        </label>

        <textarea
          id="address"
          name="address"
          placeholder="Write your Full Address..."
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label className="billing-policy">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          Agree with Billing Policy
        </label>

        {error && <p className="error-message">{error}</p>}

        {success && <p className="success-message">{success}</p>}

        <Button type="submit">Save &amp; Continue</Button>
      </form>
    </div>
  );
}

export default BillingAddress;
