import { submitContactForm, ContactFormData } from "../services/contactService";

// Test utility function to verify API integration
export const testContactFormAPI = async (): Promise<void> => {
  const testData: ContactFormData = {
    first_name: "Test",
    last_name: "User",
    email: "test@example.com",
    subject: "Test Message",
    message: "This is a test message to verify the API integration.",
  };

  console.log("Testing Contact Form API...");
  console.log("Test data:", testData);

  try {
    const response = await submitContactForm(testData);
    console.log("API Response:", response);

    if (response.success) {
      console.log("✅ API Test PASSED - Form submission successful");
    } else {
      console.log("❌ API Test FAILED - Form submission failed");
      console.log("Error:", response.error);
    }
  } catch (error) {
    console.error("❌ API Test ERROR - Exception thrown:", error);
  }
};

// For manual testing in browser console
if (typeof window !== "undefined") {
  (window as any).testContactAPI = testContactFormAPI;
  console.log("Contact API test function available as window.testContactAPI()");
}
