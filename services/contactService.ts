import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../constants";

export interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  error?: string;
}

interface EmailJSTemplateParams {
  from_first_name: string;
  from_last_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}

export const submitContactForm = async (
  formData: ContactFormData
): Promise<ContactFormResponse> => {
  try {
    // Map form data to EmailJS template parameters
    const templateParams: EmailJSTemplateParams = {
      from_first_name: formData.first_name,
      from_last_name: formData.last_name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log("EmailJS Response:", response);

    return {
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("EmailJS Error:", error);

    let errorMessage = "Failed to send message. Please try again later.";
    let errorDetails = "Unknown error occurred";

    // Handle EmailJS-specific errors
    if (error && typeof error === "object" && "text" in error) {
      errorDetails = (error as any).text;

      // Check for common error types
      if (
        errorDetails.includes("Invalid") ||
        errorDetails.includes("not found")
      ) {
        errorMessage =
          "Email service configuration error. Please contact support.";
      } else if (errorDetails.includes("limit")) {
        errorMessage =
          "Service temporarily unavailable. Please try again later.";
      }
    } else if (error instanceof TypeError && error.message.includes("fetch")) {
      errorMessage =
        "Network error. Please check your internet connection and try again.";
      errorDetails = error.message;
    } else if (error instanceof Error) {
      errorDetails = error.message;
    }

    return {
      success: false,
      message: errorMessage,
      error: errorDetails,
    };
  }
};
