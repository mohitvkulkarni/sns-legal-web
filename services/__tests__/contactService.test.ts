import { submitContactForm, ContactFormData } from "../contactService";
import emailjs from "@emailjs/browser";

// Mock EmailJS
jest.mock("@emailjs/browser");

describe("Contact Service - EmailJS Integration", () => {
  const mockFormData: ContactFormData = {
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    subject: "Test Subject",
    message: "Test message content",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Clear console mocks
    jest.spyOn(console, "log").mockImplementation();
    jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("Successful Submission", () => {
    it("should send email successfully with all fields filled", async () => {
      // Mock successful EmailJS response
      (emailjs.send as jest.Mock).mockResolvedValue({
        status: 200,
        text: "OK",
      });

      const result = await submitContactForm(mockFormData);

      expect(emailjs.send).toHaveBeenCalledWith(
        expect.any(String), // SERVICE_ID
        expect.any(String), // TEMPLATE_ID
        {
          from_first_name: "John",
          from_last_name: "Doe",
          from_email: "john.doe@example.com",
          subject: "Test Subject",
          message: "Test message content",
          to_email: "sanjana@snslegalcounsellors.com",
        },
        expect.any(String) // PUBLIC_KEY
      );

      expect(result.success).toBe(true);
      expect(result.message).toBe(
        "Message sent successfully! We'll get back to you soon."
      );
      expect(result.error).toBeUndefined();
    });

    it("should send email successfully with only required fields", async () => {
      const minimalFormData: ContactFormData = {
        first_name: "",
        last_name: "",
        email: "test@example.com",
        subject: "",
        message: "Required message",
      };

      (emailjs.send as jest.Mock).mockResolvedValue({
        status: 200,
        text: "OK",
      });

      const result = await submitContactForm(minimalFormData);

      expect(result.success).toBe(true);
      expect(emailjs.send).toHaveBeenCalled();
    });
  });

  describe("Error Handling", () => {
    it("should handle network errors", async () => {
      (emailjs.send as jest.Mock).mockRejectedValue(
        new TypeError("Failed to fetch")
      );

      const result = await submitContactForm(mockFormData);

      expect(result.success).toBe(false);
      expect(result.message).toBe(
        "Network error. Please check your internet connection and try again."
      );
      expect(result.error).toBeDefined();
    });

    it("should handle EmailJS configuration errors", async () => {
      (emailjs.send as jest.Mock).mockRejectedValue({
        text: "Invalid service ID",
      });

      const result = await submitContactForm(mockFormData);

      expect(result.success).toBe(false);
      expect(result.message).toBe(
        "Email service configuration error. Please contact support."
      );
      expect(result.error).toBe("Invalid service ID");
    });

    it("should handle rate limiting errors", async () => {
      (emailjs.send as jest.Mock).mockRejectedValue({
        text: "Rate limit exceeded",
      });

      const result = await submitContactForm(mockFormData);

      expect(result.success).toBe(false);
      expect(result.message).toBe(
        "Service temporarily unavailable. Please try again later."
      );
      expect(result.error).toBe("Rate limit exceeded");
    });

    it("should handle generic errors", async () => {
      (emailjs.send as jest.Mock).mockRejectedValue(new Error("Unknown error"));

      const result = await submitContactForm(mockFormData);

      expect(result.success).toBe(false);
      expect(result.message).toBe(
        "Failed to send message. Please try again later."
      );
      expect(result.error).toBe("Unknown error");
    });
  });

  describe("Logging", () => {
    it("should log successful responses", async () => {
      const mockResponse = { status: 200, text: "OK" };
      (emailjs.send as jest.Mock).mockResolvedValue(mockResponse);

      await submitContactForm(mockFormData);

      expect(console.log).toHaveBeenCalledWith(
        "EmailJS Response:",
        mockResponse
      );
    });

    it("should log errors", async () => {
      const mockError = new Error("Test error");
      (emailjs.send as jest.Mock).mockRejectedValue(mockError);

      await submitContactForm(mockFormData);

      expect(console.error).toHaveBeenCalledWith("EmailJS Error:", mockError);
    });
  });
});
