import BASE_URL from "./api.js";

export async function addBillingAddress(formData) {
  const response = await fetch(
    `${BASE_URL}/billingAddresses`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    console.log("API Error:", errorMessage);

    throw new Error(`Failed: ${response.status}`);
  }

  return await response.json();
}